import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-lg p-3 md:p-4 shadow-lg">
                <img
                  src="/assets/Zusi new logo no backgrd.svg"
                  alt="ZUSI Logo"
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              All-in-one utility & shared payment platform. Pay bills. Split expenses. All Automated.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <svg className="w-5 h-5 text-accent-green" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <a href="https://www.zusiafrica.com" className="hover:text-accent-green transition-colors">
                www.zusiafrica.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#home" className="hover:text-accent-green transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-accent-green transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent-green transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-green transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-accent-green transition-colors">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#waitlist" className="hover:text-accent-green transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#waitlist" className="hover:text-accent-green transition-colors">
                  Join Waitlist
                </a>
              </li>
              <li>
                <a href="mailto:support@zusiafrica.com" className="hover:text-accent-green transition-colors">
                  support@zusiafrica.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/privacy" className="hover:text-accent-green transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-accent-green transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {new Date().getFullYear()} ZUSI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

