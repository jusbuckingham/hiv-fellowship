import React from 'react';

const ToolsSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center">All the Tools You Need to Succeed</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold">Training & Education</h3>
            <p className="mt-2">
              Over 20-year track record of clinical excellence in HIV specialty fellowship training. Fellows train at the high-volume outpatient HIV clinics of LA General Medical Center with experienced Family Medicine and Infectious Disease trained faculty. 
              They rotate in community-based HIV clinics, correctional settings and the inpatient Infectious Disease service, learning HIV primary and specialty care as well as the management of complications, co-morbidities and co-infections associated with HIV.
              Additional training in Addiction Medicine and Gender Affirming Care is incorporated into the curriculum to meet the needs of our diverse patient population and prepare fellows to provide excellence in standard of care practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Mentorship</h3>
            <p className="mt-2">
              Faculty and research staff support will be available to provide direct clinical and research mentorship and support. 
              Fellows are paired with strong clinician mentors to match areas of interests longitudinally throughout the two-year program.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Leadership Experience</h3>
            <p className="mt-2">
              In partnership with the UCLA National Clinician Scholars program, fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. 
              Under the guidance of expert clinical research mentors, fellows will complete a scholarly project in an area of interest prior to graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
