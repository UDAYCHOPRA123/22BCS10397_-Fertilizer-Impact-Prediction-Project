import { Link } from 'react-router-dom';
import { Sprout, User } from 'lucide-react';
import Button from './Button';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-900">FertilizerAI</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Login</span>
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="flex items-center space-x-2">
                <span>Get Started</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}