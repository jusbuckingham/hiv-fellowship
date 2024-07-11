import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center lg:text-left">Training the next generation of leaders in HIV clinical care.</h1>
        <p className="text-lg mb-4 text-center lg:text-left">Welcome to the HIV Clinical Leadership Program</p>
        <div className="text-center lg:text-left mb-8">
          <Link href="/apply" className="text-blue-500 hover:underline">
            APPLY HERE
          </Link>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">An Opportunity to Serve</h2>
            <p className="text-lg mb-4 text-center lg:text-left">
              More than 1.2 million people are living with HIV in the U.S. with more than 35,000 new infections each year.
              After 40 years, the HIV epidemic continues to devastate our communities, disproportionately impacting vulnerable populations.
            </p>
            <p className="text-lg mb-4 text-center lg:text-left">
              The HIV Clinical Leadership Program is an established, postdoctoral fellowship aimed at developing HIV specialists who are knowledgeable
              and committed to addressing the health inequities our patients face at an individual and systemic level. We have a proven track record
              of placing fellows in competitive leadership career positions throughout the United States.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">All the Tools You Need to Succeed</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">Training & Education</h3>
                <p className="text-lg mb-4 text-center lg:text-left">
                  Over 20-year track record of clinical excellence in HIV specialty fellowship training. Fellows train at the high-volume outpatient HIV
                  clinics of LA General Medical Center with experienced Family Medicine and Infectious Disease trained faculty. They rotate in community-based
                  HIV clinics, correctional settings and the inpatient Infectious Disease service, learning HIV primary and specialty care as well as the
                  management of complications, co-morbidities and co-infections associated with HIV. Additional training in Addiction Medicine and Gender
                  Affirming Care is incorporated into the curriculum to meet the needs of our diverse patient population and prepare fellows to provide
                  excellence in standard of care practices.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">Mentorship</h3>
                <p className="text-lg mb-4 text-center lg:text-left">
                  Faculty and research staff support will be available to provide direct clinical and research mentorship and support. Fellows are paired
                  with strong clinician mentors to match areas of interests longitudinally throughout the two-year program.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-2 text-center lg:text-left">Leadership Experience</h3>
                <p className="text-lg mb-4 text-center lg:text-left">
                  In partnership with the UCLA National Clinician Scholars program, fellows will gain knowledge in health policy, research methods,
                  community-based participatory research, pressing issues in healthcare, and executive leadership skills. Under the guidance of expert
                  clinical research mentors, fellows will complete a scholarly project in an area of interest prior to graduation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-8 text-center">
          <p className="text-sm">Copyright © 2024 - HIV Clinical Leadership Program</p>
        </footer>
      </div>
    </>
  );
};

export default Home;
