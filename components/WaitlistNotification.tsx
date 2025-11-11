"use client";

import { useState, useEffect } from "react";

export default function WaitlistNotification() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    // Show notification after page loads (2 seconds delay)
    const loadTimer = setTimeout(() => {
      if (!hasBeenClosed) {
        setIsVisible(true);
      }
    }, 2000);

    // Show notification on scroll (after scrolling 300px)
    const handleScroll = () => {
      if (window.scrollY > 300 && !isVisible && !hasBeenClosed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(loadTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, hasBeenClosed]);

  const handleClose = () => {
    setIsVisible(false);
    setHasBeenClosed(true);
    // Show again after 30 seconds
    setTimeout(() => {
      setHasBeenClosed(false);
      setIsVisible(true);
    }, 30000);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <div className="bg-gradient-to-r from-accent-green to-primary-dark text-white rounded-xl shadow-2xl p-4 md:p-6 backdrop-blur-sm border border-white/20 animate-slide-up">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-white animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              <h3 className="font-bold text-lg">Join the Waitlist!</h3>
            </div>
            <p className="text-sm md:text-base text-white/90 mb-3">
              Be among the first to experience ZUSI. Get early access and exclusive benefits!
            </p>
            <a
              href="#waitlist"
              onClick={handleClose}
              className="inline-block bg-white text-accent-green px-6 py-2 rounded-lg hover:bg-white/90 transition-colors font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join Now
            </a>
          </div>
          <button
            onClick={handleClose}
            className="text-white/80 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close notification"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

