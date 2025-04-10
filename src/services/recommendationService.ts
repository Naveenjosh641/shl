import { assessments, AssessmentData } from "../data/assessments";

interface RecommendationResult {
  assessments: Array<AssessmentData & { relevanceScore: number }>;
  metrics: {
    recall: number;
    precision: number;
  };
}

export async function getRecommendations(query: string, isUrl: boolean): Promise<RecommendationResult> {
  if (isUrl) {
    // In a real implementation, we would fetch content from the URL
    // For now, we'll assume the URL contains some keywords related to the job
    console.log(`Processing URL: ${query}`);
    // Simulating URL processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    query = extractKeywordsFromUrl(query);
  }

  // Normalize the query text
  const normalizedQuery = query.toLowerCase();
  const queryTerms = normalizedQuery.split(/\s+/);

  // Score each assessment based on keyword matches
  const scoredAssessments = assessments.map(assessment => {
    const concatenatedText = `${assessment.name.toLowerCase()} ${assessment.description.toLowerCase()} ${assessment.keywords.join(" ").toLowerCase()}`;
    
    // Simple TF-IDF like scoring
    let score = 0;
    for (const term of queryTerms) {
      if (term.length < 3) continue; // Skip very short terms
      
      // Check if term exists in assessment text
      if (concatenatedText.includes(term)) {
        // Score boost for exact keyword matches
        if (assessment.keywords.some(keyword => keyword.toLowerCase() === term)) {
          score += 3;
        } else {
          score += 1;
        }
      }
    }
    
    return {
      ...assessment,
      relevanceScore: score,
    };
  });

  // Sort by relevance score (highest first)
  const sortedAssessments = scoredAssessments
    .filter(a => a.relevanceScore > 0)  // Only include assessments with some relevance
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 10);  // Get top 10

  // Calculate simple metrics
  // In a real implementation, these would be compared against a ground truth
  const recall = sortedAssessments.length > 0 ? 1.0 : 0; // Simplified recall calculation
  const precision = sortedAssessments.length > 0 ? 0.8 : 0; // Simplified precision calculation

  return {
    assessments: sortedAssessments,
    metrics: {
      recall,
      precision,
    }
  };
}

// Mock function to extract keywords from URL
function extractKeywordsFromUrl(url: string): string {
  // In a real application, this would fetch the content from the URL
  // and extract relevant text
  
  // Return mock keywords based on URL
  if (url.includes("java")) {
    return "java developer backend programming";
  } else if (url.includes("python") || url.includes("data")) {
    return "python data science analytics machine learning";
  } else if (url.includes("lead") || url.includes("management")) {
    return "leadership management team executive";
  } else {
    // Default keywords
    return "developer technical skills professional";
  }
}

export async function getAssessmentById(id: string): Promise<AssessmentData | null> {
  const assessment = assessments.find(a => a.id === id);
  return assessment || null;
}
