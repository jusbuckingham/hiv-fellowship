import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const partners = [
  {
    name: 'Los Angeles County Department of Health Services',
    description: 'The HIV Clinical Leadership Program is managed by the Los Angeles County Department of Health Services (DHS). The DHS mission is to ensure access to high-quality, patient-centered, cost-effective health care for Los Angeles County residents through direct services at DHS facilities and through collaboration with community and university partners. The Department of Health Services (DHS) is the second largest municipal health system in the nation. Through its integrated system of 19 health centers and four hospitals -- and expanded network of community partner clinics -- DHS cares for 670,000 unique patients. DHS also provides a range of ambulatory care services from patient-centered medical home care to youth in the juvenile justice system and medical services for specialized populations such as children in foster care to older adults.',
    logo: '/images/about/health-services-lac.png',
  },
  {
    name: 'Keck School of Medicine Department of Family Medicine',
    description: 'In 2000, the Keck School of Medicine Department of Family Medicine developed one of the first HIV fellowship training programs in the United States. This 12-month fellowship accepted recent graduates from family and internal medicine residencies who had a passion for HIV medicine, primary care, and a desire to practice in underserved communities hardest hit by the HIV epidemic. This LAC+USC Medical Center based HIV clinical fellowship was unique in that it also included experiences in several community and academic settings. In 2010 the only HIV Corrections fellowship in the United States was established. This was in partnership with the LA County Sheriff’s Department which operates the largest jail system in the world. The original HIV fellowship graduated its first fellow in 2001 and its 17th in 2016. All former fellows are providing HIV care in underserved communities in California and in other states hard hit by HIV. Many former fellows have advanced into leadership positions including receiving academic appointments.',
    logo: '/images/about/kecklogo.jpeg',
  },
  {
    name: 'AIDS Education and Training Center at USC',
    description: 'The Los Angeles Area AIDS Education and Training Center at USC (formerly known as the Pacific AIDS Education and Training Center) was established in 1988 to increase the number of health care providers who are effectively educated and motivated to counsel, diagnose, treat and medically manage people with HIV disease and to help prevent high-risk behaviors that lead to HIV transmission. The AETC at USC was one of the original AETC sites in the country. Over the years, the AETC at USC’s educational curriculum has expanded to now include programs on Correctional and Homeless HIV medicine, HIV testing in all settings including emergency departments and Pre-Exposure Prophylaxis (PrEP) for the Prevention of HIV.',
    logo: '/images/about/aetc-pacific.jpg',
  },
  {
    name: 'UCLA National Clinician Scholars Program',
    description: 'UCLA National Clinician Scholars Program (NCSP) is committed to solving the most pressing societal challenges of our time—not least among them, addressing disparities and quality of care in an ever-changing healthcare landscape. Inspired by the Robert Wood Johnson Clinical Scholars Program (CSP), which for more than 40 years fostered the development of physician leaders able to transform health and healthcare, the university proudly launched the new UCLA NCSP in 2016. This post-doctoral education program builds upon the CSP legacy, with early career physicians and post-doctoral nurses participating in an intensive, highly-customized, two-year program that places them in community settings to conduct priority research directly benefiting the health of Southern California residents.',
    logo: '/images/about/ucla-ncsp.png',
  },
  {
    name: 'ViiV Healthcare',
    description: 'The vision for the collaborative DHS HIV Clinical Leadership Program along with financial underwriting are provided through the generous support of ViiV Healthcare. ViiV Healthcare is a global specialist HIV company established in November 2009 by GlaxoSmithKline and Pfizer dedicated to delivering advances in treatment and care for people living with HIV. The company’s aim is to take a deeper and broader interest in HIV/AIDS than any company has done before and take a new approach to deliver effective and new HIV medicines as well as support communities affected by HIV. For more information on the company, its management, portfolio, pipeline, and commitment, please visit: www.viivhealthcare.com. While ViiV Healthcare is supporting this fellowship program with monetary resources, all clinical, research, and administrative management will be administered independently by DHS based on standards adopted solely by DHS in partnership with LA County HIV Clinical Leadership Program. ViiV Healthcare plays no role in the application or the decision-making process for selection of the fellows.',
    logo: '/images/about/viivlogo.png',
  },
  {
    name: 'The Lundquist Institute for Biomedical Innovation',
    description: 'The Lundquist Institute for Biomedical Innovation is an independent non-profit biomedical research organization that was founded in 1952. The Lundquist Institute is the administrative support partner for the La County DHS Clinical Leadership Program. The Institute has over more than 120 principal investigators and 400 researchers in total — MD’s, MD/PhD’s, and PhD’s — working on 600 research studies. The organization is located on the LA County DHS Harbor-UCLA Medical Center campus and is academically affiliated with the David Geffen School of Medicine at UCLA. Research is funded by many sources including: grants from the NIH and other government entities, Industry and teaching contracts and royalties, as well as private donors and other non-profit foundations.',
    logo: '/images/about/lundquist.png',
  },
];

const Partners: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">
          Partners<span className="text-red-600">.</span>
        </h1>
        <p className="text-xl">Find out more about our collaborative partnerships.</p>
      </section>
      <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        {partners.map((partner, index) => (
          <div key={index} className="mb-10">
            <Image src={partner.logo} alt={`${partner.name} Logo`} width={150} height={150} className="mx-auto mb-4"/>
            <p className="text-center text-2xl font-bold">{partner.name}</p>
            <p className="text-center text-gray-700 mt-2">{partner.description}</p>
          </div>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/mg3r-IR4Eyo?si=ZPEYby8UXtnP-xVV"
              title="Video 1"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NOfaV2uoZPg?si=hbmZFjXPWutz4DKx"
              title="Video 2"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Partners;
