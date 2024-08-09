import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>HIV Clinical Leadership Program</title>
        <meta name="description" content="The next generation of leaders in HIV clinical care." />
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
            "description": "The next generation of leaders in HIV clinical care.",
            "logo": "/images/home/hiv-logo.jpg"
          })}
        </script>
      </Head>

      <Navbar />

      <main>
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4 max-w-screen-md mx-auto leading-tight">
            Training the Next Generation of Leaders in HIV Clinical Care<span className="text-red-600">.</span>
          </h1>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to the HIV Clinical Leadership Program</h2>
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/images/home/hiv-logo.jpg"
              alt="HIV Clinical Leadership Program Logo"
              width={200}
              height={200}
              className="mb-4"
            />
            <h2 className="text-4xl font-bold mb-4 text-red-600">An Opportunity to Serve</h2>
            <p className="text-xl max-w-2xl mx-auto">
              Over 1.2 million people are living with HIV in the U.S., with more than 35,000 new infections each year. The HIV epidemic continues to impact our communities, especially vulnerable populations.
            </p>
            <p className="text-xl max-w-2xl mx-auto mt-4">
              The HIV Clinical Leadership Program is a postdoctoral fellowship dedicated to developing HIV specialists committed to addressing health inequities at both individual and systemic levels. Our program has a proven track record of placing fellows in leadership positions across the United States.
            </p>
          </div>
          <h2 className="text-4xl font-bold mb-8">
            Up to <span className="text-red-600">$150,000</span> in Student Loan Repayment for Qualifying Graduates
          </h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">Apply today to join the next generation of HIV change-makers.</p>
          <a href="/apply" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            APPLY HERE
          </a>
        </section>

        <section className="bg-gray-100 text-center py-16">
          <h2 className="text-4xl font-bold mb-8">All the Tools You Need to Succeed</h2>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Training & Education</h3>
              <p className="text-gray-700">
                With over 20 years of clinical excellence in HIV specialty training, fellows learn in high-volume outpatient clinics, community-based HIV centers, and inpatient Infectious Disease services. The curriculum includes Addiction Medicine and Gender Affirming Care, preparing fellows to meet the diverse needs of our patient population.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
              <p className="text-gray-700">
                Fellows receive direct clinical and research mentorship, with monthly meetings with leadership and quarterly sessions with the AETC Director. Mentorship covers career vision, job search, CV building, and more, with strong connections to career opportunities.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Leadership Experience</h3>
              <p className="text-gray-700">
                In collaboration with the UCLA National Clinician Scholars program, fellows gain expertise in health policy, research, and leadership. Each fellow completes a scholarly project, encouraged to present or publish their findings.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Serving Underserved Populations</h3>
              <p className="text-gray-700">
                Our training program is rooted in one of the largest safety-net systems in the U.S., with a commitment to underserved populations. Our alumni continue to serve vulnerable communities post-graduation.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 mt-16">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/nnctoOwZw0w?si=DJ1HB2cvRx1ficBX"
              title='Dr. Lauren Wolchok: “It’s all about care”'
              frameBorder="0"
              allowFullScreen
              aria-label="Video: Dr. Lauren Wolchok: 'It’s all about care'"
            />
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dcdtBS5A9aM?si=4RrPXT_zXPgTqgRw"
              title="HIV Fellowship 2021"
              frameBorder="0"
              allowFullScreen
              aria-label="Video: HIV Fellowship 2021"
            />
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <blockquote className="italic mb-8">
            "Knowledge emerges only through invention and reinvention, the restless, impatient, continuing, hopeful inquiry beings pursue with the world and with others."
            <span className="block mt-4 text-red-600">- Paulo Freire, Pedagogy of the Oppressed</span>
          </blockquote>
          <Image src="/images/home/index/aidsvu.png" alt="HIV Map" width={500} height={300} className="mx-auto mb-8" />
          <p className="text-xl mb-8 text-gray-900">
            Black, Latinx, BIPOC, and LGBTQIA2S+ physicians are strongly encouraged to apply! <br />
            Given current trends in the HIV epidemic, physicians interested in working in the <span className="text-red-600">South</span> and <span className="text-red-600">Mid-Atlantic States</span> are also highly encouraged to apply!
          </p>
          <div className="flex justify-center items-center space-x-8">
            <Image src="/images/about/health-services-lac.png" alt="Health Services LAC Logo" width={100} height={100} />
            <Image src="/images/about/kecklogo.jpeg" alt="Keck Logo" width={100} height={100} />
            <Image src="/images/about/aetc-pacific.jpg" alt="AETC Pacific Logo" width={100} height={100} />
            <Image src="/images/about/ucla-ncsp.png" alt="UCLA NCSP Logo" width={100} height={100} />
            <Image src="/images/about/lundquist.png" alt="Lundquist Logo" width={100} height={100} />
            <Image src="/images/about/viivlogo.png" alt="ViiV Logo" width={100} height={100} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
