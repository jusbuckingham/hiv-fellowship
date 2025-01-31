import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Alumni: React.FC = () => {
  const alumniData = [
    {
      year: 2024,
      members: [
        { name: 'Johan Clarke, MD', title: '' ,location: 'Los Angeles, CA', pronouns: 'They/Them', image: '/images/about/johan-clarke.png' },
        { name: 'Jessica Farmer, MD', title: '' ,location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/jessica-farmer.jpg' },
      ],
    },
    {
      year: 2023,
      members: [
        { name: 'Earl Gerald (EG) Carlos, DO, AAHIVS', title: 'Family Medicine', location: 'Wayne State University, Detroit, MI', pronouns: 'He/Him', image: '/images/about/earl-gerald.jpeg' },
        { name: 'Rebecca Lee, DO, AAHIVS', title: 'Internal Medicine / HIV Specialist', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/rebecca-lee.jpeg' },
        { name: 'Oliver Refugio, MD, MPH, AAHIVS', title: 'Bartz-Altadonna Community Health Center', location: 'Lancaster, CA', pronouns: 'He/Him', image: '/images/about/oliver-refugio.jpeg' },
      ],
    },
    {
      year: 2022,
      members: [
        { name: 'Earl Gerald (EG) Carlos, DO, AAHIVS', title: 'Family Medicine', location: 'Wayne State University, Detroit, MI', pronouns: 'He/Him', image: '/images/about/earl-gerald.jpeg' },
        { name: 'Rebecca Lee, DO, AAHIVS', title: 'Internal Medicine / HIV Specialist', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/rebecca-lee.jpeg' },
        { name: 'Oliver Refugio, MD, MPH, AAHIVS', title: 'Bartz-Altadonna Community Health Center', location: 'Lancaster, CA', pronouns: 'He/Him', image: '/images/about/oliver-refugio.jpeg' },
      ],
    },
    {
      year: 2021,
      members: [
        { name: 'Earl Gerald (EG) Carlos, DO, AAHIVS', title: 'Family Medicine', location: 'Wayne State University, Detroit, MI', pronouns: 'He/Him', image: '/images/about/earl-gerald.jpeg' },
        { name: 'Rebecca Lee, DO, AAHIVS', title: 'Internal Medicine / HIV Specialist', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/rebecca-lee.jpeg' },
        { name: 'Oliver Refugio, MD, MPH, AAHIVS', title: 'Bartz-Altadonna Community Health Center', location: 'Lancaster, CA', pronouns: 'He/Him', image: '/images/about/oliver-refugio.jpeg' },
      ],
    },
    {
      year: 2020,
      members: [
        { name: 'Earl Gerald (EG) Carlos, DO, AAHIVS', title: 'Family Medicine', location: 'Wayne State University, Detroit, MI', pronouns: 'He/Him', image: '/images/about/earl-gerald.jpeg' },
        { name: 'Rebecca Lee, DO, AAHIVS', title: 'Internal Medicine / HIV Specialist', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/rebecca-lee.jpeg' },
        { name: 'Oliver Refugio, MD, MPH, AAHIVS', title: 'Bartz-Altadonna Community Health Center', location: 'Lancaster, CA', pronouns: 'He/Him', image: '/images/about/oliver-refugio.jpeg' },
      ],
    },
    {
      year: 2019,
      members: [
        { name: 'Earl Gerald (EG) Carlos, DO, AAHIVS', title: 'Family Medicine', location: 'Wayne State University, Detroit, MI', pronouns: 'He/Him', image: '/images/about/earl-gerald.jpeg' },
        { name: 'Rebecca Lee, DO, AAHIVS', title: 'Internal Medicine / HIV Specialist', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/rebecca-lee.jpeg' },
        { name: 'Oliver Refugio, MD, MPH, AAHIVS', title: 'Bartz-Altadonna Community Health Center', location: 'Lancaster, CA', pronouns: 'He/Him', image: '/images/about/oliver-refugio.jpeg' },
      ],
    },
    {
      year: 2018,
      members: [
        { name: 'Earl Gerald (EG) Carlos, DO, AAHIVS', title: 'Family Medicine', location: 'Wayne State University, Detroit, MI', pronouns: 'He/Him', image: '/images/about/earl-gerald.jpeg' },
        { name: 'Rebecca Lee, DO, AAHIVS', title: 'Internal Medicine / HIV Specialist', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/rebecca-lee.jpeg' },
        { name: 'Oliver Refugio, MD, MPH, AAHIVS', title: 'Bartz-Altadonna Community Health Center', location: 'Lancaster, CA', pronouns: 'He/Him', image: '/images/about/oliver-refugio.jpeg' },
      ],
    },  
  ];

  return (
    <>
      <Head>
        <title>Alumni | HIV Fellowship Program</title>
        <meta name="description" content="Meet the alumni of the HIV Fellowship Program and learn about their contributions to healthcare." />
      </Head>
      
      <Navbar />
      
      <main className="space-y-24">
        <section className="bg-gray-900 text-white text-center py-24">
          <h1 className="text-5xl font-extrabold mb-4">Alumni<span className="text-red-600">.</span></h1>
          <p className="text-xl max-w-4xl mx-auto">Our alumni have advanced into prestigious HIV leadership roles nationwide.</p>
        </section>

        <section className="container mx-auto px-6 py-24">
          {alumniData.map((alumniClass) => (
            <div key={alumniClass.year} className="mb-16">
              <h2 className="text-4xl font-bold mb-10 text-center">Class of <span className="text-red-600">{alumniClass.year}</span></h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {alumniClass.members.map((alumnus) => (
                  <div key={alumnus.name} className="text-center transition duration-500 hover:scale-105">
                    <Image src={alumnus.image} alt={alumnus.name} width={200} height={200} className="mx-auto rounded-full shadow-lg" />
                    <h3 className="text-xl font-semibold mt-4">{alumnus.name}</h3>
                    {alumnus.title && <p className="italic text-gray-700">{alumnus.title}</p>}
                    <p className="text-gray-700">{alumnus.location}</p>
                    <p className="text-gray-700">{alumnus.pronouns}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-gray-100 py-12 text-center rounded-lg shadow-md">
          <blockquote className="italic text-xl max-w-3xl mx-auto text-gray-800">
            "The HIV Clinical Leadership Program has graduated many HIV Specialists since its inception in 2001. The alumni featured here represent those since the program’s collaboration with DHS in 2016."
          </blockquote>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Alumni;
