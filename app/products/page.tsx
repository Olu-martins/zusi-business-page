import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore ZUSI's comprehensive payment infrastructure: Utility payments, shared expense splitting, payment automation, financial tracking, and secure settlement infrastructure for Africa.",
  openGraph: {
    title: "ZUSI Products - Complete Payment Infrastructure",
    description: "Discover ZUSI's products: All-in-one utility payments, shared expenses, automation, and financial tracking designed for Africa.",
  },
};

export default function Products() {
  const products = [
    {
      id: "utility-payments",
      name: "Utility Payments",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: "Pay all your utility bills in one place. No more switching between multiple apps.",
      features: [
        "All major African billers integrated",
        "Electricity distribution companies",
        "Cable & entertainment services",
        "Telecom providers (voice & data)",
        "Internet service providers",
        "Water utilities",
        "Airtime and data top-ups",
      ],
      benefits: [
        "Complete payment lifecycle management",
        "Bill payment processing",
        "Multiple payment methods accepted",
        "Built for reliability and ease of use",
      ],
      color: "from-blue-500 to-blue-600",
    },
    {
      id: "shared-payments",
      name: "Shared Payments & Expense Splitting",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "Simplify shared expenses with friends, family, or roommates. Automate group payments and track who paid what.",
      features: [
        "Create payment groups",
        "Split bills automatically",
        "Track contributions in real-time",
        "Send payment reminders to group members",
        "Settle expenses seamlessly",
        "Support for rent, estate fees, and group living costs",
      ],
      benefits: [
        "No more WhatsApp payment tracking hell",
        "Know exactly who paid and who's late",
        "Automated expense splitting",
        "Multi-user support",
      ],
      color: "from-purple-500 to-purple-600",
    },
    {
      id: "payment-automation",
      name: "Payment Automation",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: "Set it and forget it. Automate your recurring bill payments and never miss a due date.",
      features: [
        "Schedule automatic payments",
        "Recurring bill setup",
        "Custom payment schedules",
        "Payment reminders and notifications",
        "Auto-retry failed payments",
        "Payment history tracking",
      ],
      benefits: [
        "Reduce manual payment friction",
        "Never miss a deadline",
        "Avoid service interruptions",
        "Save time and reduce stress",
      ],
      color: "from-green-500 to-green-600",
    },
    {
      id: "financial-tracking",
      name: "Financial Tracking & Insights",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      description: "Gain complete visibility into your spending habits and financial commitments with comprehensive analytics.",
      features: [
        "Spending analytics and insights",
        "Bill payment history",
        "Spending trends and patterns",
        "Budget tracking",
        "Financial reports",
        "Export data for accounting",
      ],
      benefits: [
        "Single view of all financial commitments",
        "Know what's due next",
        "Track spending habits",
        "Make informed financial decisions",
      ],
      color: "from-orange-500 to-orange-600",
    },
    {
      id: "settlement-infrastructure",
      name: "Settlement Infrastructure",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: "Secure fund management and disbursement with bank-level security and compliance.",
      features: [
        "Secure fund management",
        "Multiple payment methods",
        "Bank-level encryption",
        "NIP and NIBSS integration",
        "Wallet API support",
        "Real-time transaction processing",
      ],
      benefits: [
        "Secure fund management and disbursement",
        "Production-ready payment infrastructure",
        "Compliance with African banking regulations",
        "Reliable and fast transactions",
      ],
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-accent-green text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Comprehensive payment infrastructure designed for Africa
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className={`bg-gradient-to-br ${product.color} text-white p-8 rounded-xl inline-block mb-6`}>
                    {product.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-neutral-dark mb-6">
                    {product.description}
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-3">
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-neutral-dark">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-dark mb-3">
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-neutral-dark">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-to-br from-neutral-light to-white p-8 rounded-xl h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className={`bg-gradient-to-br ${product.color} text-white p-12 rounded-xl inline-block mb-4`}>
                        {product.icon}
                      </div>
                      <p className="text-neutral-dark text-lg">
                        Visual representation of {product.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-accent-green/10 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-12 text-center">
              Complete Payment Infrastructure
            </h2>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-primary-dark">
                      <th className="text-left py-4 px-4 font-semibold text-primary-dark">Category</th>
                      <th className="text-left py-4 px-4 font-semibold text-primary-dark">What We Enable</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        category: "Utility Payments",
                        enable: "All major bill types supported",
                      },
                      {
                        category: "Payment Flexibility",
                        enable: "Individual and group payment options",
                      },
                      {
                        category: "Automation",
                        enable: "Reduce manual payment friction",
                      },
                      {
                        category: "Settlement",
                        enable: "Secure fund management and disbursement",
                      },
                    ].map((row, index) => (
                      <tr key={index} className="border-b border-gray-200">
                        <td className="py-4 px-4 font-medium text-primary-dark">{row.category}</td>
                        <td className="py-4 px-4 text-neutral-dark">{row.enable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary-dark to-accent-green text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the power of comprehensive payment infrastructure
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

