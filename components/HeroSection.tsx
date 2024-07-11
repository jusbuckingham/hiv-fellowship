import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-600 text-white text-center py-20">
      <h1 className="text-4xl font-bold">Training the next generation of leaders in HIV clinical care.</h1>
      <p className="mt-4 text-lg">Welcome to the HIV Clinical Leadership Program</p>
      <a href="/apply" className="mt-8 inline-block bg-white text-blue-600 font-bold py-2 px-4 rounded">
        APPLY HERE
      </a>
    </section>
  );
};

export default HeroSection;
