import React from 'react';
import Navbar from '../components/Navbar';

const Apply: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Apply</h1>
        <p className="text-lg mb-4">Application details...</p>
      </div>
    </>
  );
};

export default Apply;
