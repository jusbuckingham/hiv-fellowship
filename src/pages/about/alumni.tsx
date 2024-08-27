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
        { name: 'Johan Clarke, MD', title: '', location: 'Los Angeles, CA', pronouns: 'They/Them', image: '/images/about/johan-clarke.png' },
        { name: 'Jessica Farmer, MD', title: '', location: 'Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/jessica-farmer.jpg' },
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
    // ... (other alumni data)
  ];

  return (
    <>
      <Head>
        <title>Alumni | HIV Fellowship Program</title>
        <meta name="description" content="Meet the alumni of the HIV Fellowship Program and learn about their contributions to healthcare." />
        <meta name="keywords" content="HIV Fellowship, alumni, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white text-center py-24 px-6">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold mb-4">
              Alumni<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl max-w-4xl mx-auto">
              Our alumni have advanced into prestigious HIV leadership roles nationwide.
            </p>
          </div>
        </section>

        {/* Alumni Section */}
        <section className="container mx-auto px-6 py-24">
          {alumniData.map((alumniClass, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-4xl font-bold mb-10 text-center">
                Class of <span className="text-red-600">{alumniClass.year}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {alumniClass.members.map((alumnus, index) => (
                  <div key={index} className="text-center transform transition duration-500 hover:scale-105">
                    <Image
                      src={alumnus.image}
                      alt={`Portrait of ${alumnus.name}, ${alumnus.title || ''} located in ${alumnus.location}, pronouns: ${alumnus.pronouns}`}
                      width={200}
                      height={200}
                      className="mx-auto rounded-full shadow-lg"
                    />
                    <h3 className="text-xl font-semibold mt-4">{alumnus.name}</h3>
                    {alumnus.title && <p className="italic text-gray-700">{alumnus.title}</p>}
                    <p className="text-gray-700">{alumnus.location}</p>
                    <p className="text-gray-700">{alumnus.pronouns}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Testimonial Section */}
          <div className="bg-gray-100 py-12 rounded-lg shadow-md text-center">
            <blockquote className="italic text-xl max-w-3xl mx-auto text-gray-800">
              "The HIV Clinical Leadership Program has graduated many HIV Specialists since its inception in 2001. The alumni featured here represent those since the program’s collaboration with DHS in 2016."
            </blockquote>
          </div>

          {/* Video Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96"
                src="https://www.youtube.com/embed/T6238-kxM3o?si=Ii2ZN6AATs7CFBh9"
                title="Dr. Revery Barnes"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Video: Dr. Revery Barnes"
              ></iframe>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
              <iframe
                className="w-full h-56 sm:h-64 md:h-80 lg:h-96"
                src="https://www.youtube.com/embed/ssJDOFueZDA?si=zn017rjR0D320Prb"
                title="Dr. Becca Cohen"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                aria-label="Video: Dr. Becca Cohen"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Alumni;
