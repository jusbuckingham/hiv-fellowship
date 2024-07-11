import React from 'react';
import Navbar from '../components/Navbar';

const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">Contact information...</p>
      </div>
    </>
  );
};

export default Contact;
