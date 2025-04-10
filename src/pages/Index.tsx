
import { useState } from "react";
import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import ResultsTable, { Assessment } from "@/components/ResultsTable";
import { getRecommendations } from "@/services/recommendationService";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const Index = () => {
  const [results, setResults] = useState<Assessment[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = async (query: string, isUrl: boolean) => {
    setIsLoading(true);
    setHasSearched(true);
    
    try {
      const result = await getRecommendations(query, isUrl);
      setResults(result.assessments);
      
      if (result.assessments.length === 0) {
        toast({
          title: "No matching assessments found",
          description: "Try broadening your search or using different keywords.",
        });
      } else {
        toast({
          title: `Found ${result.assessments.length} matching assessments`,
          description: `Showing the most relevant results for your query.`,
          variant: "default",
        });
      }
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      toast({
        title: "Error",
        description: "Failed to fetch assessment recommendations. Please try again.",
        variant: "destructive",
      });
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearResults = () => {
    setResults([]);
    setHasSearched(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">SHL Assessment Recommendation System</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the most relevant SHL assessments for your hiring needs using natural language or job descriptions
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <SearchForm onSearch={handleSearch} isLoading={isLoading} />
        </div>

        {isLoading && (
          <div className="flex justify-center my-12">
            <div className="flex flex-col items-center">
              <Loader2 className="h-12 w-12 animate-spin text-shl-blue" />
              <p className="mt-4 text-shl-blue font-medium">Finding the best assessments for you...</p>
            </div>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Recommended Assessments</h2>
              <Button variant="outline" onClick={handleClearResults}>
                Clear Results
              </Button>
            </div>
            <ResultsTable assessments={results} />
          </div>
        )}

        {!isLoading && hasSearched && results.length === 0 && (
          <div className="text-center my-12">
            <p className="text-lg text-gray-600">No matching assessments found. Try a different query.</p>
            <Button 
              variant="outline" 
              className="mt-4" 
              onClick={handleClearResults}
            >
              Try Again
            </Button>
          </div>
        )}
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>SHL Assessment Recommendation System © 2025</p>
          <p className="text-sm mt-2">
            <a href="https://www.shl.com" target="_blank" rel="noopener noreferrer" className="text-shl-blue hover:underline">
              Visit SHL Website
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
