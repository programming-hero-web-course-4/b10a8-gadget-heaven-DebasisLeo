import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="w-11/12 mx-auto space-y-8">
        {/* Gadget Heaven Brand */}
        <div className="text-center">
          <h2 className="text-3xl font-bold">Gadget Heaven</h2>
          <p className="mt-2 text-lg">Leading the way in cutting-edge technology and innovation.</p>
        </div>

        {/* Footer Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Services Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold">Services</h3>
            <p>Product Support</p>
            <p>Order Tracking</p>
            <p>Shipping and Delivery</p>
            <p>Returns</p>
          </div>
          
          {/* Company Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold">Company</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          
          {/* Legal Section */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-xl font-semibold">Legal</h3>
            <p>Terms and Services</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="text-center mt-6">
          <p className="text-sm">Follow us on</p>
          <div className="space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Gadget Heaven. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
