import React from 'react';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import exp from './exp.jpg';
import { FaHardHat, FaRulerCombined, FaUsers, FaAward } from 'react-icons/fa';

const ExperienceSection = () => {
  const stats = [
    { icon: <FaHardHat className="text-orange-500 text-2xl" />, value: "25+", label: "Years Experience" },
    { icon: <FaRulerCombined className="text-blue-500 text-2xl" />, value: "500+", label: "Projects Completed" },
    { icon: <FaUsers className="text-emerald-500 text-2xl" />, value: "300+", label: "Happy Clients" },
    { icon: <FaAward className="text-amber-500 text-2xl" />, value: "42", label: "Awards Won" }
  ];

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden duration-1000">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.website-files.com/5e83fdebae1ad8747df3436e/5e86e0b36407a832f9fce11e_noise.png')] opacity-5 dark:opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-radial from-orange-500/5 via-transparent to-transparent dark:from-orange-600/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src={exp}
                alt="Construction Experience"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold">Building Excellence Since 1998</h3>
                <p className="text-gray-200">Trusted by clients nationwide</p>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                  <FaHardHat className="text-orange-500 dark:text-orange-400 text-xl" />
                </div>
                <div>
                  <div className="text-xl text-amber-600 font-bold">ISO Certified</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Quality Assurance</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-sm font-medium mb-4">
              Our Legacy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Decades of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Construction Excellence</span>
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                With over 25 years of expertise in the construction industry, we've mastered the art of transforming visions into enduring structures. Our journey reflects an unwavering commitment to quality, innovation, and client satisfaction.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                From groundbreaking to ribbon-cutting, we handle projects of all scales with precision, combining traditional craftsmanship with cutting-edge technology to deliver exceptional results that stand the test of time.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-1000"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <Link
                to="project"
                smooth={true}
                duration={600}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-orange-500/30"
              >
                Explore Our Portfolio
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;