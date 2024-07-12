// src/pages/program/index.tsx
import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

const Program: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Program.</h1>
          <p className="text-gray-600 mt-4">Overview of the HIV CLP fellowship two-year program.</p>
        </div>
        <div className="prose prose-lg max-w-none">
          <h2>01</h2>
          <h3>YEAR 1, Session 1 (6 months)</h3>
          <p>Scholarship/Leadership Development 60%</p>
          <p>Identification of research area of interest - Coursework at UCLA Fielding School of Public Health/ National Clinician Scholars Program: Health Policy & Financing, Research Design, Community-Based Participatory Research - Seminars at UCLA National Clinician Scholars Program: Pressing Health Issues, Pathways to Leadership, Journal Clubs</p>
          <p>Clinical Training/Care 30%</p>
          <p>HIV Primary care settings: Rand Schrader Clinic, LAC+USC Medical Center, Early Intervention Clinic (EIC) Skid Row, Emergency Department, LAC+USC Medical Center, LAC Jail Clinic, HIV Sub-specialty clinics at LAC+USC Medical Center</p>
          <p>Didactics and Case Studies 10%</p>
          <p>Antiretroviral therapy, Department of Health and Human Services (DHHS) guidelines, resistance training, challenging cases</p>

          <h3>YEAR 1, Session 2 (6 months)</h3>
          <p>Clinical Training/Care 60%</p>
          <p>HIV clinical settings: Rand Schrader Clinic, LAC+USC Medical Center, EIC Skid Row, Material-Child-Adolescent (MCA) HIV Clinic, LAC+USC Emergency Department, LAC+USC Medical Center Jail Clinic, Street Medicine Clinic, LAC+USC Inpatient ID (functions as co-fellow on ID service), DHS South LA Positive Care Clinics (Main Street, Oasis), HIV Sub-specialty Clinics (LAC+USC, CHLA, HRA, etc.)</p>
          <p>Scholarship/Leadership Development 30%</p>
          <p>Scholarly project planning (idea finalization, IRB application), Seminars at UCLA National Clinician Scholars Program: Pressing Health Issues, Pathways to Leadership, etc.</p>
          <p>Didactics and Case Studies 5%</p>
          <p>Antiretroviral therapy, DHHS guidelines, HIV Core Curriculum (AAHIVM, UW), HIV resistance training, challenging cases, case conferences</p>
          <p>Journal Clubs/Teaching 5%</p>
          <p>Teaching primary care residents in the USC HIV Training Program, Clinical teaching (residents, medical, and other students), lectures/ presentations to residents, medical students, advanced practice providers, nurses and community healthcare workers, etc.</p>

          <h2>02</h2>
          <h3>YEAR 2</h3>
          <p>Clinical Training/Care 50%</p>
          <p>HIV Training Settings Rand Schrader Clinic, LAC+USC Medical Center Early Intervention Clinic (Skid Row) Material-Child HIV Clinic, LAC+USC Medical Center Emergency Department, LAC+USC Medical Center LAC Jail Clinic USC Family Medicine Street Medicine clinic Hubert H. Humphrey Comprehensive Health Center LA Department of Public Health Clinics - HIV Sub-specialty Clinics (LAC+USC Medical Center) - Clinical teaching of residents, medical, and other students - General Primary Care (as desired and available) DHS clinic or other site where fellow will provide full service primary care to a panel of adult and pediatric patients.</p>
          <p>Scholarship/Leadership Development 50%</p>
          <p>Work closely with research mentor(s) to complete project and prepare for conference presentation and/or publication - Seminars at UCLA National Clinician Scholars Program: Pressing Health Issues, Pathways to Leadership, Journal Clubs.</p>

          <h3>Core Clinical Training Experiences</h3>
          <p>HIV Primary Care HIV continuity clinics: Rand Schrader Health & Research Center (5p21), Early Intervention Clinic (EIC) at the JWCH Center for Community Health, Maternal Child Adult & Adolescent Virology Clinic (MCA), Hubert H. Humphrey Comprehensive Health Center (HHH), AIDS Project Los Angeles (APLA) Health, USC Family Medicine Street Medicine clinic, and the HIV line at the Los Angeles County Jail (LAC). Fellows provide comprehensive primary and HIV care to over 300 HIV-positive patients, including management of anti-retroviral therapy, HIV-related primary care, HIV or ART-related complications and opportunistic infections. Clinical preceptorship is provided by DHS and USC faculty with Family/HIV Medicine and Infectious Disease training.</p>
          <p>Emergency Department HIV Consultation Service: Fellows provide 24/7 Emergency Room consultations and bedside education to emergency department providers at LAC+USC Medical Center. This includes consultations for patients with newly diagnosed HIV infections, acute HIV infections, or chronic HIV infections, regardless of whether the patients have an established medical home. HIV Sub-Specialty Care HIV Specialty care training will occur predominately at 5p21, but fellows also rotate at Maternal Child and Adolescent Clinic, Children’s Hospital Los Angeles, and Owen’s Clinic of UC San Diego. Fellows receive training in the Key HIV Subspecialty Training: Addiction medicine Adolescent medicine Communicable Diseases/Infectious Diseases Colorectal Dermatology Hematology/Oncology Hepatitis C Co-infection High Resolution Anoscopy (HRA) Neurology OB/Gyn and Women’s Health Palliative care Pediatric immunology Psychiatry Pulmonary medicine Women’s health.</p>
          <p>Inpatient Infectious Disease Training: management of hospitalized HIV-positive patients will occur at the LAC+USC Medical Center. Fellows rotate on the USC Infectious Disease (ID) Consult Service for a minimum of one month. They function as a co-fellow alongside the ID fellow to oversee the consult service and attend/participate in ID conferences. They assist in the care of HIV-positive and negative patients with ID pathology. Conditions seen on this service include, but are not limited to: acute HIV, opportunistic infections, opportunistic malignancies and AIDS defining infections/conditions.</p>
          <Link href="/program/salary-benefits" legacyBehavior>
            <a className="text-blue-600 hover:underline">Salary & Benefits</a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Program;
