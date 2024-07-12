import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="bg-gray-900 text-white text-center py-20">
          <h1 className="text-5xl font-bold mb-4">About<span className="text-red-600">.</span></h1>
          <p className="text-xl">The HIV Clinical Leadership Program is a two-year postdoctoral fellowship program that focuses on training physicians to enter leadership positions in HIV healthcare.</p>
        </section>
        <section className="container mx-auto px-6 py-12">
          <h2 className="text-3xl font-bold mb-6">Celebrating 20+ years of excellence in HIV specialty training.</h2>
          <img src="/path/to/image.jpg" alt="Celebrating 20+ years" className="mb-8 w-full h-auto" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Established in <span className="text-red-600">2001</span></h3>
              <p>The Los Angeles Area AIDS Education and Training Center (AETC) at USC, a division of the Department of Family Medicine at Keck School of Medicine, created one of the first HIV fellowship programs open to primary care physicians in 2001...</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our <span className="text-red-600">Goal</span></h3>
              <p>Our goal is to train versatile leaders in the field of HIV Medicine who are passionate advocates for all people touched by HIV, particularly vulnerable populations...</p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default AboutPage;
