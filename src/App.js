import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useSpring as useMouseSpring,
  AnimatePresence,
} from "framer-motion";

// Import all the components
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Academia from "./components/Academia";
import Header from "./components/Header";
import LoadingScreen from "./components/LoadingScreen";

const navItems = [
  "Home",
  "About",
  "Works",
  "Services",
  "Skills",
  "Academia",
  "Contact",
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Cursor animation
  const cursorX = useMotionValue(-120);
  const cursorY = useMotionValue(-120);
  const springConfig = { damping: 30, stiffness: 800 };
  const cursorXSpring = useMouseSpring(cursorX, springConfig);
  const cursorYSpring = useMouseSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 17);
      cursorY.set(e.clientY - 17);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Click animation
  const [clickEffect, setClickEffect] = useState({
    x: 0,
    y: 0,
    clicked: false,
  });

  const handleClick = (e) => {
    setClickEffect({ x: e.clientX, y: e.clientY, clicked: true });
    setTimeout(() => setClickEffect({ ...clickEffect, clicked: false }), 500);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark" : ""}`}
      onClick={handleClick}
    >
      <div className="bg-slate-300 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1  bg-gradient-to-r from-purple-500 to-pink-500 z-50"
          style={{ scaleX }}
        />

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-16 z-30 bg-white dark:bg-gray-800 shadow-lg md:hidden"
            >
              <nav className="container mx-auto py-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    variant="ghost"
                    onClick={() => scrollTo(item.toLowerCase())}
                    className="w-full justify-start text-left py-2 px-4 text-gray-900 dark:text-white"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {isLoading ? (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <main className="container mx-auto px-4 pt-24">
            <Header
              navItems={navItems}
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
              mobileMenuOpen={mobileMenuOpen}
              setMobileMenuOpen={setMobileMenuOpen}
              scrollTo={scrollTo}
            />
            <Home />
            <About />
            <Works />
            <Services darkMode={darkMode} setDarkMode={setDarkMode} />
            <Skills />
            <Academia />
            <Contact />
          </main>
        )}

        <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-300">
            © 2023 Rigan Paul. All rights reserved.
          </p>
        </footer>

        {/* Custom cursor */}
        <motion.div
          className="fixed top-0 left-0 w-6 h-6 bg-purple-600 rounded-full pointer-events-none mix-blend-difference z-50"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />

        {/* Click effect */}
        {clickEffect.clicked && (
          <motion.div
            className="fixed w-8 h-8 bg-purple-500 rounded-full pointer-events-none z-40"
            style={{
              left: clickEffect.x - 21,
              top: clickEffect.y - 21,
            }}
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 4, opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        )}
      </div>
    </div>
  );
}
