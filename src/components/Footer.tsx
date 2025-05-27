
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                SuperBikes
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              India's premier destination for premium superbikes. Experience the thrill of riding with our curated collection of the world's finest motorcycles.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=Sport" className="text-muted-foreground hover:text-primary transition-colors">
                  Sport Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=Cruiser" className="text-muted-foreground hover:text-primary transition-colors">
                  Cruisers
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products?category=Adventure" className="text-muted-foreground hover:text-primary transition-colors">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/products?category=Naked" className="text-muted-foreground hover:text-primary transition-colors">
                  Naked Bikes
                </Link>
              </li>
              <li>
                <Link to="/products?category=Electric" className="text-muted-foreground hover:text-primary transition-colors">
                  Electric
                </Link>
              </li>
              <li>
                <Link to="/products?category=Scooter" className="text-muted-foreground hover:text-primary transition-colors">
                  Scooters
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: info@superbikes.in</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: 123 Bike Street, Mumbai, Maharashtra 400001</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 SuperBikes India. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
