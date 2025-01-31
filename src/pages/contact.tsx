import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Head>
        <title>Contact Us | HIV Clinical Leadership Program</title>
        <meta name="description" content="Get in touch with the HIV Clinical Leadership Program. We look forward to hearing from you!" />
        <meta name="keywords" content="HIV Clinical Leadership Program, contact, information, healthcare" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <Navbar />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="bg-gray-900 text-white py-20 text-center">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us<span className="text-red-600">.</span></h1>
          <p className="text-xl">We look forward to hearing from you!</p>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Contact Information<span className="text-red-600">.</span></h2>
          <p className="mt-4 text-xl text-gray-700">
            <strong>Shanna Livermore, MPH, MCHES®, FRSPH</strong><br />
            Director of Operations, HIV Clinical Leadership Program<br />
            Co-Director, Pacific AIDS Education and Training Center at USC<br />
            Email: <a href="mailto:shanna.livermore@med.usc.edu" className="text-red-600 hover:underline">shanna.livermore@med.usc.edu</a>
          </p>
        </section>

        {/* Contact Form */}
        <section className="container mx-auto px-6 py-16 bg-white shadow-md rounded-lg">
          <form aria-label="Contact form" className="space-y-6">
            {[
              { label: 'First Name', id: 'firstName', type: 'text', placeholder: 'First Name' },
              { label: 'Last Name', id: 'lastName', type: 'text', placeholder: 'Last Name' },
              { label: 'Email', id: 'email', type: 'email', placeholder: 'Email' },
            ].map((field, index) => (
              <div key={index}>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.id}>{field.label} *</label>
                <input
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message *</label>
              <textarea
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Your message here"
                rows={5}
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </section>

        {/* Location Section */}
        <section className="bg-gray-900 text-white py-20 text-center">
          <h2 className="text-3xl font-bold">HIV Clinical Leadership Program<span className="text-red-600">.</span></h2>
          <p className="mt-4 text-xl">1000 S. Fremont Ave. Unit 22, Building A-7, 4th Floor<br /> Alhambra, CA 91803</p>
        </section>

        {/* Google Map */}
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
