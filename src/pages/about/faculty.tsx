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
      image: '/path/to/image.jpg', // Update the path to your images
    },
    {
      name: 'LaShonda Spencer, MD, AAHIVS',
      title: 'Program Co-Director',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Revery Barnes, MD, AAHIVS',
      title: 'Associate Program Director',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
  ];

  const clinicalTeam = [
    {
      name: 'Eddie Sattah, MD',
      title: 'Internal Medicine/ Infectious Disease Hepatitis C Co-Infection Lead',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Jessica Schneider, MD, AAHIVS',
      title: 'Medicine-Pediatrics/ HIV Primary Care / Correctional Health',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Gigi Simmons, MD',
      title: 'Family Medicine/ Addiction Medicine',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
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
            <div key={index} className="text-left">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
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
            <div key={index} className="text-left">
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
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
