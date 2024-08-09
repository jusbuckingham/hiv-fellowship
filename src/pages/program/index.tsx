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
        <meta name="description" content="Explore the two-year fellowship program offered by the HIV Clinical Leadership Program." />
        <meta name="keywords" content="HIV Clinical Leadership Program, fellowship, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Program<span className="text-red-600">.</span></h1>
        <p className="text-xl max-w-3xl mx-auto">An overview of the HIV Clinical Leadership Program’s two-year fellowship.</p>
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
                Fellows identify their research interests and engage in coursework at the UCLA Fielding School of Public Health/National Clinician Scholars Program. Topics include Health Policy & Financing, Research Design, and Community-Based Participatory Research. Additionally, fellows attend seminars covering pressing health issues, pathways to leadership, and journal clubs.
              </p>
              <h3 className="text-xl font-semibold mb-2">Clinical Training & Care (30%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows receive clinical training in HIV primary care settings such as Rand Schrader Clinic, LAC+USC Medical Center, Early Intervention Clinic (Skid Row), and various subspecialty clinics. They also gain experience in emergency care and jail clinic settings.
              </p>
              <h3 className="text-xl font-semibold mb-2">Didactics & Case Studies (10%)</h3>
              <p className="text-gray-700">
                Fellows participate in sessions covering antiretroviral therapy, DHHS guidelines, resistance training, and challenging HIV cases.
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
                Fellows continue their clinical training in HIV care across multiple settings, including emergency and inpatient services. They also engage in specialized HIV care in maternal-child, street medicine, and positive care clinics.
              </p>
              <h3 className="text-xl font-semibold mb-2">Scholarship & Leadership Development (30%)</h3>
              <p className="text-gray-700 mb-4">
                Fellows work on scholarly project planning, finalizing ideas, and submitting IRB applications. They continue attending seminars on health issues and leadership.
              </p>
              <h3 className="text-xl font-semibold mb-2">Didactics & Case Studies (5%)</h3>
              <p className="text-gray-700 mb-4">
                Sessions cover antiretroviral therapy, DHHS guidelines, HIV resistance training, and challenging cases.
              </p>
              <h3 className="text-xl font-semibold mb-2">Journal Clubs & Teaching (5%)</h3>
              <p className="text-gray-700">
                Fellows teach primary care residents in the USC HIV Training Program and present lectures to various healthcare professionals.
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
                In the second year, fellows continue their clinical training in various settings, including specialized HIV care clinics and the USC Family Medicine Street Medicine clinic. They also take on teaching responsibilities for residents and students.
              </p>
              <h3 className="text-xl font-semibold mb-2">Scholarship & Leadership Development (50%)</h3>
              <p className="text-gray-700">
                Fellows work closely with research mentors to complete projects, prepare for conference presentations, and submit publications. They also continue attending seminars and journal clubs.
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
                Fellows gain comprehensive experience in HIV primary care across multiple clinics, providing care for over 300 HIV-positive patients. They manage antiretroviral therapy, HIV-related primary care, and complications, all under the guidance of DHS and USC faculty.
              </p>
              <h3 className="text-xl font-semibold mb-2">Emergency Department HIV Consultation Service</h3>
              <p className="text-gray-700 mb-4">
                Fellows provide 24/7 HIV consultations in the emergency department at LAC+USC Medical Center, offering guidance on acute and chronic HIV cases.
              </p>
              <h3 className="text-xl font-semibold mb-2">Key HIV Subspecialty Training</h3>
              <p className="text-gray-700 mb-4">
                Fellows rotate through subspecialties such as addiction medicine, adolescent medicine, communicable diseases, dermatology, oncology, OB/Gyn, and more, gaining exposure to a wide range of HIV-related conditions.
              </p>
              <h3 className="text-xl font-semibold mb-2">Inpatient Infectious Disease Training</h3>
              <p className="text-gray-700">
                Fellows manage hospitalized HIV-positive patients at LAC+USC Medical Center, working alongside infectious disease fellows and participating in consult services and conferences.
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
