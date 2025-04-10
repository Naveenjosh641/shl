import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-shl-blue text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold">SHL Assessment Finder</h1>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/api-docs" className="hover:text-gray-300">API</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <Search size={20} />
          <span className="hidden md:inline">Search Assessments</span>
        </div>
      </div>
    </header>
  );
};
