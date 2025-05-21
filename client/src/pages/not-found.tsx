
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home, ArrowLeft, Search, DoorOpen } from "lucide-react";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleSearch = () => {
    // In a real app, this would redirect to search results
    console.log("Searching for:", searchQuery);
  };
  
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <Card className="w-full max-w-md border-gray-700 bg-gray-800 shadow-xl">
        <CardContent className="pt-6">
          <div className="flex items-center mb-4 gap-3">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <div>
              <h1 className="text-3xl font-bold text-gray-100">404</h1>
              <p className="text-gray-400">Page Not Found</p>
            </div>
          </div>
          
          <div className="my-6 h-px bg-gray-700" />
          
          <p className="text-gray-300 mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
       
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            <a href="/" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </a>
            <a href="/room/" className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
              <DoorOpen className="h-4 w-4" />
              <span>Rooms</span>
            </a>
            <button 
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Go Back</span>
            </button>
          </div>
        </CardContent>
      </Card>
      
      <p className="text-gray-500 text-sm mt-8">
        If you believe this is an error, please contact support.
      </p>
    </div>
  );
}