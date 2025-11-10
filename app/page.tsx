import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Glassmorphism Carousel */}
      <HeroCarousel />

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Everything you need to manage your bills and expenses in one place
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Automated Payments",
                description: "Set it and forget it with automatic bill payments. Never miss a due date again.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Secure Transactions",
                description: "Bank-level security to keep your information safe. Your privacy is our top priority.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                ),
                title: "Payment Reminders",
                description: "Never miss a due date with timely notifications and smart reminders.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Financial Tracking",
                description: "Gain insights into your spending habits with comprehensive analytics and reports.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Multi-Account Management",
                description: "Easily manage multiple bills from one dashboard. No more app-switching.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "Shared Payments",
                description: "Split expenses seamlessly with friends, family, or roommates. Automate group payments.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-neutral-light p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-accent-green mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-dark">{feature.description}</p>
              </div>
            ))}
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                The Problem We're Solving
              </h2>
              <p className="text-lg text-neutral-dark">
                Today's payment reality across Africa
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: "⚠️",
                  title: "Too Many Apps",
                  description: "Jumping between 5+ apps for bills, transfers, and airtime.",
                },
                {
                  icon: "⏰",
                  title: "No Automation",
                  description: "No automation for recurring bills. You remember, you pay, every single time.",
                },
                {
                  icon: "💰",
                  title: "Disorganized Group Payments",
                  description: "WhatsApp groups become payment tracking hell. Who paid? Who's late?",
                },
                {
                  icon: "📊",
                  title: "No Visibility",
                  description: "Users can't easily track spending or know what's due next.",
                },
              ].map((problem, index) => (
                <div key={index} className="bg-neutral-light p-6 rounded-xl">
                  <div className="text-4xl mb-3">{problem.icon}</div>
                  <h3 className="text-xl font-semibold text-primary-dark mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-neutral-dark">{problem.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-primary-dark text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">The Result?</h3>
              <p className="text-lg opacity-90">
                Opaque & Inefficient: No single view of your financial commitments. Missed deadlines, service interruptions, and financial stress.
              </p>
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
                  No more jumping between 5+ apps for bills, transfers, and airtime. Everything you need is in one place.
                </p>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Single view of all your financial commitments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Never miss a deadline or service interruption</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automation = survival, not luxury</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  Built for African Payment Behavior
                </h3>
                <p className="text-neutral-dark mb-4">
                  ZUSI is Africa's all-in-one utility platform designed specifically for how Africans pay bills.
                </p>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>All major African billers integrated</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Multiple payment methods accepted</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Reliable and easy to use</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-neutral-dark max-w-2xl mx-auto">
              Start free and upgrade as you grow
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Basic",
                price: "Free",
                features: [
                  "Basic bill payments",
                  "Payment reminders",
                  "Single account",
                  "Email support",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Premium",
                price: "Coming Soon",
                pricePeriod: "",
                features: [
                  "All Basic features",
                  "Automated payments",
                  "Multi-account management",
                  "Financial tracking & insights",
                  "Priority support",
                  "Shared payment groups",
                ],
                cta: "Start Free Trial",
                popular: true,
              },
              {
                name: "Business",
                price: "Custom",
                features: [
                  "All Premium features",
                  "Business account management",
                  "Bulk payments",
                  "Custom integrations",
                  "Dedicated support",
                  "Advanced analytics",
                ],
                cta: "Contact Sales",
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 ${
                  plan.popular
                    ? "border-2 border-accent-green transform scale-105"
                    : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="bg-accent-green text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary-dark mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary-dark">{plan.price}</span>
                  {plan.pricePeriod && (
                    <span className="text-neutral-dark ml-2">{plan.pricePeriod}</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? "bg-accent-green text-white hover:bg-accent-green/90"
                      : "bg-primary-dark text-white hover:bg-primary-dark/90"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Why Now?
              </h2>
              <p className="text-lg text-neutral-dark">
                The perfect storm of opportunity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-accent-green/10 to-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Cost of Living Crisis
                </h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Bills consuming a significant portion of household income</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Shared living on the rise with increasing rent costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Automation = survival, not luxury</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-dark/10 to-white p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Fragmentation Fatigue
                </h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Users tired of 5+ apps for different bills</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Demand for "super apps" growing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>"Set and forget" is the new standard</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-gradient-to-r from-primary-dark to-accent-green text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-semibold mb-4">Payment Infrastructure Matured</h3>
              <p className="text-lg opacity-90">
                Payment infrastructure is production-ready. Millions of Africans use digital payments monthly with high mobile penetration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-neutral-light">
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
      <section className="py-16 md:py-24 bg-white">
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
                className="bg-neutral-light rounded-lg p-6 cursor-pointer hover:bg-neutral-light/80 transition-colors"
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-dark to-accent-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Bill Payments?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of Africans who have made bill payments effortless
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent-green px-8 py-4 rounded-lg hover:bg-neutral-light transition-colors font-semibold text-lg"
          >
            Join Waitlist
          </Link>
        </div>
      </section>
    </Layout>
  );
}

