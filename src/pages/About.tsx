
import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-shl-darkBlue">About SHL Assessment Recommendation System</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700">
              The SHL Assessment Recommendation System is designed to help hiring managers find the most relevant 
              assessment solutions for their recruitment needs without having to manually search through catalogs 
              or rely on keyword-based filtering.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-shl-blue">How It Works</h2>
            
            <p className="text-gray-700">
              Our system uses natural language processing to interpret your job requirements and match them with the 
              most suitable SHL assessments. Whether you input a text description or provide a URL to a job posting, 
              the system analyzes the content and returns a ranked list of assessment recommendations.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-shl-blue">Key Features</h2>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Natural language query processing</li>
              <li>Job description URL analysis</li>
              <li>Intelligent recommendation algorithm</li>
              <li>Comprehensive assessment details</li>
              <li>API access for integration with other systems</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-shl-blue">Evaluation Metrics</h2>
            
            <p className="text-gray-700">
              The quality of our recommendations is measured using standard information retrieval metrics:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Mean Recall@K:</strong> Measures how many relevant assessments were retrieved in the top K 
                recommendations, averaged across all test queries.
              </li>
              <li>
                <strong>Mean Average Precision@K (MAP@K):</strong> Evaluates both relevance and ranking order of 
                retrieved assessments.
              </li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4 text-shl-blue">Data Sources</h2>
            
            <p className="text-gray-700">
              Our system is built upon data from the SHL product catalog, which includes a comprehensive range of 
              assessment solutions for various roles and skills. Each assessment is characterized by attributes such as:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Assessment name and URL</li>
              <li>Remote testing support</li>
              <li>Adaptive/IRT support</li>
              <li>Duration</li>
              <li>Test type</li>
            </ul>
            
            <p className="mt-6 text-gray-700">
              For more information on SHL's assessment solutions, visit the 
              <a href="https://www.shl.com/solutions/products/product-catalog/" target="_blank" rel="noopener noreferrer" className="text-shl-blue hover:underline ml-1">
                SHL product catalog
              </a>.
            </p>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>SHL Assessment Recommendation System © 2025</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
