import React, { useState } from "react";
import TaskifyLogo from "../assets/TaskifyLogo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center h-[86px] bg-primary text-white px-4 min-w-80 sticky top-0 z-10">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <div>
          <img src={TaskifyLogo} className="w-[50px] sm:w-[60px]" alt="Logo" />
        </div>

        {/* Desktop Buttons */}
        <div className={`hidden gap-4 sm:flex flex-col sm:flex-row`}>
          <button className="px-4 py-2 bg-white border rounded text-primary hover:text-secondary">
            Create Account
          </button>
          <button className="px-4 py-2 bg-white border rounded text-primary hover:text-secondary">
            Go to Dashboard
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button className="text-2xl text-white" onClick={toggleMenu}>
            {isOpen ? "✖" : "☰"} {/* Changes icon when open/closed */}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <div className="absolute top-[86px] left-0 w-full bg-primary flex flex-col items-center py-4 sm:hidden">
          <button className="px-4 py-2 my-1 bg-white border rounded text-primary hover:text-secondary">
            Create Account
          </button>
          <button className="px-4 py-2 my-1 bg-white border rounded text-primary hover:text-secondary">
            Go to Dashboard
          </button>
        </div>
      )}
    </div>
  );
}
