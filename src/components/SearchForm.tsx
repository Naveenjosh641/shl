import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";

interface SearchFormProps {
  onSearch: (query: string, isUrl: boolean) => void;
  isLoading: boolean;
}

const SearchForm = ({ onSearch, isLoading }: SearchFormProps) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState<"text" | "url">("text");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      toast({
        title: "Error",
        description: "Please enter a search query or URL",
        variant: "destructive",
      });
      return;
    }

    if (searchType === "url" && !isValidUrl(query)) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL",
        variant: "destructive",
      });
      return;
    }

    onSearch(query, searchType === "url");
  };

  const isValidUrl = (urlString: string) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Tabs defaultValue="text" className="w-full" onValueChange={(value) => setSearchType(value as "text" | "url")}>
        <TabsList className="grid w-full grid-cols-2 mb-4">
          <TabsTrigger value="text">Natural Language Query</TabsTrigger>
          <TabsTrigger value="url">Job Description URL</TabsTrigger>
        </TabsList>
        
        <TabsContent value="text" className="mt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="query" className="text-sm font-medium text-gray-700">
                Enter a job description or skills requirement
              </label>
              <div className="relative">
                <Input
                  id="query"
                  placeholder="E.g., I need Java developers with strong collaboration skills"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-10"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <Button 
              type="submit" 
              className="w-full bg-shl-blue hover:bg-shl-darkBlue"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Find Assessments"}
            </Button>
          </form>
        </TabsContent>
        
        <TabsContent value="url" className="mt-0">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
              <label htmlFor="url" className="text-sm font-medium text-gray-700">
                Enter a job description URL
              </label>
              <Input
                id="url"
                type="url"
                placeholder="https://example.com/job-description"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-shl-blue hover:bg-shl-darkBlue"
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : "Find Assessments"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SearchForm;
