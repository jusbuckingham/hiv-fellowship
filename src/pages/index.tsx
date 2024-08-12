import Head from 'next/head';   // Imports the Head component from Next.js to manage the document head
import Navbar from '../components/Navbar'; // Imports a custom Navbar component
import Footer from '../components/Footer'; // Imports a custom Footer component
import Image from 'next/image'; // Imports the Image component from Next.js for optimized image handling

export default function Home() {
  return (
    <>
      <Head>
        <title>HIV Clinical Leadership Program</title> 
        {/* Sets the title of the page */}
        
        <meta name="description" content="The next generation of leaders in HIV clinical care." />
        {/* Meta tag for the page description, useful for SEO */}
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Sets the viewport to make the website responsive on mobile devices */}
        
        <link rel="icon" href="/images/home/hiv-logo.jpg" />
        {/* Sets the favicon of the website */}

        {/* Open Graph meta tags */}
        <meta property="og:title" content="HIV Clinical Leadership Program" />
        {/* Sets the title for social media sharing */}
        
        <meta property="og:description" content="Training the next generation of leaders in HIV clinical care." />
        {/* Sets the description for social media sharing */}
        
        <meta property="og:image" content="/images/home/hiv-logo.jpg" />
        {/* Sets the image for social media sharing */}
        
        <meta property="og:url" content="https://www.hivfellowship.com" />
        {/* Sets the URL for social media sharing */}
        
        <meta property="og:type" content="website" />
        {/* Specifies the type of content for social media sharing */}

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        {/* Specifies the Twitter card type */}
        
        <meta name="twitter:title" content="HIV Clinical Leadership Program" />
        {/* Sets the title for Twitter sharing */}
        
        <meta name="twitter:description" content="Training the next generation of leaders in HIV clinical care." />
        {/* Sets the description for Twitter sharing */}
        
        <meta name="twitter:image" content="/images/home/hiv-logo.jpg" />
        {/* Sets the image for Twitter sharing */}

        {/* Structured Data JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org", // Sets the JSON-LD context to Schema.org
            "@type": "Organization", // Specifies the type of schema, in this case, an organization
            "url": "https://www.hivfellowship.com", // The URL of the organization
            "name": "HIV Clinical Leadership Program", // The name of the organization
            "description": "The next generation of leaders in HIV clinical care.", // A description of the organization
            "logo": "/images/home/hiv-logo.jpg" // The logo of the organization
          })}
        </script>
        {/* Adds structured data for better SEO and richer search engine results */}
      </Head>

      <Navbar />
      {/* Renders the Navbar component at the top of the page */}

      <main>
        <section className="bg-gray-900 text-white text-center py-20 px-4">
          <h1 className="text-5xl font-bold mb-4 max-w-screen-md mx-auto leading-tight">
            Training the Next Generation of Leaders in HIV Clinical Care
            <span className="text-red-600">.</span>
          </h1>
          {/* Main heading with a red period at the end */}
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to the HIV Clinical Leadership Program</h2>
          {/* Subheading welcoming users to the program */}
          
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/images/home/hiv-logo.jpg"
              alt="HIV Clinical Leadership Program Logo"
              width={200}
              height={200}
              className="mb-4"
            />
            {/* Displays the logo of the program */}
            
            <h2 className="text-4xl font-bold mb-4 text-red-600">An Opportunity to Serve</h2>
            {/* Subheading about the opportunity */}
            
            <p className="text-xl max-w-2xl mx-auto">
              Over 1.2 million people are living with HIV in the U.S., with more than 35,000 new infections each year. The HIV epidemic continues to impact our communities, especially vulnerable populations.
            </p>
            {/* Paragraph explaining the impact of HIV */}
            
            <p className="text-xl max-w-2xl mx-auto mt-4">
              The HIV Clinical Leadership Program is a postdoctoral fellowship dedicated to developing HIV specialists committed to addressing health inequities at both individual and systemic levels. Our program has a proven track record of placing fellows in leadership positions across the United States.
            </p>
            {/* Paragraph explaining the fellowship program */}
          </div>
          
          <h2 className="text-4xl font-bold mb-8">
            Up to <span className="text-red-600">$150,000</span> in Student Loan Repayment for Qualifying Graduates
          </h2>
          {/* Subheading highlighting the student loan repayment incentive */}
          
          <p className="text-xl max-w-2xl mx-auto mb-8">Apply today to join the next generation of HIV change-makers.</p>
          {/* Call to action paragraph */}
          
          <a href="/apply" className="mt-8 inline-block bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition">
            APPLY HERE
          </a>
          {/* Button linking to the application page */}
        </section>

        <section className="bg-gray-100 text-center py-16">
          <h2 className="text-4xl font-bold mb-8">All the Tools You Need to Succeed</h2>
          {/* Subheading introducing the tools and resources section */}
          
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Grid layout for tools and resources, responsive with 1 to 3 columns */}
            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Training & Education</h3>
              <p className="text-gray-700">
                With over 20 years of clinical excellence in HIV specialty training, fellows learn in high-volume outpatient clinics, community-based HIV centers, and inpatient Infectious Disease services. The curriculum includes Addiction Medicine and Gender Affirming Care, preparing fellows to meet the diverse needs of our patient population.
              </p>
              {/* Describes the training and education provided by the program */}
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
              <p className="text-gray-700">
                Fellows receive direct clinical and research mentorship, with monthly meetings with leadership and quarterly sessions with the AETC Director. Mentorship covers career vision, job search, CV building, and more, with strong connections to career opportunities.
              </p>
              {/* Describes the mentorship opportunities available to fellows */}
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Leadership Experience</h3>
              <p className="text-gray-700">
                In collaboration with the UCLA National Clinician Scholars program, fellows gain expertise in health policy, research, and leadership. Each fellow completes a scholarly project, encouraged to present or publish their findings.
              </p>
              {/* Describes the leadership experience gained through the program */}
            </div>
            
            <div className="p-4 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Serving Underserved Populations</h3>
              <p className="text-gray-700">
                Our training program is rooted in one of the largest safety-net systems in the U.S., with a commitment to underserved populations. Our alumni continue to serve vulnerable communities post-graduation.
              </p>
              {/* Describes the program's focus on serving underserved populations */}
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
            {/* Embeds a YouTube video about HIV care */}
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
            {/* Embeds another YouTube video related to the fellowship */}
          </div>
        </section>

        <section className="container mx-auto px-4 py-16 text-center">
          <blockquote className="italic mb-8">
            "Knowledge emerges only through invention and reinvention, the restless, impatient, continuing, hopeful inquiry beings pursue with the world and with others."
            <span className="block mt-4 text-red-600">- Paulo Freire, Pedagogy of the Oppressed</span>
          </blockquote>
          {/* Displays a quote from Paulo Freire */}
          
          <Image src="/images/home/index/aidsvu.png" alt="HIV Map" width={500} height={300} className="mx-auto mb-8" />
          {/* Displays an image related to HIV statistics */}
          
          <p className="text-xl mb-8 text-gray-900">
            Black, Latinx, BIPOC, and LGBTQIA2S+ physicians are strongly encouraged to apply! <br />
            Given current trends in the HIV epidemic, physicians interested in working in the <span className="text-red-600">South</span> and <span className="text-red-600">Mid-Atlantic States</span> are also highly encouraged to apply!
          </p>
          {/* Encourages specific groups to apply to the program */}
          
          <div className="flex justify-center items-center space-x-8">
            <Image src="/images/about/health-services-lac.png" alt="Health Services LAC Logo" width={100} height={100} />
            <Image src="/images/about/kecklogo.jpeg" alt="Keck Logo" width={100} height={100} />
            <Image src="/images/about/aetc-pacific.jpg" alt="AETC Pacific Logo" width={100} height={100} />
            <Image src="/images/about/ucla-ncsp.png" alt="UCLA NCSP Logo" width={100} height={100} />
            <Image src="/images/about/lundquist.png" alt="Lundquist Logo" width={100} height={100} />
            <Image src="/images/about/viivlogo.png" alt="ViiV Logo" width={100} height={100} />
            {/* Displays partner logos with a consistent size */}
          </div>
        </section>
      </main>

      <Footer />
      {/* Renders the Footer component at the bottom of the page */}
    </>
  );
}
