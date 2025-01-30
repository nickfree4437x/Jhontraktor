// src/components/CounterAnimation.jsx
import React, { useEffect, useState } from 'react';
import { FaBuilding, FaSmileBeam, FaTools, FaTrophy } from 'react-icons/fa';

const counters = [
  {
    id: 1,
    icon: <FaBuilding className="text-blue-500 text-6xl mb-4" />,
    title: 'Projects Completed',
    endValue: 120,
  },
  {
    id: 2,
    icon: <FaSmileBeam className="text-yellow-500 text-6xl mb-4" />,
    title: 'Happy Clients',
    endValue: 300,
  },
  {
    id: 3,
    icon: <FaTools className="text-green-500 text-6xl mb-4" />,
    title: 'Years of Experience',
    endValue: 25,
  },
  {
    id: 4,
    icon: <FaTrophy className="text-red-500 text-6xl mb-4" />,
    title: 'Awards Won',
    endValue: 50,
  },
];

const Counter = ({ icon, title, endValue }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const increment = endValue / (duration / 50);
    const counter = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(counter);
      }
      setCount(Math.ceil(start));
    }, 50);

    return () => clearInterval(counter);
  }, [endValue]);

  return (
    <div className="text-center transition-transform transform hover:scale-105">
      <div className='flex justify-center'>{icon}</div>
      <h3 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">{count}</h3>
      <p className="text-lg text-gray-500 dark:text-gray-300 mt-2">{title}</p>
    </div>
  );
};

const CounterAnimation = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-1000">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-orange-600 dark:text-orange-600 mb-4">
          Our Achievements
        </h2>
        <p className="text-lg text-gray-700 text-center dark:text-white mb-12">
        Our achievements reflect our dedication to excellence and innovation.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              icon={counter.icon}
              title={counter.title}
              endValue={counter.endValue}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterAnimation;
