// src/pages/apply.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Apply: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Apply.</h1>
        <p className="text-lg mb-8">Apply for the HIV Clinical Leadership Program today!</p>
        <div className="flex justify-center mb-8">
          <Image
            src="/images/apply/tasha-dixon.jpg" // update this path if you have a different image location
            alt="Doctor"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <p className="text-lg font-bold text-red-600 mb-2">
          Due to the current trends of the HIV epidemic in the United States, physicians from the SOUTH and MID-ATLANTIC STATES strongly encouraged to apply!
        </p>
        <p className="text-lg font-bold text-red-600 mb-8">
          Black, Latinx, Indigenous, BIPOC, LGBTQIA2S+ physicians strongly encouraged to apply!
        </p>
        <p className="text-lg mb-8">
          Candidates will be competitively selected through a national search for this two-year clinical fellowship program. Those selected will participate in the HIV Clinical Leadership Program with full fellowship salary and benefits.
        </p>
        <p className="text-lg mb-8">
          Up to 4 fellows may be selected for each cohort.
        </p>
        <p className="text-lg mb-8">
          Fellows with eligible academic loans may receive up to <span className="font-bold text-red-600">$150,000 in loan repayment</span> if they continue to provide HIV-related services in underserved communities.
        </p>
        <h2 className="text-2xl font-bold mb-4">Desired qualifications for potential candidates include:</h2>
        <ul className="list-disc list-inside mb-8">
          <li>A strong interest in primary care and HIV medicine</li>
          <li>A strong interest in pursuing and implementing outpatient quality improvement or system innovation</li>
          <li>A sincere commitment to work with underserved communities</li>
        </ul>
        <h2 className="text-2xl font-bold mb-4">The HIV Clinical Leadership Program is seeking applicants who are board eligible or board certified in:</h2>
        <ul className="list-disc list-inside mb-8">
          <li>Family Medicine (FM)</li>
          <li>Internal Medicine (IM)</li>
          <li>Medicine-Pediatrics (Med-Peds)</li>
        </ul>
        <p className="text-lg mb-8">
          Applicants must have completed an accredited United States medical residency program.
        </p>
        <p className="text-lg mb-8">
          The fellowship does not support any international visas.
        </p>
        <h2 className="text-2xl font-bold mb-4">Applications now open for the 2025-2027 Fellowship cohort. Apply today!</h2>
        <p className="text-lg mb-8">
          <span className="font-bold text-red-600">Please <a href="https://docs.google.com/forms/d/1GMSQXZOlZGOeIpS9x5HphmJvW1ysE100_v8grsacItw/viewform?edit_requested=true" className="underline">click here</a> to access the application form.</span>
        </p>
        <p className="text-lg mb-8">
          Application deadline: <span className="font-bold">November 1st</span>
        </p>
        <p className="text-lg mb-8">
          The HIV Clinical Leadership Program does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, or military status, in any of its activities or operations.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
