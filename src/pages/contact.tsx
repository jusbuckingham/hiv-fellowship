// src/pages/contact.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen">
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold">Contact Us.</h1>
            <p className="mt-4 text-xl">We look forward to hearing from you!</p>
          </div>
        </section>
        <section className="container mx-auto px-6 py-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">To request additional information, please contact the Director of Operations:</h2>
            <p className="mt-4 text-xl">
              <strong>Shanna Livermore, MPH, MCHES®, FRSPH</strong><br />
              Director of Operations, HIV Clinical Leadership Program<br />
              Co-Director, Pacific AIDS Education and Training Center at USC<br />
              EMAIL: <a href="mailto:shanna.livermore@med.usc.edu" className="text-red-600">shanna.livermore@med.usc.edu</a>
            </p>
          </div>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                  First Name *
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="First Name"
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
                ></textarea>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
        <section className="bg-gray-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold">HIV Clinical Leadership Program</h2>
            <p className="mt-4 text-xl">
              1000 S. Fremont Ave. Unit 22, Building A-7, 4th Floor<br />
              Alhambra, CA 91803
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
