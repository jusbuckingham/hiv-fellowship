import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Fellows: React.FC = () => {
  const fellows2026 = [
    {
      name: 'Kenya Bingham-Psalms, MD',
      pronouns: 'She/Her',
      image: '/images/about/kenya-bingham-psalms.jpg',
      description: `
        Dr. Bingham-Psalms, bilingual in English and Spanish, has a diverse background, including a Family Medicine residency in rural Pennsylvania. She focuses on HIV medicine and healthcare disparities, with research on HIV prevention and education.
      `,
    },
    {
      name: 'Zac Badii, MD',
      pronouns: 'He/Him',
      image: '/images/about/zac-badii.png',
      description: `
        Dr. Badii, from San Diego, CA, addresses sex disparities in HIV care. Fluent in Spanish, he completed his Family Medicine training at USC and is interested in holistic care, public health, and bias in medical education.
      `,
    },
  ];

  const fellows2025 = [
    {
      name: 'Licho Aguilera, MD',
      pronouns: 'He/They',
      image: '/images/about/licho-cynthia-aguilera.jpg',
      description: `
       Dr. Licho Aguilera is a Nawat and non-binary physician from Pico-Union, Los Angeles. They are a proud graduate of the Escuela Latinoamericana de Medicina in Havana, Cuba and completed their internal medicine residency at Cedar-Sinai medical center. They are now a certified HIV Specialist and are completing the HIV Clinical Leadership Program at Los Angeles General Medical Center. Their career focus is on decolonial medicine for Black and Indigenous communities of Los Angeles. They are also an accomplished watercolor artist and competitive chess player.      `,
    },
    {
      name: 'Bianca Hill, MD, MPH',
      pronouns: 'She/Her',
      image: '/images/about/bianca-hill.jpeg',
      description: `
        Dr. Hill, from NYC, holds a B.A. in Biology and an MPH in Epidemiology. Her interest in HIV care began at Rikers Island. She completed her Family Medicine residency at the Institute for Family Health and focuses on HIV care and health equity.
      `,
    },
    {
      name: 'Mark Leiber, MD',
      pronouns: 'He/Him',
      image: '/images/about/mark-leiber.jpeg',
      description: `
        Dr. Leiber, from Tampa, FL, has a background in Film Studies and worked in Malawi before medical school. He completed his residency at Johns Hopkins and specializes in HIV and LGBTQ+ primary care.
      `,
    },
  ];

  return (
    <>
      <Head>
        <title>Fellows | HIV Fellowship Program</title>
        <meta name="description" content="Meet our current HIV Fellowship cohort and learn about their backgrounds, interests, and research focuses." />
        <meta name="keywords" content="HIV Fellowship, fellows, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-20 px-6 relative">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Fellows<span className="text-red-600">.</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto leading-relaxed">
              Meet our current HIV Fellowship cohort.
            </p>
          </div>
        </section>

        {/* Fellows Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-12 leading-tight">
            Class of <span className="text-red-600">2026</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {fellows2026.map((fellow, index) => (
              <div key={index} className="text-center transform transition duration-500 hover:scale-105">
                <Image
                  src={fellow.image}
                  alt={`Portrait of ${fellow.name}, pronouns: ${fellow.pronouns}`}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full shadow-lg"
                />
                <h3 className="text-2xl font-semibold mt-6">{fellow.name}</h3>
                <p className="italic text-gray-500 text-lg">{fellow.pronouns}</p>
                <p className="mt-4 text-gray-800 leading-relaxed text-lg">{fellow.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12 leading-tight">
            Class of <span className="text-red-600">2025</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24"> {/* Added margin-bottom */}
            {fellows2025.map((fellow, index) => (
              <div key={index} className="text-center transform transition duration-500 hover:scale-105">
                <Image
                  src={fellow.image}
                  alt={`Portrait of ${fellow.name}, pronouns: ${fellow.pronouns}`}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full shadow-lg"
                />
                <h3 className="text-2xl font-semibold mt-6">{fellow.name}</h3>
                <p className="italic text-gray-500 text-lg">{fellow.pronouns}</p>
                <p className="mt-4 text-gray-800 leading-relaxed text-lg">{fellow.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Fellows;
