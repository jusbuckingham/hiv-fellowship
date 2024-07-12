import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-xl font-bold">HIV Clinical Leadership Program</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                </Link>
                <div className="relative group">
                  <Link href="/about" legacyBehavior>
                    <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg">
                    <Link href="/about/faculty" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty</a>
                    </Link>
                    <Link href="/about/fellows" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fellows</a>
                    </Link>
                    <Link href="/about/alumni" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alumni</a>
                    </Link>
                    <Link href="/about/partners" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Partners</a>
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/program" legacyBehavior>
                    <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                      Program
                    </a>
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg">
                    <Link href="/program/salary-benefits" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Salary & Benefits</a>
                    </Link>
                    <Link href="/program/resources" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resources</a>
                    </Link>
                  </div>
                </div>
                <Link href="/contact" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                </Link>
                <Link href="/apply" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">Apply</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
            </Link>
            <div className="relative group">
              <Link href="/about" legacyBehavior>
                <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  About
                </a>
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg">
                <Link href="/about/faculty" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty</a>
                </Link>
                <Link href="/about/fellows" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Fellows</a>
                </Link>
                <Link href="/about/alumni" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alumni</a>
                </Link>
                <Link href="/about/partners" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Partners</a>
                </Link>
              </div>
            </div>
            <div className="relative group">
              <Link href="/program" legacyBehavior>
                <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium">
                  Program
                </a>
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg">
                <Link href="/program/salary-benefits" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Salary & Benefits</a>
                </Link>
                <Link href="/program/resources" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Resources</a>
                </Link>
              </div>
            </div>
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
            </Link>
            <Link href="/apply" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium">Apply</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
