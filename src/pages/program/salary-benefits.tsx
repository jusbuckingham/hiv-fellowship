import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const SalaryBenefits: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="header-section text-center bg-gray-900 text-white py-20">
        <h1 className="text-5xl font-bold">Salary & Benefits<span className="text-red-600">.</span></h1>
        <p className="text-xl mt-4">Our program offers a competitive salary & benefits package that includes medical & dental benefits and an annual housing stipend. Educational loan repayment is also available to qualifying fellows.</p>
      </div>
      <h2 className="text-4xl font-bold mb-8 text-center"></h2>
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Image
            src="/images/program/palm-trees.jpg"
            alt="Los Angeles"
            width={1600}
            height={800}
            className="rounded-lg mx-auto w-full h-auto"
          />
        </div>
        <div className="prose prose-lg max-w-none">
          <h2>Up to <span className="text-red-600">$150,000</span> in student loan repayment for qualifying graduates!</h2>
          <h3>Salary</h3>
          <p>Postgraduate physician salaries and benefits are established periodically by the County of Los Angeles Board of Supervisors, by way of County ordinance and/or through an applicable Memorandum of Understanding with the Joint Council of Interns and Residents (JCIR).</p>
          <ul>
            <li>ANNUAL GROSS SALARY</li>
            <li>PHYSICIAN POST GRADUATE YEAR 4 (PGY-4): $84,123.48</li>
            <li>PHYSICIAN POST GRADUATE YEAR 5 (PGY-5): $90,019.06</li>
            <li>PHYSICIAN POST GRADUATE YEAR 6 (PGY-6): $96,118.29</li>
            <li>PHYSICIAN POST GRADUATE YEAR 7 (PGY-7): $101,851.64</li>
          </ul>
          <h3>Medical & Dental Benefits</h3>
          <p>Benefit packages available to all employees of Lundquist Institute will be offered to all fellows and paid for by the fellowship program. Fellows may opt-out of the coverage, but will not receive monetary reimbursement for any declined benefits. Dependents of fellows may also receive medical and dental benefits through available benefit packages that are covered by the fellowship program.</p>
          <h3>Housing Stipend</h3>
          <p>A housing stipend of <span className="text-red-600">$10,000</span> per year is provided to all active fellows in August of each academic year as of July 1, 2023.</p>
          <h3>Educational Stipend</h3>
          <p>Conference fees, airfare, lodging, and per diem reimbursements are available for up to two (2) relevant continuing medical education conferences and/or activities per year.</p>
          <h3>Relocation</h3>
          <p>There are no additional relocation benefits provided. Fellows are responsible for any incurred moving expenses and for all required professional licensure expenses (California medical license, board certification, CPR certification, CME coursework).</p>
          <h3>Licensure Fees</h3>
          <p>Fellows may apply for DEA license fee exemption for services provided in Los Angeles County Department of Health Services facilities. AAHIVM HIV Specialist examination fees and study materials are reimbursed.</p>
          <h3>Leave Time</h3>
          <p>Each fellow is allotted 25 paid leave days per year; these may be used for vacation, sick, or personal time off. Leave requests must be submitted to the Director of Operations at least 90 days in advance whenever possible via the Time-Off Request Form. Program leadership will review all requests and respond in a timely manner. Any requests for emergency time off will be approved with consideration of the circumstances. For more information please refer to the HIV CLP Orientation Packet.</p>
          <h3>Educational Loan Repayment</h3>
          <p>The Fellowship Loan Repayment Program (FLRP) has been established as a benefit to all eligible fellows who complete the 2-year HIV Clinical Leadership Program. The FLRP offers up to a total of <span className="text-red-600">$150,000</span> ($50,000 per year for 3 years) of taxable (federal and state) payments to be applied towards educational debt. To receive the loan repayment, fellows must be employed in a position that commits at least 50% of salaried time to direct HIV clinical care or HIV-related health services research; the work must be focused on services for underserved communities. Eligibility will be determined by program leadership on an annual basis. Per IRS regulations, loan repayments are considered taxable. Payments will be disbursed by The Lundquist Institute directly to each eligible fellow. Details can be found in the HIV Clinical Leadership Program – Fellowship Loan Repayment Program (FLRP) policy.</p>
        </div>
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold mb-4">Life in Los Angeles<span className="text-red-600">.</span></h2>
          <p><strong>Los Angeles County</strong>, officially the <strong>County of Los Angeles</strong>, is the most populous county in the United States and in the U.S. state of California, with more than ten million inhabitants as of the 2020 census. It is the most populous non–state-level government entity in the United States. Its population is greater than that of 41 individual U.S. states. The county is home to more than one-quarter of California residents and is one of the most ethnically diverse counties in the United States. <strong>Los Angeles is home to people from more than 140 countries speaking 224 different identified languages.</strong></p>
          <p>Fellowship primary clinics and rotation sites span Los Angeles from <strong>Boyle Heights</strong> (LA General Medical Center) to <strong>Westwood Village</strong> (UCLA National Scholars Program), <strong>Hollywood</strong> (Children's Hospital Los Angeles) and <strong>Skid Row in DTLA</strong> (Street Medicine & JWCH Clinic), to <strong>South Central</strong> (South LA Health Center Group, Main Street Clinic) & <strong>Compton/Watts</strong> (CDU/MLK OPC - Oasis Clinic).</p>
          <p>Explore more of LA here: <a href="https://www.discoverlosangeles.com" className="text-red-600">www.discoverlosangeles.com</a></p>
        </div>
        <div className="mb-8">
          <Image
            src="/images/program/los-angeles-with-mount-baldy-credit-alek-leckszas_orig.jpeg"
            alt="Los Angeles Skyline"
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
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SalaryBenefits;
