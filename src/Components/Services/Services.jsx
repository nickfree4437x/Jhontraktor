import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBuilding, FaHammer, FaRulerCombined } from 'react-icons/fa';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'High-quality and customized residential construction services to build your dream home. We ensure every detail is meticulously planned and executed.',
      icon: <FaHome className="w-8 h-8" />,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Commercial Projects',
      description: 'Innovative solutions for commercial spaces tailored to your business needs. We deliver projects that enhance productivity and aesthetics.',
      icon: <FaBuilding className="w-8 h-8" />,
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 3,
      title: 'Renovation Services',
      description: 'Transform your spaces with our expert renovation services. We revitalize your property with modern designs and premium craftsmanship.',
      icon: <FaHammer className="w-8 h-8" />,
      color: 'from-amber-500 to-amber-600'
    },
    {
      id: 4,
      title: 'Architecture Design',
      description: 'Creative and sustainable architectural designs that bring your vision to life. We combine innovation with practicality.',
      icon: <FaRulerCombined className="w-8 h-8" />,
      color: 'from-purple-500 to-purple-600'
    },
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 bg-[url('https://assets.website-files.com/5e83fdebae1ad8747df3436e/5e86e0b36407a832f9fce11e_noise.png')]"></div>
      <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-radial from-orange-500/5 via-transparent to-transparent dark:from-orange-600/10 transform -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Construction Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Delivering excellence through every phase of your project with innovative approaches and unmatched expertise.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl overflow-hidden z-0" />
              <div className="relative h-full p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg group-hover:shadow-md transition-all duration-300 z-10 flex flex-col">
                <div className={`mb-6 p-4 bg-gradient-to-r ${service.color} text-white rounded-lg w-16 h-16 flex items-center justify-center`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{service.description}</p>
                <div className="mt-auto">
                  <button className="flex items-center text-sm font-medium text-orange-500 dark:text-orange-400 group-hover:underline">
                    Learn more
                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-orange-500/30">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;