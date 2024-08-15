import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="bg-gray-900 text-white text-center py-8" role="contentinfo">
      {/* Footer section with dark gray background, white text, centered content, and padding */}
      
      <p className="text-sm" aria-label={`© ${currentYear} - HIV Clinical Leadership Program`}>
        © {currentYear} - HIV Clinical Leadership Program
      </p>
      {/* Dynamically generated copyright text for the current year, with a small font size and an accessible label */}
      
      <p className="text-sm" aria-label="Non-discrimination statement">
        The HIV Clinical Leadership Program does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
      </p>
      {/* Non-discrimination statement, with a small font size and an accessible label */}
    </footer>
  );
};

export default Footer;
