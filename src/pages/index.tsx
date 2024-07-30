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

        {/* Open Graph meta tags */}
        <meta property="og:title" content="HIV Clinical Leadership Program" />
        <meta property="og:description" content="Training the next generation of leaders in HIV clinical care." />
        <meta property="og:image" content="/images/home/hiv-logo.jpg" />
        <meta property="og:url" content="https://www.hivfellowship.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HIV Clinical Leadership Program" />
        <meta name="twitter:description" content="Training the next generation of leaders in HIV clinical care." />
        <meta name="twitter:image" content="/images/home/hiv-logo.jpg" />

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://www.hivfellowship.com",
            "name": "HIV Clinical Leadership Program",
            "description": "Training the next generation of leaders in HIV clinical care.",
            "logo": "/images/home/hiv-logo.jpg"
          })}
        </script>
      </Head>

      <Navbar />

      <main>
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4 max-w-screen-md mx-auto leading-tight">
            Training the next generation of leaders in HIV clinical care<span className="text-red-600">.</span>
          </h1>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to the HIV Clinical Leadership Program</h2>
          <h2 className="text-4xl font-bold mb-8">An Opportunity to Serve</h2>
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Training & Education</h3>
              <p className="text-gray-700">
                Over 20-year track record of clinical excellence in HIV specialty fellowship training. Fellows train at the high-volume outpatient HIV clinics of LA General Medical Center with experienced Family Medicine and Infectious Disease trained faculty. They rotate in community-based HIV clinics, correctional settings and the inpatient Infectious Disease service, learning HIV primary and specialty care as well as the management of complications, co-morbidities and co-infections associated with HIV. Additional training in Addiction Medicine and Gender Affirming Care is incorporated into the curriculum to meet the needs of our diverse patient population and prepare fellows to provide excellence in standard of care practices.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
              <p className="text-gray-700">Faculty and research staff support will be available to provide direct clinical and research mentorship and support. Fellows are paired with strong clinician mentors to match areas of interests longitudinally throughout the two-year program. Mentorship highlights include:</p>
              <ul className="list-disc list-inside text-left text-gray-700">
                <li>Monthly meetings with leadership team mentor</li>
                <li>Quarterly meetings with AETC Director</li>
                <li>Topics include but not limited to: career vision & goals, job search, CV & cover letter building, job applications, interviews, and contract negotiation.</li>
                <li>Strong connections to career opportunity networks</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Leadership Experience</h3>
              <p className="text-gray-700">
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
            {['/images/home/dr-tasha-dixon-17.jpg', '/images/home/hhhchc.jpeg', '/images/home/alihug.jpeg', '/images/home/img-3462.jpg', '/images/home/img-6206.jpg', '/images/home/p81.png'].map((src, index) => (
              <div key={index} className="w-full h-64 relative">
                <Image src={src} alt={`Gallery Image ${index + 1}`} fill style={{ objectFit: 'cover' }} className="rounded-lg" />
              </div>
            ))}
          </div>
          <div className="pt-8"></div> {/* Added padding */}
        </section>

        <section className="bg-gray-900 text-white text-center py-16">
          <h2 className="text-4xl font-bold text-white">
            All the <span className="text-red-600">Tools</span> You Need to Succeed
          </h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4 text-white">Training & Education</h3>
              <p className="text-gray-400">
                Over 20-year track record of clinical excellence in HIV specialty fellowship training. Fellows train at the high-volume outpatient HIV clinics of LA General Medical Center with experienced Family Medicine and Infectious Disease trained faculty. They rotate in community-based HIV clinics, correctional settings and the inpatient Infectious Disease service, learning HIV primary and specialty care as well as the management of complications, co-morbidities and co-infections associated with HIV. Additional training in Addiction Medicine and Gender Affirming Care is incorporated into the curriculum to meet the needs of our diverse patient population and prepare fellows to provide excellence in standard of care practices.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4 text-white">Serving Underserved Populations</h3>
              <p className="text-gray-400">
                Our patient-centered training program is located within one of the largest safety-net systems in the US, with a strong commitment to serving underserved populations. Our alumni have a strong track record of continued commitment to serving vulnerable patient populations after graduation.
              </p>
            </div>
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4 text-white">Leadership Experience</h3>
              <p className="text-gray-400">
                In partnership with the UCLA National Clinician Scholars program, fellows will gain knowledge in health policy, research methods, community-based participatory research, pressing issues in healthcare, and executive leadership skills. Under the guidance of expert clinical research mentors, fellows will complete a scholarly project in an area of interest prior to graduation. Fellows are encouraged to demonstrate acquired knowledge, skills, and scholarly results through presentation at professional meetings or publication in scientific/academic journals.
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <blockquote className="italic mb-8">
            "Knowledge emerges only through invention and reinvention, the restless, impatient, continuing, hopeful inquiry beings pursue with the world and with others."
            <span className="block mt-4 text-red-600">- Paulo Freire, Pedagogy of the Oppressed</span>
          </blockquote>
          <Image src="/images/home/index/aidsvu.png" alt="HIV Map" width={500} height={300} className="mx-auto mb-8" />
          <p className="text-xl mb-8 text-gray-900">
            Black, Latinx, BIPOC and LGBTQIA2S+ physicians strongly encouraged to apply! <br />
            Due to the current trends of the HIV epidemic in the US, physicians with interest in working in the <span className="text-red-600">SOUTH</span> and <span className="text-red-600">MID-ATLANTIC STATES</span> are also strongly encouraged to apply!
          </p>
          <div className="flex justify-center items-center space-x-8">
            <Image src="/images/about/health-services-lac.png" alt="Partner Logo 1" width={100} height={100} />
            <Image src="/images/about/kecklogo.jpeg" alt="Partner Logo 2" width={100} height={100} />
            <Image src="/images/about/aetc-pacific.jpg" alt="Partner Logo 3" width={100} height={100} />
            <Image src="/images/about/ucla-ncsp.png" alt="Partner Logo 4" width={100} height={100} />
            <Image src="/images/about/lundquist.png" alt="Partner Logo 5" width={100} height={100} />
            <Image src="/images/about/viivlogo.png" alt="Partner Logo 6" width={100} height={100} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
