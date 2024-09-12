import React from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const Header = ({
  navItems,
  toggleDarkMode,
  darkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  scrollTo,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 mb-5 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
        <h1 className="text-2xl font-bold">RiGaN</h1>
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <button
              key={item}
              variant="ghost"
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-gray-900 dark:text-white"
            >
              {item}
            </button>
          ))}
        </nav>
        <div className="flex items-center space-x-2 ">
          <button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="text-gray-900 dark:text-white"
          >
            {darkMode ? (
              <Sun className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Moon className="h-[1.2rem] w-[1.2rem]" />
            )}
          </button>
          <button
            variant="outline"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-900 dark:text-white"
          >
            {mobileMenuOpen ? (
              <X className="h-[1.2rem] w-[1.2rem]" />
            ) : (
              <Menu className="h-[1.2rem] w-[1.2rem]" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
