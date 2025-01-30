// src/components/ProjectStepsHorizontalLine.jsx
import React from 'react';

const ProjectStepsHorizontalLine = () => {
  return (
    <section
      id="project-steps"
      className="bg-gray-50 dark:bg-gray-900 py-16 duration-1000"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-orange-600 dark:text-orange-600 mb-4">
          Our Workflow Process
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-200 mb-12">
          A streamlined approach to ensure every project is completed efficiently and effectively.
        </p>

        {/* Horizontal Line Container */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Step 1: Planning */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 mt-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
              Step 1: Planning & Designing
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Laying out the roadmap and creating initial designs for the project.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>

          {/* Step 2: Design & Development */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 mt-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
              Step 2: Design & Development
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Transforming designs into functional and user-friendly solutions.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>

          {/* Step 3: Construction */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 mt-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
              Step 3: Construction
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Building the project with precision and adhering to high standards.
            </p>
          </div>

          {/* Divider Line */}
          <div className="hidden md:block w-32 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></div>

          {/* Step 4: Testing & Handover */}
          <div className="flex flex-col items-center">
            <div className="w-10 h-10 mt-16 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-100">
              Step 4: Testing & Handover
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Ensuring quality and delivering the completed project to the client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStepsHorizontalLine;
