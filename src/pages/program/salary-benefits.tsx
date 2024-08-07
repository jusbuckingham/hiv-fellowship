import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const SalaryBenefits: React.FC = () => {
  return (
    <>
      <Head>
        <title>Salary & Benefits | HIV Clinical Leadership Program</title>
        <meta name="description" content="Discover the competitive salary and benefits package offered by the HIV Clinical Leadership Program, including medical, dental, housing stipend, and loan repayment options." />
        <meta name="keywords" content="HIV Clinical Leadership Program, salary, benefits, healthcare, medical, dental, housing stipend, loan repayment" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Salary & Benefits<span className="text-red-600">.</span></h1>
        <p className="text-xl max-w-3xl mx-auto">Explore our competitive salary and benefits package, including medical, dental, housing stipend, and loan repayment options for qualifying fellows.</p>
      </section>
      <div className="container mx-auto px-4 py-24">
        <div className="mb-8">
          <Image
            src="/images/program/palm-trees.jpg"
            alt="Palm trees in Los Angeles"
            width={800}
            height={800}
            className="rounded-lg mx-auto w-full h-auto"
          />
        </div>
        <div className="prose prose-lg max-w-none">
          <h2>Up to <span className="text-red-600">$150,000</span> in student loan repayment for qualifying graduates!</h2>
          <h3>Salary</h3>
          <p>Salaries for postgraduate physicians are established by the County of Los Angeles Board of Supervisors, guided by County ordinance and agreements with the Joint Council of Interns and Residents (JCIR).</p>
          <ul>
            <li><strong>Annual Gross Salary:</strong></li>
            <li>PGY-4: $84,123.48</li>
            <li>PGY-5: $90,019.06</li>
            <li>PGY-6: $96,118.29</li>
            <li>PGY-7: $101,851.64</li>
          </ul>
          <h3>Medical & Dental Benefits</h3>
          <p>Fellows receive medical and dental benefits through the Lundquist Institute, covered by the program. Fellows may opt-out of coverage but will not receive reimbursement for declined benefits. Dependents are also eligible for coverage.</p>
          <h3>Housing Stipend</h3>
          <p>Fellows receive a housing stipend of <span className="text-red-600">$10,000</span> annually, disbursed each August for the academic year.</p>
          <h3>Educational Stipend</h3>
          <p>Conference fees, airfare, lodging, and per diem are reimbursed for up to two relevant continuing medical education (CME) activities per year.</p>
          <h3>Relocation</h3>
          <p>No additional relocation benefits are provided. Fellows are responsible for moving expenses and required professional licensure costs (e.g., California medical license, board certification, CPR certification, CME coursework).</p>
          <h3>Licensure Fees</h3>
          <p>Fellows may apply for DEA license fee exemption for services provided at LA County DHS facilities. AAHIVM HIV Specialist exam fees and study materials are reimbursed.</p>
          <h3>Leave Time</h3>
          <p>Fellows are allotted 25 paid leave days per year, usable for vacation, sick leave, or personal time. Leave requests should be submitted at least 90 days in advance via the Time-Off Request Form. Emergency time off will be approved based on circumstances. For more information, refer to the HIV CLP Orientation Packet.</p>
          <h3>Educational Loan Repayment</h3>
          <p>The Fellowship Loan Repayment Program (FLRP) offers up to <span className="text-red-600">$150,000</span> ($50,000 per year for 3 years) for eligible fellows who complete the two-year program. Fellows must work at least 50% of their time in HIV clinical care or research focused on underserved communities. Loan repayments are taxable and disbursed by The Lundquist Institute.</p>
        </div>
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-4">Life in Los Angeles<span className="text-red-600">.</span></h2>
          <p><strong>Los Angeles County</strong>, officially the <strong>County of Los Angeles</strong>, is the most populous county in the United States, home to over ten million residents. The county is ethnically diverse, with people from more than 140 countries speaking 224 different languages. Los Angeles is a vibrant, multicultural hub offering a dynamic lifestyle.</p>
          <p>The fellowship includes rotations across Los Angeles, from <strong>Boyle Heights</strong> (LA General Medical Center) to <strong>Westwood Village</strong> (UCLA National Scholars Program), <strong>Hollywood</strong> (Children's Hospital Los Angeles), <strong>Skid Row</strong> (Street Medicine & JWCH Clinic), <strong>South Central</strong> (South LA Health Center Group, Main Street Clinic), and <strong>Compton/Watts</strong> (CDU/MLK OPC - Oasis Clinic).</p>
          <p>Learn more about life in LA: <a href="https://www.discoverlosangeles.com" className="text-red-600 hover:underline">www.discoverlosangeles.com</a></p>
        </div>
        <div className="mb-8">
          <Image
            src="/images/program/los-angeles-with-mount-baldy-credit-alek-leckszas_orig.jpeg"
            alt="Los Angeles skyline with Mount Baldy in the background"
            width={1600}
            height={800}
            className="rounded-lg mx-auto w-full h-auto"
          />
        </div>
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.2743785498!2d-118.69193073913222!3d34.02016129919778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb27f9e6a2d1%3A0x3a1bdf7e8c2f02b1!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1629836198412!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-label="Map of Los Angeles"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalaryBenefits;
