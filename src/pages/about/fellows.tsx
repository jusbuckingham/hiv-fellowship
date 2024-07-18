import React from 'react';
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
        Growing up in a military family, Dr. Bingham-Psalms' upbringing was enriched with cultural diversity. She is bilingual in English and Spanish, a passion she pursued from a young age. As a first-generation college graduate, she earned a B.A. in Spanish Language & Literature from the University of California, Berkeley, and was among the first U.S. graduates from the Latin American School of Medicine in Havana, Cuba.
        
        After medical school, she supported her family while studying for the USMLEs and completed her Family Medicine residency in rural Pennsylvania, all while raising three children. She shares her journey to inspire others to achieve their dreams, even through unconventional paths. She is now excited to further her medical expertise in HIV medicine, with special interests in medical missions, global health, healthcare disparities, and women's health.
        
        Her research interests include healthcare disparities in HIV, HIV prevention, awareness, and education.
      `,
    },
    {
      name: 'Zac Badii, MD',
      pronouns: '(He/Him)',
      image: '/images/about/zac-badii.png',
      description: `
        Dr. Badii, a native of San Diego, California, was raised by immigrant parents and is passionately committed to addressing sex disparities in HIV prevention and treatment. As a fluent Spanish speaker with experience living, working, and studying on both sides of the southern border, Dr. Badii brings a unique perspective to the field. Having graduated from the Family Medicine program at the University of Southern California, Dr. Badii is dedicated to providing holistic and comprehensive care. This commitment extends to addressing social determinants of health through evidence-based public health interventions, reflecting a deep understanding of the multifaceted nature of healthcare and a desire to make a positive impact.
        
        Research Interests: My research interests revolve around identifying and addressing bias in medical school and residency HIV curriculums, with a focus on promoting inclusivity and accuracy in educational materials. Additionally, I am passionate about investigating and mitigating sex disparities in HIV prevention and treatment strategies to ensure equitable healthcare outcomes for all individuals.
      `,
    },
  ];

  const fellows2025 = [
    {
      name: 'Licho Aguilera, MD',
      pronouns: '(He/They)',
      image: '/images/about/licho-cynthia-aguilera.jpg',
      description: `
        Dr. Aguilera is a Nawat and non-binary physician from Pico-Union, Los Angeles. They are a proud graduate of the Escuela Latinoamericana de Medicina (ELAM) in Havana, Cuba and completed their internal medicine residency at Cedars-Sinai Medical Center. Their career focus is on decolonial medicine for Black and Indigenous communities of Los Angeles. They also enjoy vintage sewing, playing a variety of instruments, and motorcycles.
      `,
    },
    {
      name: 'Bianca Hill, MD, MPH',
      pronouns: '(She/Her)',
      image: '/images/about/bianca-hill.jpeg',
      description: `
        Dr. Bianca Hill grew up in New York City, where she majored in Biology at the City College of New York. She has an MPH degree in Epidemiology from SUNY Downstate Medical Center, where she discovered her passion for HIV care while completing an internship on Rikers Island. Dr. Hill completed her medical education at Meharry Medical College and Family Medicine training at the Institute for Family Health - Harlem Residency. During her residency she managed the care of patients living with HIV throughout the Bronx and Harlem New York. Dr. Hill has been published for her PrEP research and served as a RAMP and Alumni Scholar for the HIV Vaccine Trial Network (HVTN). She has a strong interest in HIV primary care and research, primary care for all incarcerated women of color, health equity, and advocacy.
      `,
    },
    {
      name: 'Mark Leiber, MD',
      pronouns: '(He/Him)',
      image: '/images/about/mark-leiber.jpeg',
      description: `
        Dr. Mark Leiber is originally from Tampa, Florida and completed his undergraduate studies at Stanford, where he majored in Film Studies and Human Biology. After college, he worked as an Associate Producer for National Geographic Television on a documentary series about prisons called, "Lockdown", which initially piqued his interest in HIV medicine. He subsequently worked in Malawi for a year for Partners In Health as a health systems coordinator in a region heavily impacted by the HIV/AIDS epidemic. After returning to the US, he completed medical school at the University of California, Irvine and internal medicine residency at Johns Hopkins Bayview Medical Center in Baltimore, Maryland. He plans to focus his medical career on HIV and LGBTQ+ primary care.
      `,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Fellows<span className="text-red-600">.</span></h1>
        <p className="text-xl">Meet our current HIV Fellow cohort.</p>
      </section>

      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2026</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {fellows2026.map((fellow, index) => (
            <div key={index} className="text-left">
              <Image
                src={fellow.image}
                alt={fellow.name}
                width={200}
                height={200}
                className="mx-auto w-32 h-32"
              />
              <h3 className="text-xl font-bold mt-4">{fellow.name}</h3>
              <p className="italic text-gray-600">{fellow.pronouns}</p>
              <p className="whitespace-pre-line mt-4">{fellow.description}</p>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-8">Class of <span className="text-red-600">2025</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {fellows2025.map((fellow, index) => (
            <div key={index} className="text-left">
              <Image
                src={fellow.image}
                alt={fellow.name}
                width={200}
                height={200}
                className="mx-auto w-32 h-32"
              />
              <h3 className="text-xl font-bold mt-4">{fellow.name}</h3>
              <p className="italic text-gray-600">{fellow.pronouns}</p>
              <p className="whitespace-pre-line mt-4">{fellow.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Fellows;
