import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const partners = [
  {
    name: 'Los Angeles County Department of Health Services',
    description:
      'The Los Angeles County Department of Health Services (DHS) oversees the HIV Clinical Leadership Program, ensuring access to high-quality, patient-centered, and cost-effective healthcare for Los Angeles County residents. As the second-largest municipal health system in the nation, DHS serves 670,000 patients through an integrated system of 19 health centers, four hospitals, and a network of community partner clinics.',
    logo: '/images/about/health-services-lac.png',
  },
  {
    name: 'Keck School of Medicine Department of Family Medicine',
    description:
      'The Keck School of Medicine’s Department of Family Medicine pioneered one of the first HIV fellowship programs in the U.S. in 2000. This 12-month fellowship focused on HIV medicine, primary care, and serving underserved communities. The program expanded in 2010 with the only HIV Corrections fellowship in the U.S., developed in partnership with the LA County Sheriff’s Department. Alumni of the program continue to provide HIV care in underserved areas and hold leadership positions.',
    logo: '/images/about/kecklogo.jpeg',
  },
  {
    name: 'AIDS Education and Training Center at USC',
    description:
      'Established in 1988, the Los Angeles Area AIDS Education and Training Center at USC focuses on increasing the number of healthcare providers skilled in managing and preventing HIV. The AETC offers programs on Correctional and Homeless HIV medicine, HIV testing, and Pre-Exposure Prophylaxis (PrEP) for HIV prevention.',
    logo: '/images/about/aetc-pacific.jpg',
  },
  {
    name: 'UCLA National Clinician Scholars Program',
    description:
      'The UCLA National Clinician Scholars Program (NCSP) tackles healthcare disparities and quality of care. Building on the legacy of the Robert Wood Johnson Clinical Scholars Program, the NCSP places early-career physicians and post-doctoral nurses in community settings for two years to conduct research that benefits Southern California residents.',
    logo: '/images/about/ucla-ncsp.png',
  },
  {
    name: 'ViiV Healthcare',
    description:
      'ViiV Healthcare, established by GlaxoSmithKline and Pfizer, is dedicated to advancing treatment and care for people living with HIV. ViiV Healthcare supports the DHS HIV Clinical Leadership Program with financial resources, showing a strong commitment to addressing HIV/AIDS and supporting affected communities.',
    logo: '/images/about/viivlogo.png',
  },
  {
    name: 'The Lundquist Institute for Biomedical Innovation',
    description:
      'The Lundquist Institute for Biomedical Innovation, an independent non-profit biomedical research organization founded in 1952, supports the LA County DHS Clinical Leadership Program administratively. Located on the LA County DHS Harbor-UCLA Medical Center campus, the Institute hosts over 120 principal investigators working on 600 research studies funded by various sources.',
    logo: '/images/about/lundquist.png',
  },
];

const Partners: React.FC = () => {
  return (
    <>
      <Head>
        <title>Partners | HIV Clinical Leadership Program</title>
        <meta name="description" content="Explore the collaborative partnerships that support the HIV Clinical Leadership Program." />
        <meta name="keywords" content="HIV Clinical Leadership Program, partners, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-20 px-6">
          <h1 className="text-5xl font-extrabold mb-4">
            Partners<span className="text-red-600">.</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto">Discover our collaborative partnerships.</p>
        </section>

        {/* Partners Section */}
        <section className="max-w-7xl mx-auto py-24 px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {partners.map((partner, index) => (
              <div key={index} className="text-center transform transition duration-500 hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} Logo`}
                  width={150}
                  height={150}
                  className="mx-auto mb-6 rounded-lg shadow-md"
                />
                <p className="text-2xl font-bold mb-4">{partner.name}</p>
                <p className="text-gray-800 leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-gray-100 py-24">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="relative w-full overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <iframe
                className="w-full h-64 sm:h-80 md:h-96"
                src="https://www.youtube.com/embed/mg3r-IR4Eyo?si=ZPEYby8UXtnP-xVV"
                title="Partner Video 1"
                frameBorder="0"
                allowFullScreen
                aria-label="Video about one of our partners"
              />
            </div>
            <div className="relative w-full overflow-hidden rounded-lg shadow-md transform transition duration-500 hover:scale-105">
              <iframe
                className="w-full h-64 sm:h-80 md:h-96"
                src="https://www.youtube.com/embed/NOfaV2uoZPg?si=hbmZFjXPWutz4DKx"
                title="Partner Video 2"
                frameBorder="0"
                allowFullScreen
                aria-label="Video about one of our partners"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Partners;
