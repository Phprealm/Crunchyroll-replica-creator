
import { Link } from "react-router-dom";

const CrunchyFooter = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6">
      <div className="cr-container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-4 text-crunchyroll-orange">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm cr-link">Browse</Link></li>
              <li><Link to="/" className="text-sm cr-link">Manga</Link></li>
              <li><Link to="/" className="text-sm cr-link">News</Link></li>
              <li><Link to="/" className="text-sm cr-link">Games</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-crunchyroll-orange">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm cr-link">Facebook</a></li>
              <li><a href="#" className="text-sm cr-link">Twitter</a></li>
              <li><a href="#" className="text-sm cr-link">Instagram</a></li>
              <li><a href="#" className="text-sm cr-link">YouTube</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-crunchyroll-orange">Crunchyroll</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm cr-link">About</a></li>
              <li><a href="#" className="text-sm cr-link">Help/FAQ</a></li>
              <li><a href="#" className="text-sm cr-link">Terms of Service</a></li>
              <li><a href="#" className="text-sm cr-link">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold mb-4 text-crunchyroll-orange">Account</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm cr-link">Create Account</a></li>
              <li><a href="#" className="text-sm cr-link">Log In</a></li>
              <li><a href="#" className="text-sm cr-link">Premium</a></li>
              <li><a href="#" className="text-sm cr-link">Gift Premium</a></li>
            </ul>
          </div>
          
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <img 
              src="https://static.crunchyroll.com/cxweb/assets/img/logo-cr.png" 
              alt="Crunchyroll" 
              className="h-8 mb-4" 
            />
            <p className="text-xs text-muted-foreground mb-4">
              Crunchyroll, LLC
              <br />
              © Crunchyroll, LLC
            </p>
            <div className="flex items-center space-x-4">
              <img src="https://static.crunchyroll.com/assets/img/sony_logo.png" alt="Sony" className="h-4" />
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-muted text-xs text-muted-foreground">
          <p>
            © Crunchyroll, LLC. All rights reserved. This is a demo website created for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CrunchyFooter;
