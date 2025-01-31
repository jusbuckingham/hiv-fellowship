import { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProgramOpen, setIsProgramOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  const toggleProgramMenu = () => {
    setIsProgramOpen(!isProgramOpen);
  };

  return (
    <nav
      className="fixed w-full bg-white shadow-md z-50"
      role="navigation"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Left Section: Logo / Title */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-2xl font-bold text-gray-900 hover:text-red-600 transition"
                aria-label="HIV Clinical Leadership Program"
              >
                HIV Clinical Leadership Program
              </Link>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex ml-10 space-x-6">
              <Link
                href="/"
                className="text-gray-900 hover:text-red-600 transition px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Home"
              >
                Home
              </Link>
              {/* About Menu (Desktop) */}
              <div className="relative group">
                <Link
                  href="/about"
                  className="text-gray-900 hover:text-red-600 transition px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="About"
                >
                  About
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-10">
                  <Link
                    href="/about/faculty"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Faculty"
                  >
                    Faculty
                  </Link>
                  <Link
                    href="/about/fellows"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Fellows"
                  >
                    Fellows
                  </Link>
                  <Link
                    href="/about/alumni"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Alumni"
                  >
                    Alumni
                  </Link>
                  <Link
                    href="/about/partners"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Partners"
                  >
                    Partners
                  </Link>
                </div>
              </div>
              {/* Program Menu (Desktop) */}
              <div className="relative group">
                <Link
                  href="/program"
                  className="text-gray-900 hover:text-red-600 transition px-3 py-2 rounded-md text-sm font-medium"
                  aria-label="Program"
                >
                  Program
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 hidden group-hover:block z-10">
                  <Link
                    href="/program/salary-benefits"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Salary & Benefits"
                  >
                    Salary & Benefits
                  </Link>
                  <Link
                    href="/program/resources"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    aria-label="Resources"
                  >
                    Resources
                  </Link>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-gray-900 hover:text-red-600 transition px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Contact"
              >
                Contact
              </Link>
              <Link
                href="/apply"
                className="text-gray-900 hover:text-red-600 transition px-3 py-2 rounded-md text-sm font-medium"
                aria-label="Apply"
              >
                Apply
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-red-600 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-red-600 transition"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M6 18L18 6M6 6l12 12" />
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Home"
            >
              Home
            </Link>

            {/* About Menu (Mobile) */}
            <button
              onClick={toggleAboutMenu}
              className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              aria-label="Toggle About Menu"
              aria-expanded={isAboutOpen}
            >
              About
            </button>
            {isAboutOpen && (
              <div className="pl-4">
                <Link
                  href="/about"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="About"
                >
                  About
                </Link>
                <Link
                  href="/about/faculty"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Faculty"
                >
                  Faculty
                </Link>
                <Link
                  href="/about/fellows"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Fellows"
                >
                  Fellows
                </Link>
                <Link
                  href="/about/alumni"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Alumni"
                >
                  Alumni
                </Link>
                <Link
                  href="/about/partners"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Partners"
                >
                  Partners
                </Link>
              </div>
            )}

            {/* Program Menu (Mobile) */}
            <button
              onClick={toggleProgramMenu}
              className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              aria-label="Toggle Program Menu"
              aria-expanded={isProgramOpen}
            >
              Program
            </button>
            {isProgramOpen && (
              <div className="pl-4">
                <Link
                  href="/program"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Program"
                >
                  Program
                </Link>
                <Link
                  href="/program/salary-benefits"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Salary & Benefits"
                >
                  Salary & Benefits
                </Link>
                <Link
                  href="/program/resources"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  aria-label="Resources"
                >
                  Resources
                </Link>
              </div>
            )}

            <Link
              href="/contact"
              className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Contact"
            >
              Contact
            </Link>
            <Link
              href="/apply"
              className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium"
              aria-label="Apply"
            >
              Apply
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;