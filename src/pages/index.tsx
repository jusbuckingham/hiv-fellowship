import Head from 'next/head';
import Link from 'next/link';
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
      </Head>

      <Navbar />

      <main className="space-y-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white text-center py-32 px-6">
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl font-extrabold leading-tight mb-6">
              Training the Next Generation of Leaders in HIV Clinical Care
              <span className="text-red-600">.</span>
            </h1>
            <p className="text-2xl font-light max-w-3xl mx-auto mb-6">
              Empowering physicians to lead the fight against HIV, transforming care, and advancing health equity.
            </p>
            <Link
              href="/apply"
              className="mt-6 inline-block bg-red-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-red-700 transition transform hover:scale-105"
            >
              APPLY HERE
            </Link>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12">
            Welcome to the HIV Clinical Leadership Program
          </h2>
          <div className="flex flex-col items-center space-y-8">
            <Image
              src="/images/home/hiv-logo.jpg"
              alt="HIV Logo"
              width={200}
              height={200}
              className="rounded-full shadow-lg"
            />
            <h3 className="text-3xl font-semibold text-red-600">An Opportunity to Serve</h3>
            <p className="text-xl max-w-3xl">
              Over 1.2 million people in the U.S. live with HIV, with more than 35,000 new infections annually. The HIV epidemic continues to affect our communities, particularly vulnerable populations.
            </p>
            <p className="text-xl max-w-3xl">
              The HIV Clinical Leadership Program is a postdoctoral fellowship committed to developing HIV specialists focused on addressing health inequities at both individual and systemic levels.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-gray-100 py-24">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-16">All the Tools You Need to Succeed</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  title: 'Training & Education',
                  content:
                    'Fellows train in high-volume HIV clinics, community-based centers, and inpatient services, with specialized curriculum including Addiction Medicine and Gender Affirming Care.',
                },
                {
                  title: 'Mentorship',
                  content:
                    'Fellows receive direct clinical and research mentorship, regular leadership meetings, and quarterly career development sessions.',
                },
                {
                  title: 'Leadership Experience',
                  content:
                    'In collaboration with UCLA, fellows gain expertise in health policy, research, and leadership, with encouragement to present or publish scholarly projects.',
                },
                {
                  title: 'Serving Underserved Populations',
                  content:
                    'Our program is committed to serving vulnerable communities, training fellows in one of the largest safety-net systems in the U.S.',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto py-24 text-center">
          <h2 className="text-4xl font-bold mb-16">Hear From Our Alumni</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            {[
              {
                src: 'https://www.youtube.com/embed/nnctoOwZw0w',
                title: 'Dr. Lauren Wolchok: &ldquo;It&rsquo;s all about care&rdquo;',
              },
              {
                src: 'https://www.youtube.com/embed/dcdtBS5A9aM',
                title: 'HIV Fellowship 2021',
              },
            ].map((video, index) => (
              <div key={index} className="relative w-full overflow-hidden rounded-lg shadow-lg">
                <iframe
                  className="w-full h-64 sm:h-80 md:h-96"
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-gray-100 py-24 text-center">
          <blockquote className="italic text-xl max-w-3xl mx-auto text-gray-800">
            &ldquo;Knowledge emerges only through invention and reinvention, the restless,
            impatient, continuing, hopeful inquiry beings pursue with the world and with
            others.&rdquo;
            <span className="block mt-4 text-red-600">- Paulo Freire</span>
          </blockquote>
        </section>
      </main>

      <Footer />
    </>
  );
}