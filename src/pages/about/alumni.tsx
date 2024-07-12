import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Alumni: React.FC = () => {
  const alumni2024 = [
    {
      name: 'Johan Clarke, MD',
      location: 'Los Angeles, CA',
      pronouns: '(They/Them)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Jessica Farmer, MD',
      location: 'Los Angeles, CA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
  ];

  const alumni2023 = [
    {
      name: 'Earl Gerald (EG) Carlos, DO, AAHIVS',
      title: 'Family Medicine',
      location: 'Wayne State University, Detroit, MI',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Rebecca Lee, DO, AAHIVS',
      title: 'Internal Medicine / HIV Specialist',
      location: 'Los Angeles, CA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Oliver Refugio, MD, MPH, AAHIVS',
      title: 'Bartz-Altadonna Community Health Center',
      location: 'Lancaster, CA',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
  ];

  const alumni2022 = [
    {
      name: 'Tri Trang, MD, AAHIVS',
      title: 'Family Medicine / HIV Primary Care',
      location: 'Men’s Health Foundation, Los Angeles, CA',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Jonathan Kao, MD, AAHIVS',
      title: 'Clinical Instructor in Medicine-Pediatrics / LGBTQ Champion',
      location: 'University of California, Los Angeles, Los Angeles, CA',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
  ];

  const alumni2021 = [
    {
      name: 'Emma Allseits, MD, AAHIVS',
      title: 'Medical Director',
      location: 'Midway Specialty Care Center, Orlando, FL',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
  ];

  const alumni2020 = [
    {
      name: 'Kevin Tangonan, DO, AAHIVS',
      title: 'Site Medical Director',
      location: 'Gleicher/Chen Health Center, APLA Health',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Jessica Schneider, MD, AAHIVS',
      title: 'Physician Specialist',
      location: 'MLK Outpatient Center, Oasis Clinic, LA County Dept of Health Services',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Norris Tran Duc, MD, AAHIVS',
      title: 'Medical Director',
      location: 'AIDS Healthcare Foundation (AHF) Houston, TX',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Michael Stefanowicz, MD, AAHIVS',
      title: 'Clinical Lead for Sexual Health Programming',
      location: 'CommUnityCare Health, Austin, TX',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
  ];

  const alumni2019 = [
    {
      name: 'Jolie Leblanc, MD, AAHIVS',
      title: 'Assistant Clinical Professor of Family Medicine',
      location: 'LSU School of Medicine, New Orleans, LA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Rafael Chiquillo-Sosa, MD, AAHIVS',
      title: 'Addiction Medicine Physician',
      location: 'Kaiser Permanente, Oakland, CA',
      pronouns: '(He/Him)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Summer Drake, DO, AAHIVS',
      title: 'HIV Primary Care & Prevention Specialist',
      location: 'Nurx, Inc., Los Angeles, CA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
  ];

  const alumni2018 = [
    {
      name: 'Becca Cohen, MD, MPH, AAHIVS',
      title: 'Associate Medical Director',
      location: 'Los Angeles Department of Public Health, Division of HIV and STD Programs, Los Angeles, CA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Lauren Wolchok, MD, AAHIVS',
      title: 'HIV Clinic Director',
      location: 'Wesley Health Centers - JWCH Institute, Pasadena, CA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
    {
      name: 'Revery Barnes, MD, AAHIVS',
      title: 'HIV Clinic Director',
      location: 'South Los Angeles Health Center Group, LA County Department of Health Services, Associate Program Director, HIV Clinical Leadership Program, LA County DHS, Pasadena, CA',
      pronouns: '(She/Her)',
      image: '/path/to/image.jpg',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Alumni<span className="text-red-600">.</span></h1>
        <p className="text-xl">Our alumni have graduated into a variety of prestigious HIV leadership positions around the country.</p>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2024</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {alumni2024.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2023</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {alumni2023.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.title}</p>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2022</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {alumni2022.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.title}</p>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2021</span></h2>
        <div className="grid grid-cols-1 gap-8 mb-16">
          {alumni2021.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.title}</p>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2020</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {alumni2020.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.title}</p>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2019</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {alumni2019.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.title}</p>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2018</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {alumni2018.map((alumnus, index) => (
            <div key={index} className="text-left">
              <Image
                src={alumnus.image}
                alt={alumnus.name}
                width={200}
                height={200}
                className="mx-auto rounded-full"
              />
              <h3 className="text-xl font-bold mt-4">{alumnus.name}</h3>
              <p className="italic text-gray-600">{alumnus.title}</p>
              <p className="italic text-gray-600">{alumnus.location}</p>
              <p className="text-gray-600">{alumnus.pronouns}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-16">
          <blockquote className="italic text-xl">"The HIV Clinical Leadership Program has graduated dozens of other HIV Specialists since its inception in 2001 who are not pictured here. The alumni pictured on this page only represent the alumni since the program was reinvigorated in collaboration with DHS in 2016."</blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your_video_id"
              title="Dr. Revery Barnes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/your_video_id"
              title="Dr. Becca Cohen"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src="/path/to/street-medicine-la-times.jpg"
              alt="Street Medicine, LA Times"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Alumni;