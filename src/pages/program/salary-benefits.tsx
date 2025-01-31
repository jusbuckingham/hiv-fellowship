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
        <meta name="description" content="Explore the competitive salary and comprehensive benefits offered by the HIV Clinical Leadership Program, including medical, dental, housing stipend, and loan repayment options." />
        <meta name="keywords" content="HIV Clinical Leadership Program, salary, benefits, healthcare, medical, dental, housing stipend, loan repayment" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-20 px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Salary & Benefits<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our competitive salary and benefits package, including medical, dental, housing stipend, and loan repayment options for qualifying fellows.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="container mx-auto px-6 py-16">
          <div className="mb-12">
            <Image
              src="/images/program/palm-trees.jpg"
              alt="Palm trees in Los Angeles"
              width={1200}
              height={600}
              className="rounded-lg shadow-lg mx-auto w-full h-auto"
            />
          </div>
          <div className="prose prose-lg max-w-none text-gray-800">
            {[
              { title: 'Student Loan Repayment', content: 'Up to $150,000 in Student Loan Repayment for Qualifying Graduates!' },
              { title: 'Salary', content: 'Salaries for postgraduate physicians are determined by the County of Los Angeles Board of Supervisors.' },
              { title: 'Medical & Dental Benefits', content: 'Comprehensive medical and dental coverage through the Lundquist Institute.' },
              { title: 'Housing Stipend', content: 'Annual $10,000 housing stipend disbursed in August.' },
              { title: 'Educational Stipend', content: 'Reimbursement for conference fees, airfare, lodging, and CME activities.' },
              { title: 'Relocation', content: 'No relocation benefits. Fellows cover moving and licensure costs.' },
              { title: 'Licensure Fees', content: 'DEA license fee exemption and HIV Specialist exam fee reimbursement.' },
              { title: 'Leave Time', content: '25 paid leave days per year for vacation, sick leave, or personal time.' },
            ].map((item, index) => (
              <div key={index} className="mb-8">
                <h3 className="text-3xl font-semibold text-gray-900">{item.title}</h3>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SalaryBenefits;
