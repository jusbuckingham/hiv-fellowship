import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center">An Opportunity to Serve</h2>
      <p className="mt-4 text-center">
        More than 1.2 million people are living with HIV in the U.S. with more than 35,000 new infections each year. 
        After 40 years, the HIV epidemic continues to devastate our communities, disproportionately impacting vulnerable populations.
      </p>
      <p className="mt-4 text-center">
        The HIV Clinical Leadership Program is an established, postdoctoral fellowship aimed at developing HIV specialists who are knowledgeable and committed to addressing the health inequities our patients face at an individual and systemic level. 
        We have a proven track record of placing fellows in competitive leadership career positions throughout the United States.
      </p>
    </section>
  );
};

export default AboutSection;
