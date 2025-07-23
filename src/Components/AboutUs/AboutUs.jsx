import React from 'react';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { FaHardHat, FaAward, FaUsers, FaLeaf } from 'react-icons/fa';
import checking from './checking.jpg';

const AboutUs = () => {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.website-files.com/5e83fdebae1ad8747df3436e/5e86e0b36407a832f9fce11e_noise.png')] opacity-5 dark:opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-radial from-orange-500/5 via-transparent to-transparent dark:from-orange-600/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Excellence</span> Since Day One
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Image with Decorative Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={checking}
                alt="About Jhontraktor"
                className="w-full h-auto object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold">Our Team at Work</h3>
                <p className="text-gray-200">Delivering quality since 2010</p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center gap-3">
                <FaAward className="text-2xl text-orange-500" />
                <div>
                  <div className="text-2xl text-amber-500 font-bold">25+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Awards Won</div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-5 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 z-10">
              <div className="flex items-center gap-3">
                <FaUsers className="text-2xl text-blue-500" />
                <div>
                  <div className="text-2xl text-blue-500 font-bold">150+</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">Team Members</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Text and Features */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Pioneers in Construction Excellence
            </h3>

            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Founded in 2010, Jhontraktor has grown from a small local contractor to a leading construction firm known for innovative solutions and impeccable craftsmanship. Our journey reflects our commitment to transforming visions into enduring structures.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                We combine decades of collective experience with cutting-edge technology to deliver projects that stand the test of time while meeting the highest standards of sustainability and efficiency.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <FaHardHat className="text-orange-500 text-xl" />, title: "Expert Team", text: "Certified professionals with 10+ years experience" },
                { icon: <FaLeaf className="text-emerald-500 text-xl" />, title: "Eco-Friendly", text: "Sustainable practices in all our projects" },
                { icon: <FaAward className="text-amber-500 text-xl" />, title: "Quality Focus", text: "Rigorous quality control processes" },
                { icon: <FaUsers className="text-blue-500 text-xl" />, title: "Client-Centric", text: "Personalized solutions for every client" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-orange-50 dark:bg-gray-700 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{feature.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{feature.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="services"
                smooth={true}
                duration={600}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all shadow-md hover:shadow-orange-500/30"
              >
                Discover Our Services
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

export default AboutUs;