import { FiCheckCircle, FiArrowRight } from 'react-icons/fi';
import { Link } from "react-scroll";
import { motion } from 'framer-motion';
import { FaHardHat, FaHome, FaTools, FaTruck } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden min-h-screen flex items-center duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://assets.website-files.com/5e83fdebae1ad8747df3436e/5e86e0b36407a832f9fce11e_noise.png')] opacity-5 dark:opacity-10"></div>
        <div className="absolute top-1/2 left-1/4 w-[200%] h-[200%] bg-gradient-radial from-blue-400/5 via-transparent to-transparent dark:from-blue-600/10 transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 rounded-full text-sm font-medium mb-4">
                Building Excellence Since 2010
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white mb-6">
                Crafting Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Dream Spaces</span> With Precision
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl">
                From visionary concepts to flawless execution, we transform your construction dreams into reality with unmatched expertise and attention to detail.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-16"
            >
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-orange-500/30 flex items-center justify-center group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Explore Services <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
              <Link
                to="project"
                smooth={true}
                duration={600}
                className="relative px-8 py-4 bg-white text-gray-800 font-medium rounded-lg hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-gray-500/10 flex items-center justify-center group border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Our Portfolio <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-white/10 dark:bg-gray-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {[
                { icon: <FaHardHat className="text-2xl text-orange-500" />, text: "Certified Experts" },
                { icon: <FaHome className="text-2xl text-blue-500" />, text: "500+ Projects" },
                { icon: <FaTools className="text-2xl text-amber-500" />, text: "Modern Equipment" },
                { icon: <FaTruck className="text-2xl text-emerald-500" />, text: "On-Time Delivery" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
                  {item.icon}
                  <span className="font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - 3D Construction Showcase */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:w-1/2 relative mt-12 lg:mt-0"
          >
            {/* Main Construction Image Container */}
            <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-lg">
              {/* Layered 3D Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                {/* 3D Building Illustration */}
                <div className="relative w-full h-full">
                  {/* Building Base */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-t-3xl shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-1 w-48 h-48">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div key={i} className="bg-gray-100 dark:bg-gray-500/50 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Crane Animation */}
                  <div className="absolute top-20 right-20 w-40 h-40">
                    <div className="absolute top-0 left-1/2 w-1 h-32 bg-gray-400 dark:bg-gray-600 transform -translate-x-1/2"></div>
                    <div className="absolute top-0 left-1/2 w-24 h-1 bg-gray-400 dark:bg-gray-600 transform -translate-x-1/2"></div>
                    <div className="absolute top-8 left-1/2 w-8 h-8 bg-orange-500 rounded-full transform -translate-x-1/2 animate-float"></div>
                  </div>
                  
                  {/* Construction Workers */}
                  <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaHardHat />
                  </div>
                  <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaTools />
                  </div>
                  
                  {/* Floating Materials */}
                  <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-amber-500 rounded-sm transform rotate-45 shadow-md animate-float-delay"></div>
                  <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-gray-400 rounded-sm shadow-md animate-float-delay-2"></div>
                </div>
              </div>
              
              {/* Reflective Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-gray-900/30 pointer-events-none"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full transform translate-x-16 -translate-y-16 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full transform -translate-x-16 translate-y-16 blur-3xl"></div>
            </div>
            
            {/* Stats Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="text-3xl font-bold text-orange-500">10+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Years Experience</div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 z-10">
              <div className="text-3xl font-bold text-blue-500">500+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Projects Completed</div>
            </div>
            
            {/* Construction Vehicle Animation */}
            <div className="absolute -bottom-10 right-10 w-24 h-24 bg-orange-500 rounded-lg flex items-center justify-center text-white shadow-xl animate-move-right">
              <FaTruck className="text-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Custom Animation Keyframes */}
      <style jsx global>{`
        @keyframes rotate-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(-10px) translateX(-50%); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-15px) rotate(45deg); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes move-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(20px); }
        }
        .animate-rotate-slow {
          animation: rotate-slow 60s linear infinite;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 5s ease-in-out infinite 0.5s;
        }
        .animate-float-delay-2 {
          animation: float-delay-2 6s ease-in-out infinite 1s;
        }
        .animate-move-right {
          animation: move-right 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;