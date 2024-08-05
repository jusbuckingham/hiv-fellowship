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
    <nav className="fixed w-full bg-white shadow-lg z-50" role="navigation" aria-label="Main Navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-xl font-bold" aria-label="HIV Clinical Leadership Program">HIV Clinical Leadership Program</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Home">Home</a>
                </Link>
                <div className="relative group">
                  <Link href="/about" legacyBehavior>
                    <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="About">
                      About
                    </a>
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg">
                    <Link href="/about/faculty" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Faculty">Faculty</a>
                    </Link>
                    <Link href="/about/fellows" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Fellows">Fellows</a>
                    </Link>
                    <Link href="/about/alumni" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Alumni">Alumni</a>
                    </Link>
                    <Link href="/about/partners" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Partners">Partners</a>
                    </Link>
                  </div>
                </div>
                <div className="relative group">
                  <Link href="/program" legacyBehavior>
                    <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Program">
                      Program
                    </a>
                  </Link>
                  <div className="absolute hidden group-hover:block bg-white shadow-lg">
                    <Link href="/program/salary-benefits" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Salary & Benefits">Salary & Benefits</a>
                    </Link>
                    <Link href="/program/resources" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Resources">Resources</a>
                    </Link>
                  </div>
                </div>
                <Link href="/contact" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Contact">Contact</a>
                </Link>
                <Link href="/apply" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Apply">Apply</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
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
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" aria-label="Home">Home</a>
            </Link>
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
                <Link href="/about" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="About">About</a>
                </Link>
                <Link href="/about/faculty" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Faculty">Faculty</a>
                </Link>
                <Link href="/about/fellows" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Fellows">Fellows</a>
                </Link>
                <Link href="/about/alumni" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Alumni">Alumni</a>
                </Link>
                <Link href="/about/partners" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Partners">Partners</a>
                </Link>
              </div>
            )}
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
                <Link href="/program" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Program">Program</a>
                </Link>
                <Link href="/program/salary-benefits" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Salary & Benefits">Salary & Benefits</a>
                </Link>
                <Link href="/program/resources" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Resources">Resources</a>
                </Link>
              </div>
            )}
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" aria-label="Contact">Contact</a>
            </Link>
            <Link href="/apply" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" aria-label="Apply">Apply</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
