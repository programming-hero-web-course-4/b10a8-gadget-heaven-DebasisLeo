import React, { useEffect } from 'react';
import { FaLightbulb, FaHandshake, FaRocket, FaUsers } from 'react-icons/fa'; // Import React Icons
import AOS from 'aos';
import 'aos/dist/aos.css';
import mission from '../assets/mission.png'
import vision from '../assets/vision.png'

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-6 text-center" data-aos="fade-down">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          Discover our story, our mission, and the values that drive us to bring the best technology products to you.
        </p>
      </div>

      {/* Our Mission */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8" data-aos="fade-up">
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-purple-600 mb-4 flex items-center gap-2">
              <FaLightbulb className="text-yellow-500" /> Our Mission
            </h2>
            <p className="leading-relaxed">
              At <strong>TechUpgrade</strong>, we are committed to enhancing your lifestyle with cutting-edge technology. From laptops to smartphones, we curate the best products to meet your needs and exceed expectations.
            </p>
          </div>
          <img
            src={mission}
            alt="Our Mission"
            className="rounded-lg shadow-lg md:w-1/2"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-12 px-6" data-aos="zoom-in">
        <h2 className="text-center text-3xl font-bold text-blue-600 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center" data-aos="flip-left">
            <FaUsers className="text-purple-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Customer-Centric</h3>
            <p className="text-gray-600">We put our customers first and prioritize satisfaction.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center" data-aos="flip-left" data-aos-delay="200">
            <FaHandshake className="text-blue-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Trusted Products</h3>
            <p className="text-gray-600">We only sell high-quality, trusted technology products.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center" data-aos="flip-left" data-aos-delay="400">
            <FaRocket className="text-green-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Quick and reliable delivery right to your doorstep.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center" data-aos="flip-left" data-aos-delay="600">
            <FaLightbulb className="text-yellow-500 text-5xl mb-4 mx-auto" />
            <h3 className="text-lg font-bold mb-2">Innovation</h3>
            <p className="text-gray-600">We bring you the latest tech innovations every day.</p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="max-w-6xl mx-auto py-12 px-6" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={vision}
            alt="Our Vision"
            className="rounded-lg shadow-lg md:w-1/2"
          />
          <div className="md:w-1/2 text-gray-700">
            <h2 className="text-3xl font-bold text-purple-600 mb-4 flex items-center gap-2">
              <FaRocket className="text-green-500" /> Our Vision
            </h2>
            <p className="leading-relaxed">
              We envision a future where technology seamlessly integrates into everyday life, enhancing productivity, creativity, and connection. Join us in exploring the latest innovations that will shape tomorrow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
