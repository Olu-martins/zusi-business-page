"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | undefined>(undefined);

export function ActiveSectionProvider({ children }: { children: ReactNode }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "features", "products", "about", "waitlist"];
    const observers: IntersectionObserver[] = [];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for header height

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    // Use Intersection Observer for more accurate detection
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const rect = entry.boundingClientRect;
              // Check if section is in the viewport (accounting for header)
              if (rect.top <= 200 && rect.bottom >= 200) {
                setActiveSection(sectionId);
              }
            }
          });
        },
        {
          rootMargin: "-200px 0px -40% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Also listen to scroll events for more responsive updates
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      observers.forEach((observer) => observer.disconnect());
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (context === undefined) {
    throw new Error("useActiveSection must be used within an ActiveSectionProvider");
  }
  return context;
}

