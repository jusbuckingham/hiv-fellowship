import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Fellows: React.FC = () => {
  const fellows2026 = [
    {
      name: 'Kenya Bingham-Psalms, MD',
      pronouns: '(She/Her)',
      image: '/images/about/kenya-bingham-psalms.jpg',
      description: `
        Dr. Bingham-Psalms grew up in a military family, enriching her upbringing with cultural diversity. Bilingual in English and Spanish, she earned a B.A. in Spanish Language & Literature from UC Berkeley and graduated from the Latin American School of Medicine in Havana, Cuba. After supporting her family while studying for the USMLEs and completing her Family Medicine residency in rural Pennsylvania, she now focuses on HIV medicine with interests in medical missions, global health, healthcare disparities, and women's health. Her research centers on healthcare disparities in HIV, prevention, awareness, and education.
      `,
    },
    {
      name: 'Zac Badii, MD',
      pronouns: '(He/Him)',
      image: '/images/about/zac-badii.png',
      description: `
        Dr. Badii, from San Diego, CA, is dedicated to addressing sex disparities in HIV prevention and treatment. A fluent Spanish speaker, he brings a unique perspective with experience on both sides of the southern border. He graduated from USC's Family Medicine program and focuses on holistic care and social determinants of health through public health interventions. His research interests include identifying bias in medical education and promoting inclusivity, as well as addressing sex disparities in HIV prevention and treatment.
      `,
    },
  ];

  const fellows2025 = [
    {
      name: 'Licho Aguilera, MD',
      pronouns: '(He/They)',
      image: '/images/about/licho-cynthia-aguilera.jpg',
      description: `
        Dr. Aguilera, a Nawat and non-binary physician from Pico-Union, Los Angeles, graduated from ELAM in Havana, Cuba, and completed an internal medicine residency at Cedars-Sinai Medical Center. They focus on decolonial medicine for Black and Indigenous communities in Los Angeles. They enjoy vintage sewing, playing instruments, and motorcycles.
      `,
    },
    {
      name: 'Bianca Hill, MD, MPH',
      pronouns: '(She/Her)',
      image: '/images/about/bianca-hill.jpeg',
      description: `
        Dr. Hill, from New York City, majored in Biology at the City College of New York and holds an MPH in Epidemiology from SUNY Downstate Medical Center. She discovered her passion for HIV care during an internship on Rikers Island. She completed her medical education at Meharry Medical College and Family Medicine training at the Institute for Family Health - Harlem Residency. Dr. Hill has published PrEP research and focuses on HIV primary care, health equity, and advocacy.
      `,
    },
    {
      name: 'Mark Leiber, MD',
      pronouns: '(He/Him)',
      image: '/images/about/mark-leiber.jpeg',
      description: `
        Dr. Leiber, originally from Tampa, FL, studied Film Studies and Human Biology at Stanford. He worked as an Associate Producer for National Geographic Television and as a health systems coordinator in Malawi. He completed medical school at UC Irvine and residency at Johns Hopkins Bayview Medical Center. His medical career focuses on HIV and LGBTQ+ primary care.
      `,
    },
  ];

  return (
    <>
      <Head>
        <title>Fellows | HIV Fellowship Program</title>
        <meta name="description" content="Meet our current HIV Fellow cohort and learn about their backgrounds, interests, and research focuses." />
        <meta name="keywords" content="HIV Fellowship, fellows, healthcare, medicine, HIV specialists" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main>
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4">Fellows<span className="text-red-600">.</span></h1>
          <p className="text-xl max-w-3xl mx-auto">Meet our current HIV Fellow cohort.</p>
        </section>
        <section className="container mx-auto px-6 py-16 text-center">
          <h2 className="text-4xl font-bold mb-12">Class of <span className="text-red-600">2026</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {fellows2026.map((fellow, index) => (
              <div key={index} className="text-center">
                <Image
                  src={fellow.image}
                  alt={`Portrait of ${fellow.name}, pronouns: ${fellow.pronouns}`}
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-xl font-bold mt-4">{fellow.name}</h3>
                <p className="italic text-gray-600">{fellow.pronouns}</p>
                <p className="whitespace-pre-line mt-4">{fellow.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-4xl font-bold mb-12">Class of <span className="text-red-600">2025</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {fellows2025.map((fellow, index) => (
              <div key={index} className="text-center">
                <Image
                  src={fellow.image}
                  alt={`Portrait of ${fellow.name}, pronouns: ${fellow.pronouns}`}
                  width={200}
                  height={200}
                  className="mx-auto rounded"
                />
                <h3 className="text-xl font-bold mt-4">{fellow.name}</h3>
                <p className="italic text-gray-600">{fellow.pronouns}</p>
                <p className="whitespace-pre-line mt-4">{fellow.description}</p>
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
