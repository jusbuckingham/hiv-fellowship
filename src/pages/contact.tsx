import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <section className="bg-gray-900 text-white py-20" role="banner">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold">Contact Us<span className="text-red-600">.</span></h1>
            <p className="mt-4 text-xl">We look forward to hearing from you!</p>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12">
          <h2 className="sr-only">Contact Information</h2>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">To request additional information, please contact the Director of Operations:</h2>
            <p className="mt-4 text-xl">
              <strong>Shanna Livermore, MPH, MCHES®, FRSPH</strong><br />
              Director of Operations, HIV Clinical Leadership Program<br />
              Co-Director, Pacific AIDS Education and Training Center at USC<br />
              EMAIL: <a href="mailto:shanna.livermore@med.usc.edu" className="text-red-600 hover:underline">shanna.livermore@med.usc.edu</a>
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-12">
            <form aria-label="Contact form">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                  Last Name *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message *
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your message here"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-gray-900 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white">HIV Clinical Leadership Program</h2>
            <p className="mt-4 text-xl">
              1000 S. Fremont Ave. Unit 22, Building A-7, 4th Floor<br />
              Alhambra, CA 91803
            </p>
          </div>
        </section>
        <div className="mt-8 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3302.524405607564!2d-118.15421768478143!3d34.090621480598654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c46d2781086b%3A0xa6d061fa3e4aa465!2s1000%20S%20Fremont%20Ave%2C%20Alhambra%2C%20CA%2091803!5e0!3m2!1sen!2sus!4v1629837615824!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            aria-label="Map showing the location of 1000 S. Fremont Ave, Alhambra, CA 91803"
          ></iframe>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
