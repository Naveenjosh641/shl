
import { useState } from "react";
import Header from "@/components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ApiDocs = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({
      title: "Copied to clipboard",
      description: "API endpoint URL has been copied to your clipboard.",
    });

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-shl-darkBlue">API Documentation</h1>
          <p className="text-gray-600 mb-8">
            Integrate SHL assessment recommendations into your own applications using our API.
          </p>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-3 w-full mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>API Overview</CardTitle>
                  <CardDescription>
                    The SHL Assessment Recommendation API allows you to programmatically retrieve assessment 
                    recommendations based on job descriptions or natural language queries.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-lg font-medium">Authentication</h3>
                  <p className="text-gray-700">
                    All API requests require an API key to be passed in the headers. Contact support to obtain your API key.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md">
                    <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                  
                  <h3 className="text-lg font-medium mt-6">Rate Limits</h3>
                  <p className="text-gray-700">
                    The API is limited to 100 requests per minute per API key. If you exceed this limit, 
                    your requests will be throttled, and you will receive a 429 Too Many Requests response.
                  </p>
                  
                  <h3 className="text-lg font-medium mt-6">Response Format</h3>
                  <p className="text-gray-700">
                    All API responses are returned in JSON format. Successful responses will have a 200 OK status code.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="endpoints" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Recommendations</CardTitle>
                  <CardDescription>
                    Get assessment recommendations based on a text query or job description URL
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-gray-100 px-3 py-2 rounded-md flex-1">
                      GET /api/recommendations
                    </code>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="ml-2"
                      onClick={() => handleCopy("https://api.shl-assessment-finder.com/api/recommendations")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <h3 className="text-lg font-medium mt-4">Query Parameters</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 border-b p-3">
                      <div className="font-medium">Parameter</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 border-b p-3">
                      <div className="font-mono">query</div>
                      <div>string</div>
                      <div>Natural language job description text</div>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <div className="font-mono">url</div>
                      <div>string</div>
                      <div>URL of a job description (optional, alternative to query)</div>
                    </div>
                    <div className="grid grid-cols-3 border-t p-3">
                      <div className="font-mono">limit</div>
                      <div>number</div>
                      <div>Maximum number of results (default: 10)</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Details</CardTitle>
                  <CardDescription>
                    Get detailed information about a specific assessment
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <code className="text-sm bg-gray-100 px-3 py-2 rounded-md flex-1">
                      GET /api/assessments/{"{id}"}
                    </code>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="ml-2"
                      onClick={() => handleCopy("https://api.shl-assessment-finder.com/api/assessments/{id}")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <h3 className="text-lg font-medium mt-4">Path Parameters</h3>
                  <div className="border rounded-md">
                    <div className="grid grid-cols-3 border-b p-3">
                      <div className="font-medium">Parameter</div>
                      <div className="font-medium">Type</div>
                      <div className="font-medium">Description</div>
                    </div>
                    <div className="grid grid-cols-3 p-3">
                      <div className="font-mono">id</div>
                      <div>string</div>
                      <div>Assessment ID</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Example Requests</CardTitle>
                  <CardDescription>
                    Here are some example API requests and responses
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Request: Get Recommendations by Query</h3>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                      GET /api/recommendations?query=Java developers with collaboration skills
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2">Response:</h3>
                    <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto max-h-80">
                      {JSON.stringify({
                        "success": true,
                        "results": [
                          {
                            "id": "1",
                            "name": "Java Developer Assessment",
                            "url": "https://www.shl.com/solutions/products/product-catalog/java-assessment",
                            "remoteTestingSupport": true,
                            "adaptiveSupport": true,
                            "duration": "40 minutes",
                            "testType": "Technical",
                            "relevanceScore": 5.8
                          },
                          {
                            "id": "6",
                            "name": "Leadership Potential Assessment",
                            "url": "https://www.shl.com/solutions/products/product-catalog/leadership-assessment",
                            "remoteTestingSupport": true,
                            "adaptiveSupport": true,
                            "duration": "35 minutes",
                            "testType": "Behavioral",
                            "relevanceScore": 2.3
                          }
                        ],
                        "metadata": {
                          "totalResults": 2,
                          "metrics": {
                            "recall": 0.85,
                            "precision": 0.92
                          }
                        }
                      }, null, 2)}
                    </pre>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-medium mb-2">Request: Get Assessment Details</h3>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-4">
                      GET /api/assessments/1
                    </div>
                    
                    <h3 className="text-lg font-medium mb-2">Response:</h3>
                    <pre className="bg-gray-100 p-3 rounded-md text-sm overflow-auto max-h-80">
                      {JSON.stringify({
                        "success": true,
                        "assessment": {
                          "id": "1",
                          "name": "Java Developer Assessment",
                          "url": "https://www.shl.com/solutions/products/product-catalog/java-assessment",
                          "remoteTestingSupport": true,
                          "adaptiveSupport": true,
                          "duration": "40 minutes",
                          "testType": "Technical",
                          "keywords": ["java", "programming", "development", "coding", "software engineer"],
                          "description": "Comprehensive assessment for Java developers measuring core Java skills, problem-solving, and code quality."
                        }
                      }, null, 2)}
                    </pre>
                  </div>
                </CardContent>
                <CardFooter>
                  <p className="text-sm text-gray-500">
                    For more complex examples and use cases, refer to the full API documentation or contact our support team.
                  </p>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Try the API</CardTitle>
                  <CardDescription>
                    Enter your query to see a sample API response
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-2">
                    <Input 
                      placeholder="e.g., Java developer with strong collaboration skills"
                      className="flex-1"
                    />
                    <Button>Send Request</Button>
                  </div>
                  <div className="mt-4 bg-gray-100 p-3 rounded-md h-40 flex items-center justify-center text-gray-400">
                    API response will appear here
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

export default ApiDocs;
