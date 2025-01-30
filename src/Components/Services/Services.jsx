// src/components/OurServices.jsx
import React from 'react';

const services = [
  {
    id: 1,
    title: 'Residential Construction',
    description: 'High-quality and customized residential construction services to build your dream home. We ensure every detail is meticulously planned and executed, providing a space that reflects your vision and lifestyle.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Commercial Projects',
    description: 'Innovative and very efficient solutions for commercial spaces tailored to your business needs. Our team delivers projects that enhance productivity, aesthetics, and functionality, ensuring a thriving work environment.',
    icon: '🏢',
  },
  {
    id: 3,
    title: 'Renovation Services',
    description: 'Transform your spaces with our expert renovation and remodeling services. From concept to completion, we revitalize your property with modern designs and premium quality craftsmanship.',
    icon: '🔧',
  },
  {
    id: 4,
    title: 'Architecture Design',
    description: 'Creative and very sustainable architectural designs that bring your vision to life. We combine innovation with practicality to deliver designs that are both functional and aesthetically pleasing.',
    icon: '📐',
  },
];

const OurServices = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-orange-500 dark:bg-orange-500 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-white dark:text-gray-800 mb-6">
          Our Services
        </h2>
        <p className="text-lg text-white text-center dark:text-gray-700 mb-12">
        Our services are designed to bring your vision to life with precision and excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 bg-gray-100 dark:bg-gray-800 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-200"
              style={{ maxWidth: '300px', margin: '0 auto' }}
            >
              <div className="text-4xl mb-4 text-blue-500 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-justify dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
