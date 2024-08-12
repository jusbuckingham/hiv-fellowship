import { useState } from 'react'; // Import useState hook from React to manage component state
import Link from 'next/link'; // Import Link component from Next.js for navigation

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open
  const [isAboutOpen, setIsAboutOpen] = useState(false); // State to track if the About dropdown menu is open
  const [isProgramOpen, setIsProgramOpen] = useState(false); // State to track if the Program dropdown menu is open

  // Toggles the main menu (for mobile view)
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Toggles the About dropdown menu
  const toggleAboutMenu = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  // Toggles the Program dropdown menu
  const toggleProgramMenu = () => {
    setIsProgramOpen(!isProgramOpen);
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50" role="navigation" aria-label="Main Navigation">
      {/* The navbar is fixed at the top, spans full width, has a white background, shadow, and high z-index */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Container for the navbar content, centered with padding */}
        
        <div className="flex items-center justify-between h-16">
          {/* Flex container to align and space out navbar items */}
          
          <div className="flex items-center">
            {/* Left side of the navbar containing the logo and desktop menu */}
            
            <div className="flex-shrink-0">
              {/* Container for the logo, prevents shrinking */}
              
              <Link href="/" legacyBehavior>
                <a className="text-xl font-bold" aria-label="HIV Clinical Leadership Program">HIV Clinical Leadership Program</a>
              </Link>
              {/* Logo linking to the home page, with accessible label */}
            </div>
            
            <div className="hidden md:block">
              {/* Hidden on small screens, displayed on medium screens and larger */}
              
              <div className="ml-10 flex items-baseline space-x-4">
                {/* Container for the desktop menu, with spacing between items */}
                
                <Link href="/" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Home">Home</a>
                </Link>
                {/* Home link with hover effect */}

                <div className="relative group">
                  {/* Container for the About dropdown */}
                  
                  <Link href="/about" legacyBehavior>
                    <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="About">
                      About
                    </a>
                  </Link>
                  {/* About link with hover effect */}
                  
                  <div className="absolute hidden group-hover:block bg-white shadow-lg">
                    {/* Dropdown menu, shown on hover */}
                    
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
                    {/* Links inside the About dropdown */}
                  </div>
                </div>

                <div className="relative group">
                  {/* Container for the Program dropdown */}
                  
                  <Link href="/program" legacyBehavior>
                    <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Program">
                      Program
                    </a>
                  </Link>
                  {/* Program link with hover effect */}
                  
                  <div className="absolute hidden group-hover:block bg-white shadow-lg">
                    {/* Dropdown menu, shown on hover */}
                    
                    <Link href="/program/salary-benefits" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Salary & Benefits">Salary & Benefits</a>
                    </Link>
                    <Link href="/program/resources" legacyBehavior>
                      <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Resources">Resources</a>
                    </Link>
                    {/* Links inside the Program dropdown */}
                  </div>
                </div>

                <Link href="/contact" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Contact">Contact</a>
                </Link>
                {/* Contact link with hover effect */}
                
                <Link href="/apply" legacyBehavior>
                  <a className="text-gray-900 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium" aria-label="Apply">Apply</a>
                </Link>
                {/* Apply link with hover effect */}
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* Container for the mobile menu button, only shown on small screens */}
            
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
              {/* SVG icon for the menu button, changes to an 'X' when the menu is open */}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          {/* Mobile menu, only shown when isOpen is true */}
          
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {/* Container for the mobile menu links */}
            
            <Link href="/" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" aria-label="Home">Home</a>
            </Link>
            {/* Home link in the mobile menu */}
            
            <button
              onClick={toggleAboutMenu}
              className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              aria-label="Toggle About Menu"
              aria-expanded={isAboutOpen}
            >
              About
            </button>
            {/* Button to toggle the About dropdown in the mobile menu */}
            
            {isAboutOpen && (
              <div className="pl-4">
                {/* About dropdown menu in the mobile view */}
                
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
                {/* Links inside the About dropdown in the mobile view */}
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
            {/* Button to toggle the Program dropdown in the mobile menu */}
            
            {isProgramOpen && (
              <div className="pl-4">
                {/* Program dropdown menu in the mobile view */}
                
                <Link href="/program" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Program">Program</a>
                </Link>
                <Link href="/program/salary-benefits" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Salary & Benefits">Salary & Benefits</a>
                </Link>
                <Link href="/program/resources" legacyBehavior>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" aria-label="Resources">Resources</a>
                </Link>
                {/* Links inside the Program dropdown in the mobile view */}
              </div>
            )}
            
            <Link href="/contact" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" aria-label="Contact">Contact</a>
            </Link>
            {/* Contact link in the mobile menu */}
            
            <Link href="/apply" legacyBehavior>
              <a className="text-gray-900 hover:text-red-600 block px-3 py-2 rounded-md text-base font-medium" aria-label="Apply">Apply</a>
            </Link>
            {/* Apply link in the mobile menu */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
