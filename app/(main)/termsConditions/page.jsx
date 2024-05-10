import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="w-full px-4 md:px-16 lg:px-40 py-12 bg-gray-50">
     <h1 className="text-2xl font-bold text-center mb-2 text-sky-800">Terms and Conditions</h1>
      <p className="text-lg text-justify mb-6 text-gray-700">
        Welcome to our website. If you continue to browse and use this website,
        you are agreeing to comply with and be bound by the following terms and
        conditions of use, which together with our privacy policy govern
        <strong> Buzz&apos;s</strong> relationship with you in relation to this website. If
        you disagree with any part of these terms and conditions, please do not
        use our website.
      </p>
      <hr className="my-4" />
      <h2 className="text-[22px] font-semibold mb-4 text-gray-800">License</h2>
      <p className="text-lg text-justify mb-6 text-gray-700">
        Unless otherwise stated, <strong className='text-sky-600'>Buzz</strong> and/or its licensors own the
        intellectual property rights for all material on Buzz. All
        intellectual property rights are reserved. You may view and/or print
        pages from <a href="https://buzz-navy.vercel.app" className="text-sky-600 font-semibold underline hover:text-sky-950">Buzz.com</a> for your own personal use subject to
        restrictions set in these terms and conditions.
      </p>
      <hr className="my-4" />
      <h3 className="text-[22px] font-semibold mb-3 text-gray-800">You must not:</h3>
      <ul className="list-disc pl-5 mb-6 text-lg text-gray-700">
        <li>Republish material from Buzz</li>
        <li>Sell, rent or sub-license material from Buzz</li>
        <li>Reproduce, duplicate or copy material from Buzz</li>
        <li>Redistribute content from Buzz (unless content is specifically made for redistribution).</li>
      </ul>
    </div>
  );
};

export default TermsAndConditions;