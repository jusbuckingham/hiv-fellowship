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
        {
          name: 'Johan Clarke, MD',
          title: '',
          location: 'Los Angeles, CA',
          pronouns: 'They/Them',
          image: '/images/about/johan-clarke.png',
        },
        {
          name: 'Jessica Farmer, MD',
          title: '',
          location: 'Los Angeles, CA',
          pronouns: 'She/Her',
          image: '/images/about/jessica-farmer.jpg',
        },
      ],
    },
    {
      year: 2023,
      members: [
        {
          name: 'Earl Gerald (EG) Carlos, DO, AAHIVS',
          title: 'Family Medicine',
          location: 'Wayne State University, Detroit, MI',
          pronouns: 'He/Him',
          image: '/images/about/earl-gerald.jpeg',
        },
        {
          name: 'Rebecca Lee, DO, AAHIVS',
          title: 'Internal Medicine / HIV Specialist',
          location: 'Los Angeles, CA',
          pronouns: 'She/Her',
          image: '/images/about/rebecca-lee.jpeg',
        },
        {
          name: 'Oliver Refugio, MD, MPH, AAHIVS',
          title: 'Bartz-Altadonna Community Health Center',
          location: 'Lancaster, CA',
          pronouns: 'He/Him',
          image: '/images/about/oliver-refugio.jpeg',
        },
      ],
    },
    {
      year: 2022,
      members: [
        {
          name: 'Tri Trang, MD, AAHIVS',
          title: 'Family Medicine / HIV Primary Care',
          location: 'Mens Health Foundation Los Angeles, CA',
          pronouns: 'He/Him',
          image: '/images/about/tri-trang.jpeg',
        },
        {
          name: 'Jonathan Kao, MD, AAHIVS',
          title: 'Clinical Instructor in ​Medicine-Pediatrics / LGBTQ Champion',
          location: 'UCLA Los Angeles, CA',
          pronouns: 'She/Her',
          image: '/images/about/jonathan-koa.jpeg',
        },
      ],
    },
    {
      year: 2021,
      members: [
        {
          name: 'Emma Allseits, MD, AAHIVS',
          title: 'Medical Director',
          location: 'Midway Specialty Care Center Orlando, FL',
          pronouns: 'She/Her',
          image: '/images/about/emma-allseits.jpeg',
        }
      ],
    },
    {
      year: 2020,
      members: [
        {
          name: 'Kevin Tangonan, DO, AAHIVS',
          title: 'Site Medical Director',
          location: 'Gleicher/Chen Health Center APLA Health',
          pronouns: 'He/Him',
          image: '/images/about/kevin-tangonan.jpg',
        },
        {
          name: 'Jessica Schneider, MD, AAHIVS',
          title: 'Physician Specialist',
          location: 'MLK Outpatient Center, Oasis Clinic LA County Dept of Health Services',
          pronouns: 'She/Her',
          image: '/images/about/jessica-schneider.jpeg',
        },
        {
          name: '​Norris Tran Duc, MD, AAHIVS',
          title: 'Medical Director',
          location: 'AIDS Healthcare Foundation (AHF) Houston, TX',
          pronouns: 'He/Him',
          image: '/images/about/norris-tran-duc.jpeg',
        },
        {
          name: 'Michael Stefanowicz, MD, AAHIVS',
          title: 'Clinical Lead for Sexual Health Programming',
          location: 'CommUnityCare Health Austin, TX',
          pronouns: 'He/Him',
          image: '/images/about/michael-stefanowicz.jpeg',
        },
      ],
    },
    {
      year: 2019,
      members: [
        {
          name: 'Jolie Leblanc, MD, AAHIVS',
          title: '​Assistant Clinical Professor of Family Medicine',
          location: 'LSU School of Medicine ​New Orleans, LA',
          pronouns: 'She/Her',
          image: '/images/about/jolie-leblanc.jpeg',
        },
        {
          name: 'Rafael Chiquillo-Sosa, MD, AAHIVS',
          title: '​Addiction Medicine Physician',
          location: 'Kaiser Permanente Oakland, CA',
          pronouns: 'He/Him',
          image: '/images/about/rafael-chiquillo-sosa.jpeg',
        },
        {
          name: 'Summer Drake, DO, AAHIVS',
          title: 'HIV Primary Care & Prevention Specialist',
          location: 'Nurx, Inc ​Los Angeles, CA',
          pronouns: 'She/Her',
          image: '/images/about/summer-drake.jpeg',
        },
      ],
    },
    {
      year: 2018,
      members: [
        {
          name: 'Becca Cohen, MD, MPH, AAHIVS',
          title: '​Associate Medical Director',
          location: 'Los Angeles Department of Public Health Division of HIV and STD Programs Los Angeles',
          pronouns: 'She/Her',
          image: '/images/about/becca-cohen.jpg',
        },
        {
          name: 'Lauren Wolchok, MD, AAHIVS',
          title: '​HIV Clinic Director',
          location: 'Wesley Health Centers - JWCH Institute Pasadena, CA',
          pronouns: 'She/Her',
          image: '/images/about/lauren-wolchok.jpeg',
        },
        {
          name: 'Revery Barnes, MD, AAHIVS',
          title: '​HIV Clinic Director',
          location: 'South Los Angeles Health Center Group LA County Department of Health Services',
          pronouns: 'She/Her',
          image: '/images/about/revery-barnes.jpg',
        },
      ],
    },
  ];

  return (
    <>
      <Head>
        <title>Alumni | HIV Fellowship Program</title>
        <meta
          name="description"
          content="Meet the alumni of the HIV Fellowship Program and learn about their contributions to healthcare."
        />
      </Head>

      <Navbar />

      <main className="space-y-24">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-24">
          <h1 className="text-5xl font-extrabold mb-4">
            Alumni<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto">
            Our alumni have advanced into prestigious HIV leadership roles nationwide.
          </p>
        </section>

        {/* Alumni Classes */}
        <section className="container mx-auto px-6 py-24">
          {alumniData.map((alumniClass) => (
            <div key={alumniClass.year} className="mb-16">
              <h2 className="text-4xl font-bold mb-10 text-center">
                Class of <span className="text-red-600">{alumniClass.year}</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {alumniClass.members.map((alumnus) => (
                  <div
                    key={alumnus.name}
                    className="text-center transition duration-500 hover:scale-105"
                  >
                    <Image
                      src={alumnus.image}
                      alt={alumnus.name}
                      width={200}
                      height={200}
                      className="mx-auto rounded-full shadow-lg"
                    />
                    <h3 className="text-xl font-semibold mt-4">{alumnus.name}</h3>
                    {alumnus.title && (
                      <p className="italic text-gray-700">{alumnus.title}</p>
                    )}
                    <p className="text-gray-700">{alumnus.location}</p>
                    <p className="text-gray-700">{alumnus.pronouns}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Quote Section */}
        <section className="bg-gray-100 py-12 text-center rounded-lg shadow-md">
          <blockquote className="italic text-xl max-w-3xl mx-auto text-gray-800">
            &ldquo;The HIV Clinical Leadership Program has graduated many HIV Specialists since its
            inception in 2001. The alumni featured here represent those since the program&rsquo;s
            collaboration with DHS in 2016.&rdquo;
          </blockquote>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Alumni;