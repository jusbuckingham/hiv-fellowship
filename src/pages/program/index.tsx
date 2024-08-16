import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Program: React.FC = () => {
  return (
    <>
      <Head>
        <title>Program | HIV Clinical Leadership Program</title>
        <meta name="description" content="Explore the comprehensive two-year fellowship program offered by the HIV Clinical Leadership Program." />
        <meta name="keywords" content="HIV Clinical Leadership Program, fellowship, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Program<span className="text-red-600">.</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto">
          Discover the HIV Clinical Leadership Program’s immersive two-year fellowship.
        </p>
      </section>
      <section className="container mx-auto px-4 py-24">
        <div className="grid gap-16">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-1.png"
                alt="Participants in a training session"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Year 1, Session 1</h2>
              <h3 className="text-xl font-semibold mb-2">Scholarship & Leadership Development (60%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows identify research interests and undertake coursework at the UCLA Fielding School of Public Health/National Clinician Scholars Program. Subjects include Health Policy, Research Design, and Community-Based Participatory Research. Fellows also attend seminars addressing key health topics, leadership pathways, and participate in journal clubs.
              </p>
              <h3 className="text-xl font-semibold mb-2">Clinical Training & Care (30%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows gain clinical experience in HIV primary care at various facilities, including Rand Schrader Clinic and LAC+USC Medical Center, with exposure to emergency care and jail clinic settings.
              </p>
              <h3 className="text-xl font-semibold mb-2">Didactics & Case Studies (10%)</h3>
              <p className="text-gray-700">
                Sessions focus on antiretroviral therapy, DHHS guidelines, resistance training, and challenging HIV cases.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-2.jpg"
                alt="Medical professionals discussing a case"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Year 1, Session 2</h2>
              <h3 className="text-xl font-semibold mb-2">Clinical Training & Care (60%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows continue their clinical training across multiple settings, including emergency and inpatient services, and gain specialized HIV care experience in maternal-child, street medicine, and positive care clinics.
              </p>
              <h3 className="text-xl font-semibold mb-2">Scholarship & Leadership Development (30%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows work on finalizing scholarly projects and submitting IRB applications while continuing to attend health and leadership seminars.
              </p>
              <h3 className="text-xl font-semibold mb-2">Didactics & Case Studies (5%)</h3>
              <p className="text-gray-700 mb-4">
                Continued education on antiretroviral therapy, DHHS guidelines, resistance training, and challenging HIV cases.
              </p>
              <h3 className="text-xl font-semibold mb-2">Journal Clubs & Teaching (5%)</h3>
              <p className="text-gray-700">
                Fellows instruct primary care residents in the USC HIV Training Program and deliver lectures to various healthcare professionals.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-3.jpg"
                alt="Group of medical professionals collaborating"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Year 2</h2>
              <h3 className="text-xl font-semibold mb-2">Clinical Training & Care (50%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows continue clinical training across diverse settings, including specialized HIV care clinics and the USC Family Medicine Street Medicine clinic, while taking on teaching responsibilities.
              </p>
              <h3 className="text-xl font-semibold mb-2">Scholarship & Leadership Development (50%)</h3>
              <p className="text-gray-700">
                Fellows collaborate closely with research mentors to complete projects, prepare for conferences, and submit publications. They also continue to attend seminars and journal clubs.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-4.png"
                alt="Medical professionals in a clinical setting"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Core Clinical Training Experiences</h2>
              <h3 className="text-xl font-semibold mb-2">HIV Primary Care</h3>
              <p className="text-gray-700 mb-4">
                Fellows acquire extensive experience in HIV primary care, managing over 300 HIV-positive patients. This includes antiretroviral therapy, HIV-related primary care, and addressing complications, all under expert guidance.
              </p>
              <h3 className="text-xl font-semibold mb-2">Emergency Department HIV Consultation Service</h3>
              <p className="text-gray-700 mb-4">
                Fellows provide 24/7 HIV consultations in the emergency department at LAC+USC Medical Center, handling acute and chronic HIV cases.
              </p>
              <h3 className="text-xl font-semibold mb-2">Key HIV Subspecialty Training</h3>
              <p className="text-gray-700 mb-4">
                Rotations through subspecialties like addiction medicine, adolescent medicine, communicable diseases, dermatology, and oncology expose fellows to a wide array of HIV-related conditions.
              </p>
              <h3 className="text-xl font-semibold mb-2">Inpatient Infectious Disease Training</h3>
              <p className="text-gray-700">
                Fellows manage hospitalized HIV-positive patients at LAC+USC Medical Center, collaborating with infectious disease fellows and participating in consult services and conferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Program;
