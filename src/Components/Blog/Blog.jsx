// src/components/BlogSection.jsx
import React from "react";
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';
import image_5 from './image_5.jpg';
import image_6 from './image_6.jpg';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      title: "5 Tips for Efficient Construction Planning",
      description:
        "Learn the essential tips to streamline your construction projects and deliver on time.",
      img: image_1,
      date: "January 20, 2025",
      author: "John Doe",
    },
    {
      id: 2,
      title: "Top Trends in Modern Architecture",
      description:
        "Explore the latest trends shaping the future of architectural designs worldwide.",
      img: image_2,
      date: "January 18, 2025",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "Sustainable Building Materials You Should Know",
      description:
        "Discover eco-friendly building materials that can help reduce your carbon footprint.",
      img: image_3,
      date: "January 15, 2025",
      author: "Emily Johnson",
    },
    {
      id: 4,
      title: "How to Renovate Your Home on a Budget",
      description:
        "Practical tips and tricks to give your home a fresh look without breaking the bank.",
      img: image_4,
      date: "January 10, 2025",
      author: "Michael Brown",
    },
    {
      id: 5,
      title: "Interior Design Ideas for Small Spaces",
      description:
        "Maximize your space with these innovative and stylish interior design ideas.",
      img: image_5,
      date: "January 5, 2025",
      author: "Sarah Lee",
    },
    {
      id: 6,
      title: "The Future of Urban Infrastructure",
      description:
        "Uncover how cities are evolving with smart technology and sustainable practices.",
      img: image_6,
      date: "January 2, 2025",
      author: "David Kim",
    },
  ];

  return (
    <section
      id="blog"
      className="bg-orange-500 dark:bg-orange-500 py-16 duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white dark:text-gray-800 mb-6 text-center">
          Our Latest Blogs
        </h2>
        <p className="text-lg text-white  text-center dark:text-gray-600 mb-10">
        Our Latest Blogs section keeps you updated with the newest trends and expert tips in the construction, architecture, and design industry.
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white dark:bg-gray-800 shadow-lg rounded-lg duration-200 overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {blog.date} • By {blog.author}
                </p>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 group-hover:text-orange-500">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {blog.description}
                </p>
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
