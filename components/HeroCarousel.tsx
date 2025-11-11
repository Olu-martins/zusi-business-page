"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const carouselSlides = [
  {
    id: 1,
    image: "/assets/images/sumup-2enEyX2MAvQ-unsplash.jpg",
    title: "Simplify Your Bill Payments Today",
    subtitle: "Manage all your bills in one place with ease and security",
    description: "Pay bills. Split expenses. All Automated.",
    gradient: "from-primary-dark/40 to-accent-green/40",
  },
  {
    id: 2,
    image: "/assets/images/newpowa-fGtgxSumEWs-unsplash.jpg",
    title: "All-in-One Utility Platform",
    subtitle: "Electricity, Cable, Internet, Airtime & More",
    description: "No more jumping between 5+ apps. Everything in one place.",
    gradient: "from-accent-green/40 to-primary-dark/40",
  },
  {
    id: 3,
    image: "/assets/images/jakub-zerdzicki-zR7nFjjIAWE-unsplash.jpg",
    title: "Automated Payments",
    subtitle: "Set it and forget it",
    description: "Never miss a due date with automatic bill payments.",
    gradient: "from-primary-dark/40 to-accent-green/40",
  },
  {
    id: 4,
    image: "/assets/images/emmanuel-ikwuegbu-81fRHbVliQI-unsplash.jpg",
    title: "Built for Africa",
    subtitle: "Designed for African payment behavior",
    description: "All major African billers integrated. Multiple payment methods.",
    gradient: "from-accent-green/40 to-primary-dark/40",
  },
  {
    id: 5,
    image: "/assets/images/tosin-james-E6PkOZQLprk-unsplash.jpg",
    title: "Shared Payments Made Easy",
    subtitle: "Split expenses seamlessly",
    description: "Automate group payments with friends, family, or roommates.",
    gradient: "from-primary-dark/40 to-accent-green/40",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };


  return (
    <section className="relative h-screen md:h-[90vh] min-h-[600px] overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0">
        {carouselSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              quality={index === 0 ? 90 : 75}
              sizes="100vw"
              loading={index === 0 ? "eager" : "lazy"}
            />
            {/* Overlay Gradient - Reduced Opacity */}
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`} />
          </div>
        ))}
      </div>

      {/* Centered Content - No Box */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl mx-auto text-center">
            {carouselSlides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0 z-10"
                    : "opacity-0 translate-y-8 pointer-events-none z-0"
                }`}
              >
                <div className="text-white space-y-6 px-4">
                  {index === currentSlide && (
                    <>
                      <div className="space-y-4 animate-fade-in-up">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-2xl">
                          {slide.title}
                        </h1>
                        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white/95 drop-shadow-xl">
                          {slide.subtitle}
                        </p>
                        <p className="text-lg md:text-xl text-white/90 drop-shadow-lg">
                          {slide.description}
                        </p>
                      </div>
                      <div className="pt-6 animate-fade-in-up-delay">
                        <a
                          href="#waitlist"
                          className="inline-block bg-accent-green text-white px-8 py-4 rounded-lg hover:bg-accent-green/90 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transform"
                        >
                          Get Started
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3 backdrop-blur-md bg-white/10 px-4 py-2 rounded-full border border-white/20">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white shadow-lg"
                : "w-3 h-3 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:block">
        <div className="backdrop-blur-xl bg-white/20 border border-white/40 rounded-full p-3 animate-bounce shadow-lg">
          <svg
            className="w-6 h-6 text-white drop-shadow-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

