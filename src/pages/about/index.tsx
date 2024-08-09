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
        <meta name="description" content="Discover the HIV Clinical Leadership Program, a two-year fellowship designed to train physicians for leadership roles in HIV healthcare." />
        <meta name="keywords" content="HIV Clinical Leadership Program, HIV fellowship, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="bg-white">
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4">
            About<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            The HIV Clinical Leadership Program is a two-year postdoctoral fellowship that trains physicians for leadership in HIV healthcare.
          </p>
        </section>
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Celebrating 20+ Years of Excellence<span className="text-red-600">.</span>
          </h2>
          <div className="relative w-full h-80 mb-12">
            <Image
              src="/images/about/fellowshipgrouppic.png"
              alt="Fellowship members celebrating 20+ years of excellence"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded"
            />
          </div>
        </section>
        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Established in <span className="text-red-600">2001</span>
              </h3>
              <p>
                The Los Angeles Area AIDS Education and Training Center (AETC) at USC established the HIV fellowship in 2001, later revitalized in 2016 through a partnership with the Los Angeles County Department of Health Services (DHS). The program trains physicians committed to improving primary care for underserved communities living with HIV, leveraging the strengths of DHS, USC Keck School of Medicine’s AETC, UCLA’s National Clinician Scholars Program, ViiV Healthcare, and The Lundquist Institute.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Our <span className="text-red-600">Goal</span>
              </h3>
              <p>
                We aim to train leaders in HIV medicine who advocate for those affected by HIV, especially vulnerable populations. Our curriculum and mentorship place fellows in leadership roles after graduation. Ideal applicants are:
              </p>
              <ul className="list-decimal list-inside space-y-2">
                <li>Dedicated to high-quality, whole-person care for HIV patients.</li>
                <li>Committed to research benefiting HIV-affected communities.</li>
                <li>Aspiring leaders in healthcare, education, research, and advocacy.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-20">
          <h3 className="text-2xl font-bold mb-8">Overview</h3>
          <p className="mb-8">
            <span className="font-bold text-red-600">Year 1</span> focuses on academic coursework with UCLA’s National Clinician Scholars program, covering health policy, research methods, community-based research, healthcare issues, and leadership skills. Fellows rotate through various HIV clinics, consult on acute care cases in the Emergency Department, and establish continuity clinics. Case-based learning and didactic sessions cover essential HIV medicine topics, including multi-drug resistance and opportunistic infections.
          </p>
          <p className="mb-8">
            <span className="font-bold text-red-600">Year 2</span> emphasizes independent patient management in specialty rotations, continuity care, and mentoring first-year fellows, residents, and students. Second-year fellows implement and present their scholarly project at a conference or submit it for publication.
          </p>
        </section>
        <section className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-4">Learning Objectives & Milestones</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-2">Core Competencies:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>HIV Care Continuum</li>
                <li>HIV Screening & Testing</li>
                <li>Medical Evaluation of the HIV Positive Patient</li>
                <li>HIV and AIDS Clinical Manifestations</li>
                <li>Opportunistic Infections & Malignancies</li>
                <li>Anti-Retroviral Therapy & Resistance</li>
                <li>Laboratory Testing & Health Maintenance</li>
                <li>HIV Prevention</li>
                <li>Co-infections: STIs, Hepatitis B/C</li>
                <li>Co-morbidities & HIV Primary Care</li>
                <li>Care of the Aging HIV Population</li>
                <li>Quality Improvement & Health Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Clinical Rotations:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>HIV Primary Care</li>
                <li>HIV Clinical Consult Service</li>
                <li>Infectious Disease Clinic</li>
                <li>Inpatient Infectious Disease</li>
                <li>Community HIV & STD Clinics</li>
                <li>Correctional Health HIV Clinics</li>
                <li>Gender Affirming / Trans Care</li>
                <li>Street Medicine</li>
                <li>Addiction Medicine</li>
                <li>Emergency Department</li>
                <li>Palliative Care</li>
                <li>Women’s Health (incl. HIV Perinatal Care & Obstetrics)</li>
              </ul>
              <h4 className="text-xl font-bold mt-8 mb-2">Academic & Workshop Topics:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Health Policy</li>
                <li>Research Methods</li>
                <li>Community-Based Research</li>
                <li>Leadership in Health</li>
                <li>Executive Leadership Skills</li>
                <li>Health Insurance Systems</li>
                <li>Social Determinants of Health</li>
                <li>Trauma-Informed Care</li>
              </ul>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
