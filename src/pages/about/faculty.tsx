import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Faculty: React.FC = () => {
  const leadershipTeam = [
    {
      name: 'Jenica Ryu, MD, AAHIVS',
      title: 'Program Director',
      pronouns: '(She/Her)',
      image: '/images/about/jenica-ryan.png', 
    },
    {
      name: 'LaShonda Spencer, MD, AAHIVS',
      title: 'Program Co-Director',
      pronouns: '(She/Her)',
      image: '',
    },
    {
      name: 'Revery Barnes, MD, AAHIVS',
      title: 'Associate Program Director',
      pronouns: '(She/Her)',
      image: '/images/about/revery-barnes.jpg',
    },
    {
      name: 'Christian Takayama, MD, AAHIVS',
      title: '​Associate Program Co-Director',
      subtitle: 'Principal Investigator, AIDS Education and Training Center (AETC) of USC Keck School of Medicine Department of Family Medicine',
      pronouns: '(He/Him)',
      image: '/images/about/christian-takayama.png', 
    },
    {
      name: 'Shanna Livermore, MPH',
      title: 'Director of Operations',
      subtitle: 'Director, AIDS Education and Training Center (AETC) of USC Keck School of Medicine, Department of Family Medicine',
      pronouns: '(She/Her)',
      image: '/images/about/shanna-livermore.png',
    },
    {
      name: 'Jerry Gates, PhD',
      title: 'Emeritus Professor of Family Medicine',
      pronouns: '(He/Him)',
      image: '/images/about/jerry-gates.png',
    },
  ];

  const clinicalTeam = [
    {
      name: 'Eddie Sattah, MD',
      title: 'Internal Medicine/ Infectious Disease Hepatitis C Co-Infection Lead',
      pronouns: '(He/Him)',
      image: '/images/about/eddie-sattah.jpeg',
    },
    {
      name: 'Jessica Schneider, MD, AAHIVS',
      title: 'Medicine-Pediatrics/ HIV Primary Care / Correctional Health',
      pronouns: '(She/Her)',
      image: '/images/about/jessica-schneider.jpeg',
    },
    {
      name: 'Gigi Simmons, MD',
      title: 'Family Medicine/ Addiction Medicine',
      pronouns: '(She/Her)',
      image: '/images/about/gigi-simmons.jpeg',
    },
    {
      name: 'Kevin Tangonan, DO, AAHIVS',
      title: 'Family Medicine/ HIV Primary Care',
      pronouns: '(He/Him)',
      image: '/images/about/kevin-tangonan.jpg',
    },
    {
      name: 'Hrishikesh Belani, MD, AAHIVS',
      title: '​​Internal Medicine/ HIV/ Addiction Medicine Director of Primary Care, LA County ACN',
      pronouns: '(He/Him)',
      image: '/images/about/hrishikesh-belani.jpeg',
    },
    {
      name: 'Becca Cohen, MD, MPH, AAHIVS',
      title: 'FFamily Medicine / HIV Primary Care',
      pronouns: '(She/Her)',
      image: '/images/about/becca-cohen.jpg',
    },
    {
      name: 'Katya Corado, MD',
      title: 'Infectious Disease/HIV Primary Care Director of Positive Care, LA County Ambulatory Care Network (ACN)',
      pronouns: '(She/Her)',
      image: '/images/about/katya-corado.jpeg',
    },
    {
      name: 'Katherine Loomis, MD',
      title: '​​Internal Medicine / Infectious Disease Clinical Instructor of Internal Medicine/ ID',
      pronouns: '(She/Her)',
      image: '/images/about/katherine-loomis.jpeg',
    },
    {
      name: 'Johan Clarke, MD, AAHIVS',
      title: 'HIV Primary Care / Gender Affirming Care / Addiction Medicine Clinical Instructor of Family Medicine/ HIV Primary Care',
      pronouns: '(They/Them)',
      image: '/images/about/johan-clarke.png',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Faculty<span className="text-red-600">.</span></h1>
        <p className="text-xl">Meet our core leadership and clinical faculty team.</p>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Leadership Team<span className="text-red-600">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leadershipTeam.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="italic text-gray-600">{member.title}</p>
              <p className="text-gray-600">{member.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Clinical Team<span className="text-red-600">.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {clinicalTeam.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-xl font-bold mt-4">{member.name}</h3>
              <p className="italic text-gray-600">{member.title}</p>
              <p className="text-gray-600">{member.pronouns}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Faculty;
