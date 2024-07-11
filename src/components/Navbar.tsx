import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow p-4" role="navigation" aria-label="main navigation">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          HIV Clinical Leadership Program
        </Link>
        <button
          className="block lg:hidden px-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
          id="navbar-toggle"
          aria-controls="navbar-menu"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-menu">
          <div className="lg:flex-grow flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4">
            <Link href="/" className="block lg:inline-block text-gray-700 hover:text-gray-900">
              HOME
            </Link>
            <Link href="/about" className="block lg:inline-block text-gray-700 hover:text-gray-900">
              ABOUT
            </Link>
            <Link href="/program" className="block lg:inline-block text-gray-700 hover:text-gray-900">
              PROGRAM
            </Link>
            <Link href="/contact" className="block lg:inline-block text-gray-700 hover:text-gray-900">
              CONTACT
            </Link>
            <Link href="/apply" className="block lg:inline-block text-gray-700 hover:text-gray-900">
              APPLY
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
