import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>HIV Clinical Leadership Program</title>
        <meta name="description" content="Training the next generation of leaders in HIV clinical care." />
        <link rel="icon" href="/images/home/hiv-logo.jpg" />
      </Head>

      <Navbar />

      <main>
        <section className="bg-gray-900 text-white text-center py-20">
          <h1 className="text-5xl font-bold mb-4">
            Training the next generation of leaders in HIV clinical care<span className="text-red-600">.</span>
          </h1>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to the HIV Clinical Leadership Program</h2>
          <h2 className="text-4xl font-bold mb-8">An Opportunity to serve</h2>
          <p className="text-xl max-w-2xl mx-auto">
            More than 1.2 million people are living with HIV in the U.S. with more than 35,000 new infections each year. After 40 years, the HIV epidemic continues to devastate our communities, disproportionately impacting vulnerable populations.
          </p>
          <p className="text-xl max-w-2xl mx-auto mt-4">
            The HIV Clinical Leadership Program is an established, postdoctoral fellowship aimed at developing HIV specialists who are knowledgeable and committed to addressing the health inequities our patients face at an individual and systemic level. We have a proven track record of placing fellows in competitive leadership career positions throughout the United States.
          </p>
        </section>

        <section className="bg-gray-100 text-center py-16">
          <h2 className="text-4xl font-bold mb-8">All the Tools You Need to Succeed</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Training & Education</h3>
              <p>
                Over 20-year track record of clinical excellence in HIV specialty fellowship training. Fellows train at the high-volume outpatient HIV clinics of LA General Medical Center with experienced Family Medicine and Infectious Disease trained faculty. They rotate in community-based HIV clinics, correctional settings and the inpatient Infectious Disease service, learning HIV primary and specialty care as well as the management of complications, co-morbidities and co-infections associated with HIV. Additional training in Addiction Medicine and Gender Affirming Care is incorporated into the curriculum to meet the needs of our diverse patient population and prepare fellows to provide excellence in standard of care practices.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Mentorship</h3>
              <p>Faculty and research staff support will be available to provide direct clinical and research mentorship and support. Fellows are paired with strong clinician mentors to match areas of interests longitudinally throughout the two-year program. Mentorship highlights include:</p>
              <ul className="list-disc list-inside text-left">
                <li>Monthly meetings with leadership team mentor</li>
                <li>Quarterly meetings with AETC Director</li>
                <li>Topics include but not limited to: career vision & goals, job search, CV & cover letter building, job applications, interviews, and contract negotiation.</li>
                <li>Strong connections to career opportunity networks</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Leadership Experience</h3>
              <p>
                In partnership with the UCLA National Clinician Scholars program, fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Under the guidance of expert clinical research mentors, fellows will complete a scholarly project in an area of interest prior to graduation. Fellows are encouraged to demonstrate acquired knowledge, skills, and scholarly results through presentation at professional meetings or publication in scientific/academic journals.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Up to <span className="text-red-600">$150,000</span> in student loan repayment for qualifying graduates.
          </h2>
          <p className="text-xl max-w-2xl mx-auto">APPLY TODAY TO JOIN THE NEXT GENERATION OF HIV CHANGE MAKERS</p>
          <a href="/apply" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            APPLY HERE
          </a>
        </section>

        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-8 text-center"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <Image src="/images/home/dr-tasha-dixon-17.jpg" alt="Gallery Image 1" width={300} height={200} className="rounded-lg" />
            </div>
            <div>
              <Image src="/images/home/hhhchc.jpeg" alt="Gallery Image 2" width={300} height={200} className="rounded-lg" />
            </div>
            <div>
              <Image src="/images/home/alihug.jpeg" alt="Gallery Image 3" width={300} height={200} className="rounded-lg" />
            </div>
            <div>
              <Image src="/images/home/img-3462.jpg" alt="Gallery Image 4" width={300} height={200} className="rounded-lg" />
            </div>
            <div>
              <Image src="/images/home/img-6206.jpg" alt="Gallery Image 5" width={300} height={200} className="rounded-lg" />
            </div>
            <div>
              <Image src="/images/home/p81.png" alt="Gallery Image 6" width={300} height={200} className="rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-gray-900 text-white text-center py-16">
          <h2 className="text-4xl font-bold mb-8">
            All the <span className="text-red-600">Tools</span> You Need to Succeed
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4">Training & Education</h3>
              <p>
                Over 20-year track record of clinical excellence in HIV specialty fellowship training. Fellows train at the high-volume outpatient HIV clinics of LA General Medical Center with experienced Family Medicine and Infectious Disease trained faculty. They rotate in community-based HIV clinics, correctional settings and the inpatient Infectious Disease service, learning HIV primary and specialty care as well as the management of complications, co-morbidities and co-infections associated with HIV. Additional training in Addiction Medicine and Gender Affirming Care is incorporated into the curriculum to meet the needs of our diverse patient population and prepare fellows to provide excellence in standard of care practices.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4">Serving Underserved Populations.</h3>
              <p>
                Our patient-centered training program is located within one of the largest safety-net systems in the US, with a strong commitment to serving underserved populations. Our alumni have a strong track record of continued commitment to serving vulnerable patient populations after graduation.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4">Leadership Experience.</h3>
              <p>
                In partnership with the UCLA National Clinician Scholars program, fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Under the guidance of expert clinical research mentors, fellows will complete a scholarly project in an area of interest prior to graduation. Fellows are encouraged to demonstrate acquired knowledge, skills, and scholarly results through presentation at professional meetings or publication in scientific/academic journals.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Quote</h2>
          <blockquote className="italic mb-8">
            "Knowledge emerges only through invention and reinvention, the restless, impatient, continuing, hopeful inquiry beings pursue with the world and with others."
            <span className="block mt-4 text-red-600">- Paulo Freire, Pedagogy of the Oppressed</span>
          </blockquote>
          <Image src="/path/to/map-image.jpg" alt="HIV Map" width={500} height={300} className="mx-auto mb-8" />
          <p className="text-xl mb-8">
            Black, Latinx, BIPOC and LGBTQIA2S+ physicians strongly encouraged to apply! <br />
            Due to the current trends of the HIV epidemic in the US, physicians with interest in working in the <span className="text-red-600">SOUTH</span> and <span className="text-red-600">MID-ATLANTIC STATES</span> are also strongly encouraged to apply!
          </p>
          <div className="flex justify-center items-center space-x-8">
            <Image src="/path/to/logo1.jpg" alt="Partner Logo 1" width={100} height={100} />
            <Image src="/path/to/logo2.jpg" alt="Partner Logo 2" width={100} height={100} />
            <Image src="/path/to/logo3.jpg" alt="Partner Logo 3" width={100} height={100} />
            <Image src="/path/to/logo4.jpg" alt="Partner Logo 4" width={100} height={100} />
            <Image src="/path/to/logo5.jpg" alt="Partner Logo 5" width={100} height={100} />
            <Image src="/path/to/logo6.jpg" alt="Partner Logo 6" width={100} height={100} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
