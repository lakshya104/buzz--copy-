import { Button } from '@/components/ui/button';
import React from 'react';

const Support = () => {
  return (
    <div className="w-full px-4 md:px-16 lg:px-40 py-12 bg-white">
      <div className="text-center mb-12">
      <h1 className="text-2xl font-bold text-sky-800">Need Help?</h1>
        <p className="text-lg text-gray-600">Our support team is here to help you</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[22px] font-semibold text-gray-800 mb-6">Contact Us</h2>
          <form action="" method="POST">
            <div className="mb-4">
              <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="mb-4">
              <textarea name="message" rows="4" placeholder="Your Message" className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            </div>
            <Button type="submit" variant="primary">Send Message</Button>
          </form>
        </div>
        
        <div>
          <h2 className="text-[22px] font-semibold text-gray-800 mb-6">FAQs</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-gray-800">How can I reset my password?</h3>
              <p className="text-gray-600">You can reset your password by clicking on the Forgot password link on the login page.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">How do I contact support?</h3>
              <p className="text-gray-600">You can contact us using the form on this page or by emailing us directly at support@buzz.com.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;