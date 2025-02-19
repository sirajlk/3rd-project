import React from 'react';
import DottedGrid from './DotGrid';

const ExperienceSection = () => {
  return (
    <div className="relative py-16 px-6  lg:px-32 sm:px-16">
           <div className="absolute top-[25px] left-[10px] md:top-[25px] md:left-[40px] lg:top-[25px] lg:left-[100px]">
        <DottedGrid />
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8  lg:gap-8 items-center">
        {/* Left Section (Image + Play Icon) */}
        <div className="relative flex justify-center items-center">
          {/* Background Shapes */}
          {/* Image */}
          <img
            src="/assets/images/doctors/hospital.jpg"
            className="relative object-cover rounded-lg shadow-lg"
          />

       
        </div>

        {/* Right Section (Text Content) */}
        <div>
          <p className="text-sm text-primary uppercase">Welcome to Builder</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            25 Years Experience
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
