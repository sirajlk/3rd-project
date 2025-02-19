import React, { useEffect, useRef, useState } from 'react';
import './ConstructionLeadersAnimation.css';

const ConstructionLeaders = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation
            observer.unobserve(entry.target); // Stop observing after triggering
          }
        });
      },
      { threshold: 0.4 } // 25% visibility
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={animationRef}
      id="animation-container"
      className="text-gray-800 font-sans p-6 sm:p-20 relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Section */}
        <div
          className={`words text-section ${isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold">
            WE ARE <span className="text-primary">THE LEADER</span> IN
            <br /> HEALTHCARE INDUSTRY
          </h1>

          <p className="text-gray-600 mt-6">
            Providing exceptional medical care with state-of-the-art facilities and a compassionate team dedicated to your well-being.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Advanced Treatments
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Expert Medical Staff
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Patient-Centered Care
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Emergency Services
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Modern Facilities
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Compassionate Care
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-6">
            Our hospital is committed to excellence in patient care, medical innovation, and improving health outcomes for all.
          </p>

        </div>

        {/* Image Section */}
        <div
          className={`blocks image-section ${isVisible ? 'visible' : ''}`}
        >
          <img
            src="/assets/images/doctors/pharmacy4.png"
            alt="Healthcare Professionals"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ConstructionLeaders;