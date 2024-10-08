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
        <section className="bg-gray-900 text-white text-center py-20">
          <h1 className="text-5xl font-extrabold mb-4">Resources<span className="text-red-600">.</span></h1>
          <p className="text-xl max-w-2xl mx-auto">Discover a range of resources designed to help you succeed in the HIV Clinical Leadership Program.</p>
        </section>
        <section className="container mx-auto py-16 px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Clinical Resources<span className="text-red-600">.</span></h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li><a href="https://aahivm.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Academy of HIV Medicine (AAHIVM)</a></li>
                <li><a href="https://aidsinfo.nih.gov/guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DHHS - HIV Practice Guidelines</a></li>
                <li><a href="https://www.idsociety.org/practice-guideline/hiv-primary-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IDSA HIV Primary Care Guidelines</a></li>
                <li><a href="https://depts.washington.edu/nwaetc/patient-care-clinical-resources/national-hiv-clinical-library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Washington (UW) National HIV Clinical Library</a></li>
                <li><a href="https://hivinsite.ucsf.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UCSF HIV InSite Clinical Library</a></li>
                <li><a href="https://www.cdc.gov/hiv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC HIV Homepage</a></li>
                <li><a href="https://www.cdc.gov/std/treatment-guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CDC STI Treatment Guidelines</a></li>
                <li><a href="https://hivdb.stanford.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Stanford University HIV Drug Resistance Database</a></li>
                <li><a href="https://www.hiv-druginteractions.org/checker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Liverpool HIV Drug Interaction Checker</a></li>
                <li><a href="https://transcare.ucsf.edu/guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guidelines for Gender-Affirming Care of Transgender and Nonbinary People</a></li>
                <li><a href="https://www.wpath.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Professional Association for Transgender Health (WPATH)</a></li>
                <li><a href="https://www.hcvguidelines.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HCV Guidance for Testing, Managing, and Treating Hepatitis C</a></li>
                <li><a href="https://www.samhsa.gov/medication-assisted-treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SAMHSA - Medication Assisted Treatment (MAT)</a></li>
                <li><a href="https://www.asam.org/resources/practice-resources/npg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ASAM - National Practice Guideline</a></li>
                <li><a href="https://www.cdc.gov/hiv/library/reports/surveillance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Undetectable = Untransmittable (U=U) Campaign</a></li>
                <li><a href="https://humantraffickinghotline.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Human Trafficking Hotline</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Global Resources<span className="text-red-600">.</span></h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li><a href="https://www.unaids.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UNAIDS</a></li>
                <li><a href="https://www.hiv.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HIV.gov</a></li>
                <li><a href="https://www.theglobalfund.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Global Fund</a></li>
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">National Resources<span className="text-red-600">.</span></h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li><a href="https://hab.hrsa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HRSA - Ryan White HIV/AIDS Program</a></li>
                <li><a href="https://www.hiv.gov/federal-response/federal-activities-aids" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U.S. Government Office of HIV/AIDS - Federal Response</a></li>
                <li><a href="https://aidsvu.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">America's HIV Epidemic Analysis Dashboard (AIDSVu)</a></li>
                <li><a href="https://blackaids.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Black AIDS Institute</a></li>
                <li><a href="https://latinoaids.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Latino Commission on AIDS</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Local Resources<span className="text-red-600">.</span></h2>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li><a href="http://publichealth.lacounty.gov/dhsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LA County Dept of Health Services</a></li>
                <li><a href="http://publichealth.lacounty.gov/dhsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LA County Dept of Public Health - HIV/STD Programs</a></li>
                <li><a href="https://endhivla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ending the HIV Epidemic in Los Angeles County</a></li>
                <li><a href="http://publichealth.lacounty.gov/dhsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LA County Commission on HIV</a></li>
                <li><a href="https://aplahealth.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">APLA Health</a></li>
                <li><a href="https://lalgbtcenter.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Los Angeles LGBT Center</a></li>
                <li><a href="http://centerforhealthjustice.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Center for Health Justice</a></li>
                <li><a href="https://www.wattshealth.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watts Healthcare</a></li>
                <li><a href="https://www.thepeopleconcern.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The People Concern</a></li>
                <li><a href="https://www.211la.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">211 Los Angeles - Resource Guide</a></li>
                <li><a href="https://keck.usc.edu/family-medicine/patient-care/street-medicine/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USC Street Medicine Program</a></li>
                <li><a href="https://www.hopics.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HOPICS - Homeless Outreach Program</a></li>
                <li><a href="https://chirpla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CHIRP LA - Housing Referrals for People Living with HIV/AIDS</a></li>
                <li><a href="http://publichealth.lacounty.gov/sapc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LA County Substance Abuse Prevention and Control</a></li>
                <li><a href="http://publichealth.lacounty.gov/sapc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Substance Use Service and Bed Availability Tool (SBAT)</a></li>
                <li><a href="http://dmh.lacounty.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LA County Department of Mental Health</a></li>
                <li><a href="https://lafla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Legal Aid Foundation of Los Angeles</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Research & Policy Resources<span className="text-red-600">.</span></h2>
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li><a href="https://uclancsp.med.ucla.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UCLA National Clinician Scholars Program</a></li>
              <li><a href="https://chipts.ucla.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Center for HIV Identification, Prevention and Treatment Services</a></li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resources;
