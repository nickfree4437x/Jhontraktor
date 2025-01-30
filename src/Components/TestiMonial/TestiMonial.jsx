// src/components/TestimonialsSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import image_1 from './image_1.jpg';
import image_2 from './image_2.jpg';
import image_3 from './image_3.jpg';
import image_4 from './image_4.jpg';
import image_5 from './image_5.jpg';
import image_6 from './image_6.jpg';
import image_7 from './image_7.jpg';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, TechCorp",
      feedback:
        "The team exceeded my expectations. Their attention to detail and professionalism were outstanding.",
      img: image_1,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Manager, BuildIt Inc.",
      feedback:
        "Their innovative solutions and commitment to deadlines made our project a huge success.",
      img: image_2,
    },
    {
      id: 3,
      name: "Samuel Green",
      role: "Architect, DreamWorks",
      feedback:
        "I’m thoroughly impressed by their creativity and dedication to delivering exceptional work.",
      img: image_3,
    },
    {
      id: 4,
      name: "Emily White",
      role: "Designer, HomeStyle",
      feedback:
        "Their work transformed our ideas into reality. Exceptional craftsmanship and service!",
      img: image_4,
    },
    {
      id: 5,
      name: "Michael Brown",
      role: "Project Manager, SkyLine Ltd.",
      feedback:
        "Fantastic work! The team went above and beyond to deliver the best results for our project.",
      img: image_5,
    },
    {
      id: 6,
      name: "Sophia Johnson",
      role: "Founder, GreenField Ventures",
      feedback:
        "Their expertise and attention to detail were evident in every phase of the project. Highly recommended!",
      img: image_6,
    },
    {
      id: 7,
      name: "James Wilson",
      role: "Owner, Wilson Estates",
      feedback:
        "Professional, reliable, and extremely talented. The results speak for themselves!",
      img: image_7,
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-gray-100 dark:bg-gray-900 py-16 duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-600 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600  text-center dark:text-white mb-10">
        We take pride in delivering high-quality construction, renovation, and design services, ensuring client satisfaction at every step.
        </p>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full shadow-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-4">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
