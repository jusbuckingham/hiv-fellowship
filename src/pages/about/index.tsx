import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>About | HIV Clinical Leadership Program</title>
        <meta name="description" content="Explore the HIV Clinical Leadership Program, a two-year fellowship designed to train physicians for leadership roles in HIV healthcare." />
        <meta name="keywords" content="HIV Clinical Leadership Program, HIV fellowship, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      
      <Navbar />
      
      <main className="space-y-24">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-24">
          <h1 className="text-5xl font-extrabold mb-4">About<span className="text-red-600">.</span></h1>
          <p className="text-xl max-w-2xl mx-auto">
            The HIV Clinical Leadership Program is a two-year postdoctoral fellowship preparing physicians for leadership roles in HIV healthcare.
          </p>
        </section>

        {/* History Section */}
        <section className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Celebrating 20+ Years of Excellence<span className="text-red-600">.</span></h2>
          <Image src="/images/about/fellowshipgrouppic.png" alt="Fellowship members celebrating 20+ years of excellence" layout="responsive" width={700} height={500} className="rounded-lg shadow-md mb-12" />
          <div className="text-left">
            <h3 className="text-2xl font-bold mb-4">Established in <span className="text-red-600">2001</span></h3>
            <p className="mb-8">
              The Los Angeles Area AIDS Education and Training Center (AETC) at USC launched the HIV fellowship in 2001, later revitalized in 2016 through a partnership with the Los Angeles County Department of Health Services (DHS).
            </p>
          </div>
        </section>

        {/* Program Overview */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-left px-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Program Overview</h3>
            <p className="mb-8"><span className="font-bold text-red-600">Year 1:</span> Academic coursework through UCLA’s National Clinician Scholars program, covering health policy, research methods, and leadership skills.</p>
            <p><span className="font-bold text-red-600">Year 2:</span> Independent patient management in specialty rotations, continuity care, and mentoring.</p>
          </div>
        </section>

        {/* Learning Objectives */}
        <section className="bg-white py-16">
          <div className="container mx-auto text-left px-6">
            <h3 className="text-2xl font-bold mb-8 text-center">Learning Objectives & Milestones</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-4">Core Competencies:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>HIV Care Continuum</li>
                  <li>HIV Screening & Testing</li>
                  <li>Medical Evaluation of the HIV-Positive Patient</li>
                  <li>Opportunistic Infections & Malignancies</li>
                  <li>Antiretroviral Therapy & Resistance</li>
                  <li>HIV Prevention</li>
                  <li>Co-infections: STIs, Hepatitis B/C</li>
                  <li>Care of the Aging HIV Population</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-4">Clinical Rotations:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>HIV Primary Care</li>
                  <li>Infectious Disease Clinic</li>
                  <li>Community HIV & STD Clinics</li>
                  <li>Gender Affirming / Trans Care</li>
                  <li>Street Medicine</li>
                  <li>Addiction Medicine</li>
                  <li>Emergency Department</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutPage;
