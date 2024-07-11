import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">HIV Clinical Leadership Program</a>
        </Link>
        <div className="flex space-x-4">
          <Link href="/">
            <a>HOME</a>
          </Link>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
          <Link href="/program">
            <a>PROGRAM</a>
          </Link>
          <Link href="/contact">
            <a>CONTACT</a>
          </Link>
          <Link href="/apply">
            <a>APPLY</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
