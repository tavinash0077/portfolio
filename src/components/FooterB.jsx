import React from 'react';

const FooterB = () => {
  return (
    <div className='py-5 px-40 bg-gray-100'>
      <div className='container mx-auto flex justify-between'>
        <div>
          <p>&copy; Avinash Singh Thakur <span>All Rights Reserved</span></p>
        </div>
        <div className='space-x-3'>
          <a href="/about">About</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/privacy">Licensing</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default FooterB;
