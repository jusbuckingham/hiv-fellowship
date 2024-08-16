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
    {
      year: 2022,
      members: [
        { name: 'Tri Trang, MD, AAHIVS', title: 'Family Medicine / HIV Primary Care', location: 'Men’s Health Foundation, Los Angeles, CA', pronouns: 'He/Him', image: '/images/about/tri-trang.jpeg' },
        { name: 'Jonathan Kao, MD, AAHIVS', title: 'Clinical Instructor in Medicine-Pediatrics / LGBTQ Champion', location: 'University of California, Los Angeles, Los Angeles, CA', pronouns: 'He/Him', image: '/images/about/jonathan-koa.jpeg' },
      ],
    },
    {
      year: 2021,
      members: [
        { name: 'Emma Allseits, MD, AAHIVS', title: 'Medical Director', location: 'Midway Specialty Care Center, Orlando, FL', pronouns: 'She/Her', image: '/images/about/emma-allseits.jpeg' },
      ],
    },
    {
      year: 2020,
      members: [
        { name: 'Kevin Tangonan, DO, AAHIVS', title: 'Site Medical Director', location: 'Gleicher/Chen Health Center, APLA Health', pronouns: 'He/Him', image: '/images/about/kevin-tangonan.jpg' },
        { name: 'Jessica Schneider, MD, AAHIVS', title: 'Physician Specialist', location: 'MLK Outpatient Center, Oasis Clinic, LA County Dept of Health Services', pronouns: 'She/Her', image: '/images/about/jessica-schneider.jpeg' },
        { name: 'Norris Tran Duc, MD, AAHIVS', title: 'Medical Director', location: 'AIDS Healthcare Foundation (AHF), Houston, TX', pronouns: 'He/Him', image: '/images/about/norris-tran-duc.jpeg' },
        { name: 'Michael Stefanowicz, MD, AAHIVS', title: 'Clinical Lead for Sexual Health Programming', location: 'CommUnityCare Health, Austin, TX', pronouns: 'He/Him', image: '/images/about/michael-stefanowicz.jpeg' },
      ],
    },
    {
      year: 2019,
      members: [
        { name: 'Jolie Leblanc, MD, AAHIVS', title: 'Assistant Clinical Professor of Family Medicine', location: 'LSU School of Medicine, New Orleans, LA', pronouns: 'She/Her', image: '/images/about/jolie-leblanc.jpeg' },
        { name: 'Rafael Chiquillo-Sosa, MD, AAHIVS', title: 'Addiction Medicine Physician', location: 'Kaiser Permanente, Oakland, CA', pronouns: 'He/Him', image: '/images/about/rafael-chiquillo-sosa.jpeg' },
        { name: 'Summer Drake, DO, AAHIVS', title: 'HIV Primary Care & Prevention Specialist', location: 'Nurx, Inc., Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/summer-drake.jpeg' },
      ],
    },
    {
      year: 2018,
      members: [
        { name: 'Becca Cohen, MD, MPH, AAHIVS', title: 'Associate Medical Director', location: 'Los Angeles Department of Public Health, Division of HIV and STD Programs, Los Angeles, CA', pronouns: 'She/Her', image: '/images/about/becca-cohen.jpg' },
        { name: 'Lauren Wolchok, MD, AAHIVS', title: 'HIV Clinic Director', location: 'Wesley Health Centers - JWCH Institute, Pasadena, CA', pronouns: 'She/Her', image: '/images/about/lauren-wolchok.jpeg' },
        { name: 'Revery Barnes, MD, AAHIVS', title: 'HIV Clinic Director, Associate Program Director', location: 'South Los Angeles Health Center Group, LA County DHS, Pasadena, CA', pronouns: 'She/Her', image: '/images/about/revery-barnes.jpg' },
      ],
    },
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
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4">
            Alumni<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our alumni have advanced into prestigious HIV leadership roles nationwide.
          </p>
        </section>
        <section className="container mx-auto px-6 py-16">
          {alumniData.map((alumniClass, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-4xl font-bold mb-8">
                Class of <span className="text-red-600">{alumniClass.year}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {alumniClass.members.map((alumnus, index) => (
                  <div key={index} className="text-center">
                    <Image
                      src={alumnus.image}
                      alt={`Portrait of ${alumnus.name}, ${alumnus.title || ''} located in ${alumnus.location}, pronouns: ${alumnus.pronouns}`}
                      width={200}
                      height={200}
                      className="mx-auto rounded"
                    />
                    <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
                    {alumnus.title && <p className="italic text-gray-600">{alumnus.title}</p>}
                    <p className="italic text-gray-600">{alumnus.location}</p>
                    <p className="text-gray-600">{alumnus.pronouns}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center mb-16">
            <blockquote className="italic text-xl max-w-3xl mx-auto">
              "The HIV Clinical Leadership Program has graduated many HIV Specialists since its inception in 2001. The alumni featured here represent those since the program’s collaboration with DHS in 2016."
            </blockquote>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="relative w-full overflow-hidden rounded-lg">
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
            <div className="relative w-full overflow-hidden rounded-lg">
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
