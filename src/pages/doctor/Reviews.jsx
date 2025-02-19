import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { carImages } from "../../utils/constants";

const ReviewSection = () => {
  return (
    <section className="py-16 text-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 130, 188, 0.5), rgba(0, 130, 188, 0.5)), url(${carImages[7]})`}}>
      <div className="max-w-2xl mx-auto px-6 relative">
        <FaQuoteLeft className="text-4xl text-white mx-auto mb-4" />
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. 
          Quisque placerat scelerisque felis vitae tortor augue. Velit nascetur consequat faucibus porttitor enim et.
        </p>
        <div className="mt-6">
          <hr className="w-24 border-t-2 border-white mx-auto mb-2" />
          <p className="text-sm font-semibold">John Doe</p>
        </div>
        <div className="mt-4 flex justify-center space-x-2">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;