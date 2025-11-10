import Layout from "@/components/Layout";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ZUSI - Africa's all-in-one utility platform solving the bill payment problem. Discover our mission, solution, and market opportunity across Africa.",
  openGraph: {
    title: "About ZUSI - Africa's Utility Payment Platform",
    description: "Learn about ZUSI and how we're solving bill payment challenges across Africa with our comprehensive payment infrastructure.",
  },
};

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-accent-green text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About ZUSI
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Africa's all-in-one utility platform that combines bill payments, shared expenses, and financial management in one place.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-8 text-center">
              The Bill Payment Problem
            </h2>
            <div className="bg-neutral-light rounded-xl p-8 md:p-12 mb-8">
              <h3 className="text-2xl font-semibold text-primary-dark mb-6">
                Today's Payment Reality Across Africa
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "⚠️",
                    title: "Too many apps",
                    description: "Jumping between 5+ apps for bills, transfers, and airtime.",
                  },
                  {
                    icon: "⏰",
                    title: "No automation",
                    description: "No automation for recurring bills. You remember, you pay, every single time.",
                  },
                  {
                    icon: "💰",
                    title: "Disorganized group payments",
                    description: "WhatsApp groups become payment tracking hell. Who paid? Who's late?",
                  },
                  {
                    icon: "📊",
                    title: "No visibility",
                    description: "Users can't easily track spending or know what's due next.",
                  },
                ].map((problem, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg">
                    <div className="text-3xl mb-3">{problem.icon}</div>
                    <h4 className="text-xl font-semibold text-primary-dark mb-2">
                      {problem.title}
                    </h4>
                    <p className="text-neutral-dark">{problem.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary-dark text-white rounded-xl p-8 md:p-12">
              <h3 className="text-2xl font-semibold mb-4">The Result?</h3>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Opaque & Inefficient: No single view of your financial commitments.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Missed deadlines, service interruptions, and financial stress.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent-green/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Our Solution
              </h2>
              <p className="text-xl text-neutral-dark">
                One App, Total Control
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
              <h3 className="text-2xl font-semibold text-primary-dark mb-6">
                Core Value Proposition
              </h3>
              <p className="text-lg text-neutral-dark mb-8">
                ZUSI is Africa's all-in-one utility platform that combines bill Payments (utilities, cable, internet, airtime/data) with shared expense management and comprehensive financial tracking.
              </p>
              <h4 className="text-xl font-semibold text-primary-dark mb-4">
                What we solve
              </h4>
              <ul className="space-y-3">
                {[
                  "Pay all bills in one place",
                  "No more app-switching",
                  "Built for African payment behaviour",
                  "Simplified expense management",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-6 h-6 text-accent-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-lg text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center">
              Market Opportunity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  description: "Annual utility bill market",
                  details: "Electricity • Cable • Internet • Water • Airtime",
                },
                {
                  description: "Shared expense market",
                  details: "Rent • Estate fees • Group living costs",
                },
                {
                  description: "Diaspora remittances",
                  details: "Significant portion goes to bills via various channels",
                },
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-primary-dark to-accent-green text-white p-6 rounded-xl">
                  <div className="text-lg font-semibold mb-2">{stat.description}</div>
                  <div className="text-sm opacity-90">{stat.details}</div>
                </div>
              ))}
            </div>
            <div className="bg-neutral-light rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                Market Segments We Own
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Individual Bill Payers",
                    description: "Millions of Africans pay utilities monthly",
                  },
                  {
                    title: "Shared Expense Groups",
                    description: "Growing number of people in shared living arrangements",
                  },
                  {
                    title: "Informal Billers",
                    description: "Schools, estates, landlords, restaurants",
                  },
                  {
                    title: "Diaspora Payments",
                    description: "Africans abroad sending money home for bills",
                  },
                ].map((segment, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-dark mb-1">{segment.title}</h4>
                    <p className="text-neutral-dark text-sm">{segment.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent-green/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center">
              Why Now?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Cost of Living Crisis
                </h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li>• Bills consuming a significant portion of household income</li>
                  <li>• Shared living on the rise with increasing rent costs</li>
                  <li>• Need for financial control tools</li>
                  <li>• Automation = survival, not luxury</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-primary-dark mb-4">
                  Fragmentation Fatigue
                </h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li>• Users tired of 5+ apps for different bills</li>
                  <li>• Demand for "super apps" growing</li>
                  <li>• Automation expectation is mainstream</li>
                  <li>• "Set and forget" is the new standard</li>
                </ul>
              </div>
            </div>
            <div className="bg-primary-dark text-white rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                Payment Infrastructure Matured
              </h3>
              <ul className="space-y-2 text-lg">
                <li>• Payment infrastructure is production-ready</li>
                <li>• Millions of Africans use digital payments monthly</li>
                <li>• High mobile penetration across the continent</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZUSI Wins Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-accent-green to-accent-green/80 text-white p-8 md:p-12 rounded-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  We're not competing, we're creating a new category.
                </h2>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary-dark mb-4">
                  First-Mover in a New Category
                </h3>
                <p className="text-lg text-neutral-dark mb-6">
                  ZUSI is uniquely positioned to capture the African utility payment market:
                </p>
                <ul className="space-y-3">
                  {[
                    "Market Gap: No existing platform addresses the full payment ecosystem",
                    "User Behavior: Built specifically for African payment patterns",
                    "Network Effects: Our model becomes more valuable as more users join",
                    "Switching Costs: High retention once users consolidate their bills",
                  ].map((point, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-accent-green mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-neutral-dark">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-dark to-accent-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Us in Revolutionizing Bill Payments
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of the solution to Africa's bill payment challenges
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-accent-green px-8 py-4 rounded-lg hover:bg-neutral-light transition-colors font-semibold text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </Layout>
  );
}

