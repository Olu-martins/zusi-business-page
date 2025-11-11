"use client";

import Link from "next/link";
import { useState } from "react";
import { useActiveSection } from "./ActiveSectionContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();

  const handleLinkClick = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] w-full bg-white shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/assets/Zusi new logo no backgrd.svg"
              alt="ZUSI Logo"
              width={120}
              height={120}
              className="w-24 h-24 md:w-28 md:h-28"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={() => handleLinkClick("home")}
              className={`transition-colors font-medium ${
                activeSection === "home"
                  ? "text-accent-green border-b-2 border-accent-green pb-1"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => handleLinkClick("features")}
              className={`transition-colors font-medium ${
                activeSection === "features"
                  ? "text-accent-green border-b-2 border-accent-green pb-1"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              Features
            </a>
            <a
              href="#products"
              onClick={() => handleLinkClick("products")}
              className={`transition-colors font-medium ${
                activeSection === "products"
                  ? "text-accent-green border-b-2 border-accent-green pb-1"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              Products
            </a>
            <a
              href="#about"
              onClick={() => handleLinkClick("about")}
              className={`transition-colors font-medium ${
                activeSection === "about"
                  ? "text-accent-green border-b-2 border-accent-green pb-1"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              About
            </a>
            <a
              href="#waitlist"
              onClick={() => handleLinkClick("waitlist")}
              className={`px-6 py-2 rounded-lg transition-colors font-medium ${
                activeSection === "waitlist"
                  ? "bg-accent-green text-white ring-2 ring-accent-green ring-offset-2"
                  : "bg-accent-green text-white hover:bg-accent-green/90"
              }`}
            >
              Join Waitlist
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a
              href="#home"
              onClick={() => handleLinkClick("home")}
              className={`block transition-colors font-medium py-2 ${
                activeSection === "home"
                  ? "text-accent-green font-semibold"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              Home
            </a>
            <a
              href="#features"
              onClick={() => handleLinkClick("features")}
              className={`block transition-colors font-medium py-2 ${
                activeSection === "features"
                  ? "text-accent-green font-semibold"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              Features
            </a>
            <a
              href="#products"
              onClick={() => handleLinkClick("products")}
              className={`block transition-colors font-medium py-2 ${
                activeSection === "products"
                  ? "text-accent-green font-semibold"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              Products
            </a>
            <a
              href="#about"
              onClick={() => handleLinkClick("about")}
              className={`block transition-colors font-medium py-2 ${
                activeSection === "about"
                  ? "text-accent-green font-semibold"
                  : "text-neutral-dark hover:text-accent-green"
              }`}
            >
              About
            </a>
            <a
              href="#waitlist"
              onClick={() => handleLinkClick("waitlist")}
              className={`block px-6 py-2 rounded-lg transition-colors font-medium text-center ${
                activeSection === "waitlist"
                  ? "bg-accent-green text-white ring-2 ring-accent-green"
                  : "bg-accent-green text-white hover:bg-accent-green/90"
              }`}
            >
              Join Waitlist
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

