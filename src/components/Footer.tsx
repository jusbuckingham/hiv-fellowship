import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8" role="contentinfo">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm mb-4" aria-label={`© ${currentYear} - HIV Clinical Leadership Program`}>
          © {currentYear} - HIV Clinical Leadership Program
        </p>
        <p className="text-sm max-w-2xl mx-auto" aria-label="Non-discrimination statement">
          The HIV Clinical Leadership Program does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
