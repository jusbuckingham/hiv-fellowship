import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Resources: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="header-section bg-gray-900 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Resources<span className="text-red-600">.</span></h1>
        <p className="text-xl">Access a variety of resources to help you succeed in the HIV Clinical Leadership Program.</p>
      </div>
      <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8 text-center"></h2>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Clinical Resources<span className="text-red-600">.</span></h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="https://aahivm.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Academy of HIV Medicine (AAHIVM)</a></li>
            <li><a href="https://aidsinfo.nih.gov/guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DHHS - HIV Practice Guidelines</a></li>
            <li><a href="https://www.idsociety.org/practice-guideline/hiv-primary-care/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">IDSA HIV Primary Care Guidelines</a></li>
            <li><a href="https://depts.washington.edu/nwaetc/patient-care-clinical-resources/national-hiv-clinical-library/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Washington (UW) National HIV Clinical Library</a></li>
            <li><a href="https://hivinsite.ucsf.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of California, San Francisco (UCSF) HIV Clinical Library InSite</a></li>
            <li><a href="https://www.cdc.gov/hiv" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Centers For Disease Control and Prevention- HIV Homepage</a></li>
            <li><a href="https://www.cdc.gov/std/treatment-guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Centers For Disease Control and Prevention - STI Guidelines</a></li>
            <li><a href="https://hivdb.stanford.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Stanford University HIV Drug Resistance Database</a></li>
            <li><a href="https://www.hiv-druginteractions.org/checker" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">University of Liverpool HIV Drug Interaction Checker</a></li>
            <li><a href="https://transcare.ucsf.edu/guidelines" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Guidelines for the Primary and Gender-Affirming Care of Transgender and Gender Nonbinary People</a></li>
            <li><a href="https://www.wpath.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">World Professional Association for Transgender Health (WPATH)</a></li>
            <li><a href="https://www.hcvguidelines.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HCV Guidance: Recommendations for Testing, Managing, and Treating Hepatitis C</a></li>
            <li><a href="https://www.samhsa.gov/medication-assisted-treatment" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Substance Abuse and Mental Health Services Administration (SAMHSA) - Medication Assisted Treatment (MAT)</a></li>
            <li><a href="https://www.asam.org/resources/practice-resources/npg" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">American Society of Addiction Medicine (ASAM) - National Practice Guideline</a></li>
            <li><a href="https://www.cdc.gov/hiv/library/reports/surveillance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Undetectable = Untransmittable (U=U) Campaign</a></li>
            <li><a href="https://humantraffickinghotline.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">National Human Trafficking Hotline</a></li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Global Resources<span className="text-red-600">.</span></h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="https://www.unaids.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UNAIDS</a></li>
            <li><a href="https://www.hiv.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">HIV.gov</a></li>
            <li><a href="https://www.theglobalfund.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The Global Fund</a></li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">National Resources<span className="text-red-600">.</span></h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="https://hab.hrsa.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Health Resources & Services Administration - Ryan White HIV/AIDS Program</a></li>
            <li><a href="https://www.hiv.gov/federal-response/federal-activities-aids" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">United States Government Office of HIV/AIDS - Federal Response to HIV</a></li>
            <li><a href="https://aidsvu.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">America's HIV Epidemic Analysis Dashboard</a></li>
            <li><a href="https://blackaids.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Black AIDS Institute</a></li>
            <li><a href="https://latinoaids.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Latino Commission on AIDS</a></li>
          </ul>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Local Resources<span className="text-red-600">.</span></h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="http://publichealth.lacounty.gov/dhsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Los Angeles County Department of Health Services</a></li>
            <li><a href="http://publichealth.lacounty.gov/dhsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Los Angeles County Dept of Public Health, Division of HIV and STD Programs</a></li>
            <li><a href="https://endhivla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Ending the HIV Epidemic in Los Angeles County</a></li>
            <li><a href="http://publichealth.lacounty.gov/dhsp" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Los Angeles County Commission on HIV</a></li>
            <li><a href="https://aplahealth.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">APLA Health</a></li>
            <li><a href="https://lalgbtcenter.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Los Angeles LGBT Center</a></li>
            <li><a href="http://centerforhealthjustice.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Center for Health Justice</a></li>
            <li><a href="https://www.wattshealth.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Watts Healthcare</a></li>
            <li><a href="https://www.thepeopleconcern.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">The People Concern</a></li>
            <li><a href="https://www.211la.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">211 Los Angeles - Local Resource Guide</a></li>
            <li><a href="https://keck.usc.edu/family-medicine/patient-care/street-medicine/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USC Keck School of Medicine - Street Medicine</a></li>
            <li><a href="https://www.hopics.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Homeless Outreach Program Integrated Care System (HOPICS)</a></li>
            <li><a href="https://chirpla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Comprehensive Housing Information and Referrals for People Living with HIV/AIDS (CHIRP) Los Angeles</a></li>
            <li><a href="http://publichealth.lacounty.gov/sapc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LA County Dept of Public Health - Substance Abuse Prevention and Control</a></li>
            <li><a href="http://publichealth.lacounty.gov/sapc" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Substance Use Service and Bed Availability Tool (SBAT)</a></li>
            <li><a href="http://dmh.lacounty.gov" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Los Angeles County Department of Mental Health</a></li>
            <li><a href="https://lafla.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Legal Aid Foundation of Los Angeles</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">Research & Policy Resources<span className="text-red-600">.</span></h2>
          <ul className="list-disc list-inside space-y-2">
            <li><a href="https://uclancsp.med.ucla.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">UCLA National Clinician Scholars Program</a></li>
            <li><a href="https://chipts.ucla.edu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Center for HIV Identification, Prevention and Treatment Services</a></li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Resources;
