import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const GlassNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="fixed w-full top-0 z-50">
      {/* Desktop Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="backdrop-blur-lg bg-white/10 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between p-4">
            {/* Logo */}
            <div className="flex items-center" onClick={() => navigate("/")}>
              <span className="text-black text-2xl font-bold">NammaRights</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/features" className="text-black hover:text-black transition-colors">
                Features
              </a>
              <a href="/terms" className="text-black/90 hover:text-black transition-colors">
                Terms Of Use
              </a>
              
              <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl text-black transition-all" onClick={() => navigate("/categories")}>
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden p-4 border-t border-white/10">
              <div className="flex flex-col space-y-4">
                <a href="./features" className="text-black/90 hover:text-black">
                  Features
                </a>
                <a href="./terms" className="text-black/90 hover:text-black">
                  Terms of use
                </a>
             
                <button className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-xl text-black mt-4" onClick={() => navigate("/categories")}>
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default GlassNav;