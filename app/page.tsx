"use client";

import Layout from "@/components/Layout";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero Section - Glassmorphism Carousel */}
      <section id="home">
        <HeroCarousel />
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Manage your bills and expenses
              </h2>
              <p className="text-neutral-dark mb-8 max-w-xl">
                ZUSI keeps the essentials simple—pay bills, split costs, and stay on top of your finances without hopping between apps.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Auto-pay bills",
                    description: "Schedule once, we handle the rest.",
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    title: "Safe payments",
                    description: "Bank-level security by default.",
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    ),
                    title: "See where money goes",
                    description: "Clear insights and alerts.",
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    ),
                    title: "Split in seconds",
                    description: "Share rent or utilities effortlessly.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="bg-neutral-light p-5 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="text-accent-green mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-primary-dark mb-2">{feature.title}</h3>
                    <p className="text-sm text-neutral-dark">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
              <Image
                src="/assets/images/nathan-dumlao-oRKF_ZBJYGM-unsplash.jpg"
                alt="Person managing finances on phone"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 450px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Do Section */}
      <section className="py-16 md:py-24 bg-primary-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              ZUSI brings all your bill payments and expense management together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                label: "Pay All Your Bills",
                description: "Electricity, Cable, Internet, Water, Airtime - all in one app",
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                label: "Split Expenses Easily",
                description: "Share bills with roommates, friends, or family seamlessly",
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                label: "Track Your Spending",
                description: "Get insights into your bills and expenses with clear analytics",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="flex justify-center mb-4 text-accent-green">
                  {item.icon}
                </div>
                <div className="text-lg font-semibold mb-2">{item.label}</div>
                <div className="text-sm opacity-80">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                The pain we remove
              </h2>
              <p className="text-neutral-dark mb-8">
                Everyday friction with bills and shared payments is exactly what ZUSI is built to fix.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: "⚠️",
                    title: "Too many apps",
                    description: "Bills spread across 5+ platforms creates constant guesswork.",
                  },
                  {
                    icon: "💬",
                    title: "Group payment chaos",
                    description: "WhatsApp reminders and bank screenshots aren’t a finance tool.",
                  },
                  {
                    icon: "⏰",
                    title: "No automation",
                    description: "If you forget, payments fail. Automation shouldn’t be a luxury.",
                  },
                  {
                    icon: "📉",
                    title: "Zero visibility",
                    description: "No single view to see what’s due, what’s paid, and what’s pending.",
                  },
                ].map((problem, index) => (
                  <div key={index} className="bg-neutral-light p-5 rounded-xl flex items-start gap-3">
                    <span className="text-2xl">{problem.icon}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-dark">{problem.title}</h3>
                      <p className="text-sm text-neutral-dark">{problem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-primary-dark text-white rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">The result today?</h3>
                <p className="text-sm text-white/90">
                  Late fees, service interruptions, and stressed group chats. ZUSI brings calm back to bill payments.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto lg:mx-0">
              <Image
                src="/assets/images/emmanuel-ikwuegbu-81fRHbVliQI-unsplash.jpg"
                alt="Roommates checking utilities together"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent-green/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Why Choose ZUSI?
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Save time and reduce stress with our intuitive interface
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 items-center">
            {/* Mobile Dashboard Image - Left Side */}
            <div className="flex justify-center lg:justify-start items-center order-first lg:order-none">
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/20 to-primary-dark/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <Image
                  src="/assets/Zusi mobile dashboard.png"
                  alt="ZUSI Mobile App Dashboard"
                  width={800}
                  height={1600}
                  className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  priority
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>
            </div>

            {/* Two Cards Stacked - Right Side */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Save Time & Reduce Stress
                </h3>
                <p className="text-neutral-dark mb-4">
                  One app handles bills, airtime and transfers—no more app-hopping.
                </p>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Single view of what’s due and what’s paid</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Smart nudges help you avoid missed deadlines</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automation keeps essentials running in the background</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Built for African Payment Behavior
                </h3>
                <p className="text-neutral-dark mb-4">
                  ZUSI mirrors how Africans actually pay—multiple providers, multiple methods.
                </p>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Works with every major African biller</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Card, transfer, wallet or USSD—pick what works</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reliable, responsive and built for low bandwidth</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Our Products
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Comprehensive payment infrastructure designed for Africa
            </p>
          </div>
          <div className="space-y-20 max-w-6xl mx-auto">
            {[
              {
                id: "utility-payments",
                name: "Utility Payments",
                description: "Electricity, cable, internet, water and airtime in one tap.",
                bullets: [
                  "Supports every major African biller.",
                  "Instant receipts and payment alerts.",
                  "Pay for yourself or on behalf of family.",
                ],
                image: "/assets/images/sumup-2enEyX2MAvQ-unsplash.jpg",
              },
              {
                id: "shared-payments",
                name: "Shared Payments",
                description: "Turn chaotic group chats into organised contributions.",
                bullets: [
                  "Create groups for rent, estates, utilities or projects.",
                  "Auto-split amounts and nudge late payers politely.",
                  "Everyone sees status without chasing screenshots.",
                ],
                image: "/assets/images/tosin-james-E6PkOZQLprk-unsplash.jpg",
              },
              {
                id: "payment-automation",
                name: "Payment Automation",
                description: "Set schedules once and let ZUSI handle recurring bills.",
                bullets: [
                  "Flexible frequencies for weekly, monthly or custom cycles.",
                  "Smart retries if a payment fails.",
                  "Pause or edit anytime—no support ticket needed.",
                ],
                image: "/assets/images/jakub-zerdzicki-zR7nFjjIAWE-unsplash.jpg",
              },
              {
                id: "financial-tracking",
                name: "Financial Tracking & Insights",
                description: "See where money is going with clean, simple dashboards.",
                bullets: [
                  "Live summary of upcoming, paid and overdue bills.",
                  "Trend views for spending by category and account.",
                  "Export reports for budgeting or team finance.",
                ],
                image: "/assets/images/carl-kho-PucZ7RsDmCg-unsplash.jpg",
              },
            ].map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h3 className="text-3xl md:text-4xl font-bold text-primary-dark mb-3">
                    {product.name}
                  </h3>
                  <p className="text-neutral-dark mb-6 max-w-xl">
                    {product.description}
                  </p>
                  <ul className="space-y-3">
                    {product.bullets.map((item, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-2 text-sm text-neutral-dark">
                        <svg className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Sign Up",
                description: "Create your free account in minutes. No credit card required.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
              },
              {
                title: "Add Your Bills",
                description: "Link your accounts or manually enter your bills. Categorize and organize everything.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: "Enjoy Hassle-Free Payments",
                description: "Set up automation, get reminders, and track your spending. All in one place.",
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-accent-green mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">{item.title}</h3>
                <p className="text-neutral-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 md:py-24 bg-neutral-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Everything you need to know about ZUSI
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Is my information safe?",
                answer: "Yes, we use bank-level encryption and secure servers to protect your personal and financial information. Your privacy and security are our top priorities.",
              },
              {
                question: "How do I add my bills?",
                answer: "You can manually enter your bills or link your accounts with service providers. Simply follow the prompts in the dashboard to categorize and set up your bills.",
              },
              {
                question: "Can I schedule automatic payments?",
                answer: "Absolutely! You can set up automated payments for each bill, ensuring you never miss a due date. You can also customize reminders to stay informed.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept various payment methods, including bank transfers, credit cards, and debit cards. You can choose your preferred method during the setup process.",
              },
              {
                question: "What if I want to cancel my subscription?",
                answer: "You can cancel your subscription at any time through your account settings. There are no hidden fees, and you can continue using the service until the end of your billing cycle.",
              },
              {
                question: "Will I receive reminders for upcoming bills?",
                answer: "Yes, our software sends notifications and reminders for upcoming bills, helping you stay on track and avoid late payments.",
              },
              {
                question: "Can I track my spending?",
                answer: "Yes, our software provides insights and analytics on your spending habits, allowing you to see where your money goes and helping you budget effectively.",
              },
              {
                question: "What if I have technical issues?",
                answer: "If you encounter any issues, our customer support team is available via live chat, email, or phone to assist you. We also offer a comprehensive help center with FAQs and tutorials.",
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a free trial period that allows you to explore all features of the software without any commitment. You can upgrade to a paid plan at any time.",
              },
              {
                question: "Can I use this software for business bills?",
                answer: "Yes, our software is suitable for both personal and business bill payments. You can manage multiple accounts and categorize your expenses accordingly.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg p-6 cursor-pointer hover:bg-neutral-light/80 transition-colors"
              >
                <summary className="font-semibold text-primary-dark text-lg cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <span>{faq.question}</span>
                    <svg className="w-5 h-5 text-accent-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </summary>
                <p className="mt-4 text-neutral-dark">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Benefits Section */}
            <div>
              <h2 className="text-3xl font-bold text-primary-dark mb-6">
                Why Join the Waitlist?
              </h2>
              <p className="text-lg text-neutral-dark mb-8">
                Be part of the future of bill payments in Africa. Early access members get exclusive benefits and help shape the platform.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Early Access</h3>
                    <p className="text-neutral-dark">
                      Get first access to ZUSI when we launch. Be among the first to simplify your bill payments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Exclusive Benefits</h3>
                    <p className="text-neutral-dark">
                      Special offers, discounts, and premium features reserved for early members.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Shape the Platform</h3>
                    <p className="text-neutral-dark">
                      Your feedback matters. Help us build the best bill payment experience for Africa.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-accent-green/10 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary-dark mb-1">Stay Updated</h3>
                    <p className="text-neutral-dark">
                      Receive updates on our progress, launch date, and new features as we build.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-accent-green/10 to-primary-dark/10 rounded-xl">
                <h3 className="font-semibold text-primary-dark mb-2">What to Expect</h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Early access notification when we launch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Exclusive updates and behind-the-scenes content</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Priority support and feature requests</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Waitlist Form */}
            <div className="bg-neutral-light rounded-xl p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-primary-dark mb-2">
                Join the Waitlist
              </h2>
              <p className="text-neutral-dark mb-6">
                Fill out the form below to secure your spot. We'll notify you as soon as ZUSI is ready!
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary-dark mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary-dark mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
                    placeholder="+234 800 000 0000"
                  />
                  <p className="text-sm text-neutral-default mt-1">
                    We'll use this to notify you when we launch
                  </p>
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <p className="font-semibold">You're on the list!</p>
                        <p className="text-sm">Thank you for joining. We'll notify you as soon as ZUSI launches.</p>
                      </div>
                    </div>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                    Something went wrong. Please try again later.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent-green text-white px-8 py-4 rounded-lg hover:bg-accent-green/90 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>

              <p className="text-sm text-neutral-default mt-6 text-center">
                By joining, you agree to receive updates about ZUSI. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-dark to-accent-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Bill Payments?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Africans who have made bill payments effortless
          </p>
          <a
            href="#waitlist"
            className="inline-block bg-white text-accent-green px-8 py-4 rounded-lg hover:bg-neutral-light transition-colors font-semibold text-lg"
          >
            Join Waitlist
          </a>
        </div>
      </section>
    </Layout>
  );
}
