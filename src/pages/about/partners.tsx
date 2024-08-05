import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const partners = [
  {
    name: 'Los Angeles County Department of Health Services',
    description: 'The HIV Clinical Leadership Program is managed by the Los Angeles County Department of Health Services (DHS). DHS ensures access to high-quality, patient-centered, cost-effective health care for Los Angeles County residents. It is the second-largest municipal health system in the nation, caring for 670,000 unique patients through its integrated system of 19 health centers, four hospitals, and an expanded network of community partner clinics.',
    logo: '/images/about/health-services-lac.png',
  },
  {
    name: 'Keck School of Medicine Department of Family Medicine',
    description: 'In 2000, the Keck School of Medicine Department of Family Medicine developed one of the first HIV fellowship training programs in the U.S. This 12-month fellowship focused on HIV medicine, primary care, and underserved communities. The program included experiences in various community and academic settings. In 2010, the only HIV Corrections fellowship in the U.S. was established in partnership with the LA County Sheriff’s Department. All former fellows are providing HIV care in underserved communities and many have advanced into leadership positions.',
    logo: '/images/about/kecklogo.jpeg',
  },
  {
    name: 'AIDS Education and Training Center at USC',
    description: 'Established in 1988, the Los Angeles Area AIDS Education and Training Center at USC aims to increase the number of healthcare providers educated and motivated to manage and prevent HIV. The AETC at USC’s curriculum includes programs on Correctional and Homeless HIV medicine, HIV testing in various settings, and Pre-Exposure Prophylaxis (PrEP) for HIV prevention.',
    logo: '/images/about/aetc-pacific.jpg',
  },
  {
    name: 'UCLA National Clinician Scholars Program',
    description: 'UCLA National Clinician Scholars Program (NCSP) addresses disparities and quality of care in healthcare. Inspired by the Robert Wood Johnson Clinical Scholars Program, NCSP builds on this legacy with early career physicians and post-doctoral nurses participating in a two-year program that places them in community settings to conduct research benefiting Southern California residents.',
    logo: '/images/about/ucla-ncsp.png',
  },
  {
    name: 'ViiV Healthcare',
    description: 'ViiV Healthcare, established by GlaxoSmithKline and Pfizer, is dedicated to delivering advances in treatment and care for people living with HIV. ViiV Healthcare supports the DHS HIV Clinical Leadership Program with financial resources. The company aims to take a deeper interest in HIV/AIDS and support communities affected by HIV.',
    logo: '/images/about/viivlogo.png',
  },
  {
    name: 'The Lundquist Institute for Biomedical Innovation',
    description: 'The Lundquist Institute for Biomedical Innovation is an independent non-profit biomedical research organization founded in 1952. It supports the LA County DHS Clinical Leadership Program administratively and is located on the LA County DHS Harbor-UCLA Medical Center campus. The Institute has over 120 principal investigators working on 600 research studies funded by various sources.',
    logo: '/images/about/lundquist.png',
  },
];

const Partners: React.FC = () => {
  return (
    <>
      <Head>
        <title>Partners | HIV Clinical Leadership Program</title>
        <meta name="description" content="Discover our collaborative partnerships that support the HIV Clinical Leadership Program." />
        <meta name="keywords" content="HIV Clinical Leadership Program, partners, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Partners<span className="text-red-600">.</span>
        </h1>
        <p className="text-xl max-w-3xl mx-auto">Find out more about our collaborative partnerships.</p>
      </section>
      <section className="max-w-7xl mx-auto py-24 px-6 lg:px-8"> {/* Increased padding here */}
        {partners.map((partner, index) => (
          <div key={index} className="mb-16 text-center">
            <Image src={partner.logo} alt={`${partner.name} Logo`} width={150} height={150} className="mx-auto mb-4"/>
            <p className="text-2xl font-bold">{partner.name}</p>
            <p className="text-gray-700 mt-4">{partner.description}</p>
          </div>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mg3r-IR4Eyo?si=ZPEYby8UXtnP-xVV"
              title="Partner Video 1"
              frameBorder="0"
              allowFullScreen
              aria-label="Video about one of our partners"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NOfaV2uoZPg?si=hbmZFjXPWutz4DKx"
              title="Partner Video 2"
              frameBorder="0"
              allowFullScreen
              aria-label="Video about one of our partners"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Partners;
