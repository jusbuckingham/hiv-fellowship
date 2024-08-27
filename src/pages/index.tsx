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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
            "logo": "/images/home/hiv-logo.jpg",
          })}
        </script>
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-32 px-6">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-extrabold mb-4 leading-tight max-w-4xl mx-auto">
              Training the Next Generation of Leaders in HIV Clinical Care<span className="text-red-600">.</span>
            </h1>
            <p className="text-2xl font-light max-w-3xl mx-auto mb-6">
              Empowering physicians to lead the fight against HIV, transforming care, and advancing health equity.
            </p>
            <a href="/apply" className="mt-6 inline-block bg-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105">
              APPLY HERE
            </a>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-4xl font-bold mb-12">Welcome to the HIV Clinical Leadership Program</h2>
          
          <div className="flex flex-col items-center mb-16">
            <Image
              src="/images/home/hiv-logo.jpg"
              alt="HIV Clinical Leadership Program Logo"
              width={200}
              height={200}
              className="mb-8 rounded-full shadow-lg"
            />
            <h3 className="text-3xl font-semibold text-red-600 mb-6">An Opportunity to Serve</h3>
            <p className="text-xl max-w-3xl mx-auto mb-6">
              Over 1.2 million people in the U.S. live with HIV, with more than 35,000 new infections annually. The HIV epidemic continues to affect our communities, particularly vulnerable populations.
            </p>
            <p className="text-xl max-w-3xl mx-auto">
              The HIV Clinical Leadership Program is a postdoctoral fellowship committed to developing HIV specialists focused on addressing health inequities at both individual and systemic levels. Our program has a proven record of placing fellows in leadership roles across the nation.
            </p>
          </div>

          <h2 className="text-4xl font-bold mb-10">
            Up to <span className="text-red-600">$150,000</span> in Student Loan Repayment for Qualifying Graduates
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-12">Apply today to become part of the next generation of HIV change-makers.</p>

          <a href="/apply" className="mt-8 inline-block bg-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105">
            APPLY HERE
          </a>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-24">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">All the Tools You Need to Succeed</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { title: 'Training & Education', content: 'With over 20 years of excellence in HIV specialty training, fellows learn in high-volume outpatient clinics, community-based HIV centers, and inpatient Infectious Disease services. The curriculum includes Addiction Medicine and Gender Affirming Care, preparing fellows to meet the diverse needs of our patient population.' },
                { title: 'Mentorship', content: 'Fellows receive direct clinical and research mentorship, with regular meetings with leadership and quarterly sessions with the AETC Director. Mentorship covers career vision, job search, CV building, and more, offering strong connections to career opportunities.' },
                { title: 'Leadership Experience', content: 'In collaboration with the UCLA National Clinician Scholars program, fellows gain expertise in health policy, research, and leadership. Each fellow completes a scholarly project, encouraged to present or publish their findings.' },
                { title: 'Serving Underserved Populations', content: 'Our program is rooted in one of the largest safety-net systems in the U.S., with a commitment to underserved populations. Our alumni continue to serve vulnerable communities post-graduation.' },
              ].map((item, index) => (
                <div key={index} className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto py-24">
          <h2 className="text-4xl font-bold text-center mb-16">Hear From Our Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              { src: 'https://www.youtube.com/embed/nnctoOwZw0w?si=DJ1HB2cvRx1ficBX', title: 'Dr. Lauren Wolchok: “It’s all about care”' },
              { src: 'https://www.youtube.com/embed/dcdtBS5A9aM?si=4RrPXT_zXPgTqgRw', title: 'HIV Fellowship 2021' },
            ].map((video, index) => (
              <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-64 sm:h-80 md:h-96"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  aria-label={`Video: ${video.title}`}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Quote and Sponsors Section */}
        <section className="bg-gradient-to-r from-gray-100 via-white to-gray-100 py-24 text-center">
          <blockquote className="italic text-xl max-w-3xl mx-auto mb-16 text-gray-800">
            "Knowledge emerges only through invention and reinvention, the restless, impatient, continuing, hopeful inquiry beings pursue with the world and with others."
            <span className="block mt-4 text-red-600">- Paulo Freire, Pedagogy of the Oppressed</span>
          </blockquote>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
            {[
              '/images/about/health-services-lac.png',
              '/images/about/kecklogo.jpeg',
              '/images/about/aetc-pacific.jpg',
              '/images/about/ucla-ncsp.png',
              '/images/about/lundquist.png',
              '/images/about/viivlogo.png',
            ].map((src, index) => (
              <Image key={index} src={src} alt="Sponsor Logo" width={100} height={100} className="mx-auto" />
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
