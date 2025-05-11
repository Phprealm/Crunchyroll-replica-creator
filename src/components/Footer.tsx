
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 md:px-6 text-center">
      <div className="container mx-auto">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-300 hover:text-moviebox-primary">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-moviebox-primary">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-moviebox-primary">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-300 hover:text-moviebox-primary">
            <Youtube size={20} />
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-8">
          <a href="#" className="text-gray-300 hover:text-moviebox-primary font-medium">
            Conditions of Use
          </a>
          <a href="#" className="text-gray-300 hover:text-moviebox-primary font-medium">
            Privacy & Policy
          </a>
          <a href="#" className="text-gray-300 hover:text-moviebox-primary font-medium">
            Press Room
          </a>
        </div>
        
        <p className="text-moviebox-gray text-sm">
          © 2023 MovieBox by Adriana Eka Prayudha
        </p>
      </div>
    </footer>
  );
};

export default Footer;
