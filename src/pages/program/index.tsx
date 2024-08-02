import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image';

const Program: React.FC = () => {
  return (
    <div>
      <Navbar />
      <section className="bg-gray-900 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">Program<span className="text-red-600">.</span></h1>
        <p className="text-xl max-w-3xl mx-auto">Overview of the HIV CLP fellowship two-year program.</p>
      </section>
      <section className="container mx-auto px-4 py-20">
        <div className="pt-8"></div>
        <div className="grid gap-16">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-1.png"
                alt="Participants in a training session"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">01 YEAR 1, Session 1</h2>
              <h3 className="text-xl font-semibold mb-2">Scholarship/Leadership Development 60%</h3>
              <p className="text-gray-700 mb-4">
                Identification of research area of interest - Coursework at UCLA Fielding School of Public Health/ National
                Clinician Scholars Program: Health Policy & Financing, Research Design, Community-Based Participatory Research -
                Seminars at UCLA National Clinician Scholars Program: Pressing Health Issues, Pathways to Leadership, Journal Clubs
              </p>
              <h3 className="text-xl font-semibold mb-2">Clinical Training/Care 30%</h3>
              <p className="text-gray-700 mb-4">
                HIV Primary care settings: Rand Schrader Clinic, LAC+USC Medical Center, Early Intervention Clinic (EIC) Skid Row,
                Emergency Department, LAC+USC Medical Center, LAC Jail Clinic, HIV Sub-specialty clinics at LAC+USC Medical Center
              </p>
              <h3 className="text-xl font-semibold mb-2">Didactics and Case Studies 10%</h3>
              <p className="text-gray-700">
                Antiretroviral therapy, Department of Health and Human Services (DHHS) guidelines, resistance training, challenging
                cases
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-2.jpg"
                alt="Medical professionals discussing a case"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">01 YEAR 1, Session 2</h2>
              <h3 className="text-xl font-semibold mb-2">Clinical Training/Care 60%</h3>
              <p className="text-gray-700 mb-4">
                HIV clinical settings: Rand Schrader Clinic, LAC+USC Medical Center, EIC Skid Row, Maternal-Child-Adolescent (MCA) HIV
                Clinic, LAC+USC Emergency Department, LAC+USC Medical Center Jail Clinic, Street Medicine Clinic, LAC+USC Inpatient ID
                (functions as co-fellow on ID service), DHS South LA Positive Care Clinics (Main Street, Oasis), HIV Sub-specialty
                Clinics (LAC+USC, CHLA, HRA, etc.)
              </p>
              <h3 className="text-xl font-semibold mb-2">Scholarship/Leadership Development 30%</h3>
              <p className="text-gray-700 mb-4">
                Scholarly project planning (idea finalization, IRB application), Seminars at UCLA National Clinician Scholars
                Program: Pressing Health Issues, Pathways to Leadership, etc.
              </p>
              <h3 className="text-xl font-semibold mb-2">Didactics and Case Studies 5%</h3>
              <p className="text-gray-700 mb-4">
                Antiretroviral therapy, DHHS guidelines, HIV Core Curriculum (AAHIVM, UW), HIV resistance training, challenging cases,
                case conferences
              </p>
              <h3 className="text-xl font-semibold mb-2">Journal Clubs/Teaching 5%</h3>
              <p className="text-gray-700">
                Teaching primary care residents in the USC HIV Training Program, Clinical teaching (residents, medical, and other
                students), lectures/ presentations to residents, medical students, advanced practice providers, nurses and community
                healthcare workers, etc.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-3.jpg"
                alt="Group of medical professionals collaborating"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">02 YEAR 2</h2>
              <h3 className="text-xl font-semibold mb-2">Clinical Training/Care 50%</h3>
              <p className="text-gray-700 mb-4">
                HIV Training Settings Rand Schrader Clinic, LAC+USC Medical Center Early Intervention Clinic (Skid Row) Maternal-Child
                HIV Clinic, LAC+USC Medical Center Emergency Department, LAC+USC Medical Center LAC Jail Clinic USC Family Medicine
                Street Medicine clinic Hubert H. Humphrey Comprehensive Health Center LA Department of Public Health Clinics - HIV
                Sub-specialty Clinics (LAC+USC Medical Center) - Clinical teaching of residents, medical, and other students - General
                Primary Care (as desired and available) DHS clinic or other site where fellow will provide full service primary care
                to a panel of adult and pediatric patients.
              </p>
              <h3 className="text-xl font-semibold mb-2">Scholarship/Leadership Development 50%</h3>
              <p className="text-gray-700">
                Work closely with research mentor(s) to complete project and prepare for conference presentation and/or publication -
                Seminars at UCLA National Clinician Scholars Program: Pressing Health Issues, Pathways to Leadership, Journal Clubs.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src="/images/program/program-4.png"
                alt="Medical professionals in a clinical setting"
                width={800}
                height={600}
                className="w-full h-72 object-cover"
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-4">Core Clinical Training Experiences</h2>
              <h3 className="text-xl font-semibold mb-2">HIV Primary Care HIV continuity clinics:</h3>
              <p className="text-gray-700 mb-4">
                Rand Schrader Health & Research Center (5p21), Early Intervention Clinic (EIC) at the JWCH Center for Community
                Health, Maternal Child Adult & Adolescent Virology Clinic (MCA), Hubert H. Humphrey Comprehensive Health Center (HHH),
                AIDS Project Los Angeles (APLA) Health, USC Family Medicine Street Medicine clinic, and the HIV line at the Los
                Angeles County Jail (LAC). Fellows provide comprehensive primary and HIV care to over 300 HIV-positive patients,
                including management of anti-retroviral therapy, HIV-related primary care, HIV or ART-related complications and
                opportunistic infections. Clinical preceptorship is provided by DHS and USC faculty with Family/HIV Medicine and
                Infectious Disease training.
              </p>
              <h3 className="text-xl font-semibold mb-2">Emergency Department HIV Consultation Service:</h3>
              <p className="text-gray-700 mb-4">
                Fellows provide 24/7 Emergency Room consultations and bedside education to emergency department providers at LAC+USC
                Medical Center. This includes consultations for patients with newly diagnosed HIV infections, acute HIV infections, or
                chronic HIV infections, regardless of whether the patients have an established medical home. HIV Sub-Specialty Care
                training will occur predominately at 5p21, but fellows also rotate at Maternal Child and Adolescent Clinic, Children’s
                Hospital Los Angeles, and Owen’s Clinic of UC San Diego. Fellows receive training in the
              </p>
              <h3 className="text-xl font-semibold mb-2">Key HIV Subspecialty Training:</h3>
              <p className="text-gray-700 mb-4">
                Addiction medicine Adolescent medicine Communicable Diseases/Infectious Diseases Colorectal Dermatology
                Hematology/Oncology Hepatitis C Co-infection High Resolution Anoscopy (HRA) Neurology OB/Gyn and Women’s Health
                Palliative care Pediatric immunology Psychiatry Pulmonary medicine Women’s health
              </p>
              <h3 className="text-xl font-semibold mb-2">Inpatient Infectious Disease Training:</h3>
              <p className="text-gray-700">
                Management of hospitalized HIV-positive patients will occur at the LAC+USC Medical Center. Fellows rotate on the USC
                Infectious Disease (ID) Consult Service for a minimum of one month. They function as a co-fellow alongside the ID
                fellow to oversee the consult service and attend/participate in ID conferences. They assist in the care of
                HIV-positive and negative patients with ID pathology. Conditions seen on this service include, but are not limited to:
                acute HIV, opportunistic infections, opportunistic malignancies and AIDS defining infections/conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Program;
