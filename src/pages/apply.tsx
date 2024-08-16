import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

const Apply: React.FC = () => {
  return (
    <>
      <Head>
        <title>Apply | HIV Clinical Leadership Program</title>
        <meta name="description" content="Start your journey with the HIV Clinical Leadership Program. Apply today!" />
        <meta name="keywords" content="HIV Clinical Leadership Program, apply, application, fellowship, healthcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="bg-white">
        <section className="bg-gray-900 text-white text-center py-20" role="banner">
          <h1 className="text-5xl font-bold mb-4">
            Apply<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl">Join the HIV Clinical Leadership Program today!</p>
        </section>
        <section className="container mx-auto px-6 py-24">
          <div className="flex flex-col items-center">
            <Image
              src="/images/apply/tasha-dixon.jpg"
              alt="Doctor holding a stethoscope"
              width={400}
              height={400}
              className="mb-8 rounded-lg shadow-lg"
              aria-describedby="apply-image"
            />
            <p id="apply-image" className="sr-only">Image of a doctor holding a stethoscope</p>
            <p className="text-lg font-bold text-red-600 mb-2 text-center">
              Physicians from the SOUTH and MID-ATLANTIC STATES are strongly encouraged to apply!
            </p>
            <p className="text-lg font-bold text-red-600 mb-8 text-center">
              Black, Latinx, Indigenous, BIPOC, LGBTQIA2S+ physicians are highly encouraged to apply!
            </p>
          </div>
          <p className="text-lg mb-8 text-center">
            We are conducting a national search for candidates for this prestigious two-year clinical fellowship. Fellows will receive full salary and benefits.
          </p>
          <p className="text-lg mb-8 text-center">
            Up to 4 fellows will be selected for each cohort.
          </p>
          <p className="text-lg mb-8 text-center">
            Eligible fellows with qualifying academic loans may receive up to <span className="font-bold text-red-600">$150,000 in loan repayment</span> if they continue to provide HIV-related services in underserved communities.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-center">Preferred Qualifications:</h2>
          <ul className="list-disc list-inside mb-8 mx-auto max-w-2xl text-center">
            <li>Passion for primary care and HIV medicine</li>
            <li>Commitment to outpatient quality improvement or system innovation</li>
            <li>Dedication to serving underserved communities</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4 text-center">Required Board Eligibility/Certification:</h2>
          <ul className="list-disc list-inside mb-8 mx-auto max-w-2xl text-center">
            <li>Family Medicine (FM)</li>
            <li>Internal Medicine (IM)</li>
            <li>Medicine-Pediatrics (Med-Peds)</li>
          </ul>
          <p className="text-lg mb-8 text-center">
            Applicants must have completed an accredited U.S. medical residency program.
          </p>
          <p className="text-lg mb-8 text-center">
            Please note: The fellowship does not support international visas.
          </p>
          <h2 className="text-2xl font-bold mb-4 text-center">Applications Now Open for the 2025-2027 Cohort:</h2>
          <p className="text-lg mb-8 text-center">
            <span className="font-bold text-red-600">Apply today! <a href="https://docs.google.com/forms/d/1GMSQXZOlZGOeIpS9x5HphmJvW1ysE100_v8grsacItw/viewform?edit_requested=true" className="underline">Click here</a> to access the application form.</span>
          </p>
          <p className="text-lg mb-8 text-center">
            Application deadline: <span className="font-bold">November 1st</span>
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Apply;
