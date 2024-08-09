import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Faculty: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Jenica Ryu, MD, AAHIVS',
      title: 'Program Director',
      pronouns: 'She/Her',
      image: '/images/about/jenica-ryan.png',
    },
    {
      name: 'LaShonda Spencer, MD, AAHIVS',
      title: 'Program Co-Director',
      pronouns: 'She/Her',
      image: '/images/about/lashonda-spencer.jpeg',
    },
    {
      name: 'Revery Barnes, MD, AAHIVS',
      title: 'Associate Program Director',
      pronouns: 'She/Her',
      image: '/images/about/revery-barnes.jpg',
    },
    {
      name: 'Christian Takayama, MD, AAHIVS',
      title: 'Associate Program Co-Director',
      subtitle: 'Principal Investigator, AIDS Education and Training Center (AETC), USC Keck School of Medicine',
      pronouns: 'He/Him',
      image: '/images/about/christian-takayama.png',
    },
    {
      name: 'Shanna Livermore, MPH',
      title: 'Director of Operations',
      subtitle: 'Director, AIDS Education and Training Center (AETC), USC Keck School of Medicine',
      pronouns: 'She/Her',
      image: '/images/about/shanna-livermore.png',
    },
    {
      name: 'Jerry Gates, PhD',
      title: 'Emeritus Professor of Family Medicine',
      pronouns: 'He/Him',
      image: '/images/about/jerry-gates.png',
    },
  ];

  const clinicalTeam = [
    {
      name: 'Eddie Sattah, MD',
      title: 'Internal Medicine / Infectious Disease',
      subtitle: 'Hepatitis C Co-Infection Lead',
      pronouns: 'He/Him',
      image: '/images/about/eddie-sattah.jpeg',
    },
    {
      name: 'Jessica Schneider, MD, AAHIVS',
      title: 'Medicine-Pediatrics',
      subtitle: 'HIV Primary Care / Correctional Health',
      pronouns: 'She/Her',
      image: '/images/about/jessica-schneider.jpeg',
    },
    {
      name: 'Gigi Simmons, MD',
      title: 'Family Medicine',
      subtitle: 'Addiction Medicine',
      pronouns: 'She/Her',
      image: '/images/about/gigi-simmons.jpeg',
    },
    {
      name: 'Kevin Tangonan, DO, AAHIVS',
      title: 'Family Medicine',
      subtitle: 'HIV Primary Care',
      pronouns: 'He/Him',
      image: '/images/about/kevin-tangonan.jpg',
    },
    {
      name: 'Hrishikesh Belani, MD, AAHIVS',
      title: 'Internal Medicine / HIV / Addiction Medicine',
      subtitle: 'Director of Primary Care, LA County ACN',
      pronouns: 'He/Him',
      image: '/images/about/hrishikesh-belani.jpeg',
    },
    {
      name: 'Becca Cohen, MD, MPH, AAHIVS',
      title: 'Family Medicine',
      subtitle: 'HIV Primary Care',
      pronouns: 'She/Her',
      image: '/images/about/becca-cohen.jpg',
    },
    {
      name: 'Katya Corado, MD',
      title: 'Infectious Disease',
      subtitle: 'Director of Positive Care, LA County ACN',
      pronouns: 'She/Her',
      image: '/images/about/katya-corado.jpeg',
    },
    {
      name: 'Katherine Loomis, MD',
      title: 'Internal Medicine / Infectious Disease',
      subtitle: 'Clinical Instructor, USC Keck School of Medicine',
      pronouns: 'She/Her',
      image: '/images/about/katherine-loomis.jpeg',
    },
    {
      name: 'Johan Clarke, MD, AAHIVS',
      title: 'HIV Primary Care / Gender Affirming Care',
      subtitle: 'Clinical Instructor of Family Medicine, USC Keck School of Medicine',
      pronouns: 'They/Them',
      image: '/images/about/johan-clarke.png',
    },
  ];

  return (
    <>
      <Head>
        <title>Faculty | HIV Fellowship Program</title>
        <meta name="description" content="Meet the distinguished faculty leading the HIV Fellowship Program, including our core leadership and clinical teams." />
        <meta name="keywords" content="HIV Fellowship, faculty, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main>
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4">
            Faculty<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our leadership and clinical faculty who guide the HIV Fellowship Program.
          </p>
        </section>
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Leadership Team<span className="text-red-600">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.title}, pronouns: ${member.pronouns}`}
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="italic text-gray-600">{member.title}</p>
                {member.subtitle && <p className="text-gray-600">{member.subtitle}</p>}
                <p className="text-gray-600">{member.pronouns}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12">
            Clinical Team<span className="text-red-600">.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {clinicalTeam.map((member, index) => (
              <div key={index} className="text-center">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.title}, pronouns: ${member.pronouns}`}
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-xl font-bold mt-4">{member.name}</h3>
                <p className="italic text-gray-600">{member.title}</p>
                {member.subtitle && <p className="text-gray-600">{member.subtitle}</p>}
                <p className="text-gray-600">{member.pronouns}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Faculty;
