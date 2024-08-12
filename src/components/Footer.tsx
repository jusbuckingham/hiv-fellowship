const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-8" role="contentinfo">
      {/* Footer section with dark gray background, white text, centered content, and padding */}
      
      <p className="text-sm" aria-label="© 2024 - HIV Clinical Leadership Program">
        © 2024 - HIV Clinical Leadership Program
      </p>
      {/* Copyright text for the year 2024, with a small font size and an accessible label */}
      
      <p className="text-sm" aria-label="Non-discrimination statement">
        The HIV Clinical Leadership Program does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
      </p>
      {/* Non-discrimination statement, with a small font size and an accessible label */}
    </footer>
  );
};

export default Footer;
