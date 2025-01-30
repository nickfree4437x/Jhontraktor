// src/components/FAQSection.jsx
import React, { useState } from "react";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including construction, renovation, architectural design, and interior design.",
    },
    {
      question: "How can I request a quote?",
      answer:
        "You can request a quote by filling out our contact form or giving us a call. We will get back to you promptly.",
    },
    {
      question: "Are your services available nationwide?",
      answer:
        "Yes, we provide our services across the country and are committed to delivering quality work wherever you are located.",
    },
    {
      question: "Do you offer customized designs?",
      answer:
        "Absolutely! We work closely with our clients to create customized designs that meet their specific needs and preferences.",
    },
    {
      question: "What is the typical timeline for a project?",
      answer:
        "The timeline depends on the scope and complexity of the project. We provide a detailed timeline during the planning phase.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including bank transfers, credit cards, and online payment systems for your convenience.",
    },
    {
      question: "Can you handle large-scale commercial projects?",
      answer:
        "Yes, we have extensive experience in handling both small and large-scale commercial projects with efficiency and professionalism.",
    },
    {
      question: "Do you provide warranties for your work?",
      answer:
        "Yes, we stand by the quality of our work and offer warranties for all completed projects to ensure customer satisfaction.",
    },
    {
      question: "How do I schedule a consultation?",
      answer:
        "Scheduling a consultation is easy. Simply contact us via phone or email, and we will arrange a suitable time for you.",
    },
    {
      question: "What is your approach to sustainable construction?",
      answer:
        "We prioritize sustainability by using eco-friendly materials and practices, ensuring minimal environmental impact throughout our projects.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gray-100 dark:bg-gray-900 py-16 duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-orange-600 dark:text-orange-500 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-700  text-center dark:text-white mb-10">
        Our FAQs section is designed to provide quick and clear answers to common inquiries about our services, processes, and policies.
        </p>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden duration-1000"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <h3 className="text-lg font-2xl text-gray-700 dark:text-gray-100">
                  {faq.question}
                </h3>
                <span
                  className={`text-orange-600 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
