
import { ExternalLink } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface Assessment {
  id: string;
  name: string;
  url: string;
  remoteTestingSupport: boolean;
  adaptiveSupport: boolean;
  duration: string;
  testType: string;
  relevanceScore?: number;
}

interface ResultsTableProps {
  assessments: Assessment[];
}

const ResultsTable = ({ assessments }: ResultsTableProps) => {
  if (assessments.length === 0) {
    return null;
  }

  return (
    <div className="w-full overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Assessment</TableHead>
            <TableHead>Test Type</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-center">Remote Testing</TableHead>
            <TableHead className="text-center">Adaptive/IRT</TableHead>
            <TableHead className="text-right">Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assessments.map((assessment) => (
            <TableRow key={assessment.id}>
              <TableCell className="font-medium">{assessment.name}</TableCell>
              <TableCell>{assessment.testType}</TableCell>
              <TableCell>{assessment.duration}</TableCell>
              <TableCell className="text-center">
                {assessment.remoteTestingSupport ? (
                  <Badge variant="default" className="bg-green-600">Yes</Badge>
                ) : (
                  <Badge variant="outline">No</Badge>
                )}
              </TableCell>
              <TableCell className="text-center">
                {assessment.adaptiveSupport ? (
                  <Badge variant="default" className="bg-green-600">Yes</Badge>
                ) : (
                  <Badge variant="outline">No</Badge>
                )}
              </TableCell>
              <TableCell className="text-right">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <a 
                        href={assessment.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-shl-blue hover:text-shl-darkBlue"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Details
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>View assessment details on SHL website</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsTable;
