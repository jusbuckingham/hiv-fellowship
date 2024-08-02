import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4">About<span className="text-red-600">.</span></h1>
          <p className="text-xl max-w-3xl mx-auto">The HIV Clinical Leadership Program is a two-year postdoctoral fellowship program that focuses on training physicians to enter leadership positions in HIV healthcare.</p>
        </section>
        <h2 className="text-4xl font-bold mb-8 text-center"></h2>
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Celebrating 20+ years of excellence in HIV specialty training<span className="text-red-600">.</span></h2>
          <div className="relative w-full h-80 mb-12">
            <Image
              src="/images/about/fellowshipgrouppic.png"
              alt="Group of fellowship members celebrating 20+ years of excellence in HIV specialty training"
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
              <h3 className="text-2xl font-bold mb-4">Established in <span className="text-red-600">2001</span></h3>
              <p>The Los Angeles Area AIDS Education and Training Center (AETC) at USC, a division of the Department of Family Medicine at Keck School of Medicine, created one of the first HIV fellowship programs open to primary care physicians in 2001. The original fellowship program was reinvigorated in 2016, now in partnership with the Los Angeles County Department of Health Services (DHS), the second-largest municipal safety net system in the US. The HIV Clinical Leadership Program (CLP) now offers a unique HIV fellowship training program for physicians committed to improving primary care for people living with HIV in underserved communities. This program brings together the unique strengths of DHS, USC Keck School of Medicine’s AIDS Education Training Center, UCLA’s National Clinician Scholars Program, ViiV Healthcare, and The Lundquist Institute.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our <span className="text-red-600">Goal</span></h3>
              <p>Our goal is to train versatile leaders in the field of HIV Medicine who are passionate advocates for all people touched by HIV, particularly vulnerable populations. Our robust curriculum and mentorship program place fellows into leadership positions upon graduation. We are looking for applicants who are:</p>
              <ul className="list-decimal list-inside space-y-2">
                <li>Committed to providing high-quality whole-person care to all patients impacted by HIV.</li>
                <li>Understanding the importance of health services research that benefits patients and communities affected by HIV.</li>
                <li>Dedicated to being leaders in healthcare, medical education, community-based research, and patient advocacy.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-4">Overview</h3>
          <p className="mb-6"><span className="font-bold text-red-600">Year 1</span> is focused on academic coursework in partnership with the UCLA National Clinician Scholars program. Fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Fellows will rotate through various HIV clinics, consult in the Emergency Department on acute care cases that require HIV specialty consultation, and will also begin to build their continuity clinic. Fellows will participate in regular case-based learning and didactic sessions on major HIV medicine topics including HIV multi-drug resistance and opportunistic infections.</p>
          <p className="mb-6">In <span className="font-bold text-red-600">year 2</span>, fellows will be expected to manage patients with more independent decision-making in specialty or elective rotations, as well as maintain their continuity care patient panels and precept first-year fellows, residents, and students. Second-year fellows will spend a significant amount of time implementing their chosen scholarly project which will be presented at a regional/national conference and/or will be submitted for publication in a peer-review journal.</p>
        </section>
        <section className="container mx-auto px-6 py-16">
          <h3 className="text-2xl font-bold mb-4">LEARNING OBJECTIVES AND MILESTONES</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-2">Core Competencies:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>HIV Care Continuum</li>
                <li>HIV Screening & Testing</li>
                <li>Medical Evaluation of the HIV Positive Patient</li>
                <li>HIV and AIDS Clinical Manifestations</li>
                <li>Opportunistic Infections (OIs) & Malignancies</li>
                <li>Anti-Retroviral Therapy & Resistance</li>
                <li>Laboratory Testing & Health Maintenance</li>
                <li>HIV Prevention</li>
                <li>Co-infections: Sexually Transmitted Infections (STIs), Hepatitis B/C</li>
                <li>Co-morbidities & HIV Primary Care</li>
                <li>Care of the Aging HIV Population</li>
                <li>Quality/Process Improvement, Health Services Research and Health Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Clinical Rotations:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>HIV Primary Care</li>
                <li>HIV Clinical Consult Service</li>
                <li>Communicable Disease/ Infectious Disease Clinic</li>
                <li>Inpatient Infectious Disease</li>
                <li>Colorectal Clinic</li>
                <li>Community HIV & STD Clinics</li>
                <li>Correctional Health HIV Clinics</li>
                <li>Dermatology</li>
                <li>Gender Affirming / Trans Care</li>
                <li>Street Medicine</li>
                <li>Addiction Medicine</li>
                <li>Emergency Department</li>
                <li>Hematology/Oncology</li>
                <li>Neuropsychology</li>
                <li>Neurology</li>
                <li>Palliative Care</li>
                <li>Pediatric & Adolescent Medicine</li>
                <li>Pulmonary Medicine</li>
                <li>Women’s Health (incl. HIV Perinatal Care & Obstetrics)</li>
              </ul>
              <h4 className="text-xl font-bold mt-8 mb-2">Academic Coursework & Workshop Topics:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Health Policy</li>
                <li>Research Methods</li>
                <li>Community-Based Participatory Research</li>
                <li>Medical Journal Clubs</li>
                <li>Pressing Issues in Healthcare</li>
                <li>Pathways to Leadership in Health</li>
                <li>Executive Leadership Skills</li>
                <li>Health Insurance Systems and Payor Sources</li>
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
