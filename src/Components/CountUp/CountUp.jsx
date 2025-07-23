import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaSmileBeam, FaTools, FaTrophy } from 'react-icons/fa';
import { GiCrane } from 'react-icons/gi';

const CounterAnimation = () => {
  const counters = [
    {
      id: 1,
      icon: <FaBuilding className="w-8 h-8" />,
      title: 'Projects Completed',
      endValue: 250,
      suffix: '+',
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    },
    {
      id: 2,
      icon: <FaSmileBeam className="w-8 h-8" />,
      title: 'Happy Clients',
      endValue: 500,
      suffix: '+',
      color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400'
    },
    {
      id: 3,
      icon: <FaTools className="w-8 h-8" />,
      title: 'Years of Experience',
      endValue: 15,
      suffix: '+',
      color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400'
    },
    {
      id: 4,
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'Awards Won',
      endValue: 42,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
    },
  ];

  const Counter = ({ icon, title, endValue, suffix = '', color }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const duration = 2000;
      const increment = endValue / (duration / 16); // Using requestAnimationFrame timing

      const animateCount = () => {
        start += increment;
        if (start < endValue) {
          setCount(Math.ceil(start));
          requestAnimationFrame(animateCount);
        } else {
          setCount(endValue);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animateCount);
      }, 200); // Small delay for staggered animation

      return () => clearTimeout(timer);
    }, [endValue]);

    return (
      <motion.div 
        whileHover={{ y: -10 }}
        className="relative h-full"
      >
        <div className="h-full p-8 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all flex flex-col items-center text-center">
          <div className={`mb-6 p-4 ${color} rounded-full`}>
            {icon}
          </div>
          <div className="flex items-end justify-center mb-2">
            <span className="text-5xl font-bold text-gray-900 dark:text-white">
              {count}
            </span>
            {suffix && (
              <span className="text-3xl font-bold text-gray-900 dark:text-white ml-1">
                {suffix}
              </span>
            )}
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">{title}</p>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 bg-[url('https://assets.website-files.com/5e83fdebae1ad8747df3436e/5e86e0b36407a832f9fce11e_noise.png')]"></div>
      <div className="absolute top-1/2 left-1/2 w-[120%] h-[120%] bg-gradient-radial from-orange-500/5 via-transparent to-transparent dark:from-orange-600/10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-10 right-10 opacity-10 dark:opacity-20">
        <GiCrane className="w-32 h-32 text-gray-400 dark:text-gray-600" />
      </div>

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
            Our Milestones
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Success</span> Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Numbers that showcase our commitment to excellence and client satisfaction in every project we undertake.
          </p>
        </motion.div>

        {/* Counters grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => (
            <motion.div
              key={counter.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Counter 
                icon={counter.icon}
                title={counter.title}
                endValue={counter.endValue}
                suffix={counter.suffix}
                color={counter.color}
              />
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-orange-400/10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default CounterAnimation;