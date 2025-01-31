import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Resources: React.FC = () => {
  return (
    <>
      <Head>
        <title>Resources | HIV Clinical Leadership Program</title>
        <meta name="description" content="Explore a variety of resources to support your success in the HIV Clinical Leadership Program." />
        <meta name="keywords" content="HIV Clinical Leadership Program, resources, healthcare, HIV, clinical resources, global resources, national resources, local resources, research" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="bg-gray-100">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white text-center py-20">
          <h1 className="text-5xl font-extrabold mb-4">Resources<span className="text-red-600">.</span></h1>
          <p className="text-xl max-w-2xl mx-auto">Discover a range of resources designed to help you succeed in the HIV Clinical Leadership Program.</p>
        </section>

        {/* Resources Sections */}
        <section className="container mx-auto py-16 px-6 lg:px-8">
          {[
            {
              title: 'Clinical Resources',
              links: [
                { name: 'American Academy of HIV Medicine (AAHIVM)', url: 'https://aahivm.org' },
                { name: 'DHHS - HIV Practice Guidelines', url: 'https://aidsinfo.nih.gov/guidelines' },
                { name: 'IDSA HIV Primary Care Guidelines', url: 'https://www.idsociety.org/practice-guideline/hiv-primary-care/' },
                { name: 'CDC HIV Homepage', url: 'https://www.cdc.gov/hiv' },
                { name: 'Stanford University HIV Drug Resistance Database', url: 'https://hivdb.stanford.edu' },
              ],
            },
            {
              title: 'Global Resources',
              links: [
                { name: 'UNAIDS', url: 'https://www.unaids.org' },
                { name: 'HIV.gov', url: 'https://www.hiv.gov' },
                { name: 'The Global Fund', url: 'https://www.theglobalfund.org' },
              ],
            },
            {
              title: 'National Resources',
              links: [
                { name: 'HRSA - Ryan White HIV/AIDS Program', url: 'https://hab.hrsa.gov' },
                { name: 'U.S. Government Office of HIV/AIDS - Federal Response', url: 'https://www.hiv.gov/federal-response/federal-activities-aids' },
                { name: 'Black AIDS Institute', url: 'https://blackaids.org' },
              ],
            },
            {
              title: 'Local Resources',
              links: [
                { name: 'LA County Dept of Public Health - HIV/STD Programs', url: 'http://publichealth.lacounty.gov/dhsp' },
                { name: 'APLA Health', url: 'https://aplahealth.org' },
                { name: 'Los Angeles LGBT Center', url: 'https://lalgbtcenter.org' },
              ],
            },
            {
              title: 'Research & Policy Resources',
              links: [
                { name: 'UCLA National Clinician Scholars Program', url: 'https://uclancsp.med.ucla.edu' },
                { name: 'Center for HIV Identification, Prevention and Treatment Services', url: 'https://chipts.ucla.edu' },
              ],
            },
          ].map((section, index) => (
            <div key={index} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{section.title}<span className="text-red-600">.</span></h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
