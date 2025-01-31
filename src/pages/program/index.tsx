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
        <meta
          name="description"
          content="Explore the comprehensive two-year fellowship program offered by the HIV Clinical Leadership Program."
        />
        <meta
          name="keywords"
          content="HIV Clinical Leadership Program, fellowship, healthcare, medicine, HIV specialists"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-20">
          <h1 className="text-5xl font-extrabold mb-4">
            Program<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the HIV Clinical Leadership Program’s immersive two-year fellowship.
          </p>
        </section>

        {/* Program Details */}
        <section className="container mx-auto py-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {[
              {
                image: '/images/program/program-1.png',
                alt: 'Participants in a training session',
                title: 'Year 1, Session 1',
                description:
                  'Fellows engage in scholarship and leadership development, focusing on health policy, research design, and community-based participatory research. Clinical training involves HIV primary care at various facilities, supplemented with didactics and case studies.',
                link: '#session1',
              },
              {
                image: '/images/program/program-2.jpg',
                alt: 'Medical professionals discussing a case',
                title: 'Year 1, Session 2',
                description:
                  'This session emphasizes clinical training across multiple settings, including emergency and inpatient services. Fellows also finalize scholarly projects while continuing their education on key HIV-related topics.',
                link: '#session2',
              },
              {
                image: '/images/program/program-3.jpg',
                alt: 'Group of medical professionals collaborating',
                title: 'Year 2',
                description:
                  'In the second year, fellows continue clinical training and assume teaching responsibilities. They also focus on completing research projects, preparing for conferences, and publishing their work.',
                link: '#year2',
              },
              {
                image: '/images/program/program-4.png',
                alt: 'Medical professionals in a clinical setting',
                title: 'Core Clinical Training Experiences',
                description:
                  'Fellows gain extensive experience in HIV primary care, emergency department consultations, and various HIV subspecialties, including addiction medicine and oncology.',
                link: '#core-experiences',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <Image src={item.image} alt={item.alt} width={800} height={600} className="w-full h-72 object-cover" />
                <div className="p-8">
                  <h2 className="text-3xl font-semibold mb-4">{item.title}</h2>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <a href={item.link} className="text-red-600 font-semibold hover:underline">
                    Learn more about {item.title}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Program;
