import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { carImages } from '../../utils/constants';
import DottedGrid from './DotGrid';

const OverView = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref && !visibleSections[index]) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setVisibleSections((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <div className="  text-white flex flex-col lg:flex-row items-center justify-center px-11 lg:px-32  lg:pb-32 py-32 relative " >
      {/* Images Section */}
      <div className="absolute top-[90px] right-[10px] md:top-[90px] md:right-[40px] lg:top-[90px] lg:left-[105px]">
        <DottedGrid />
      </div>
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`  items-center justify-center blocks ${visibleSections[0] ? 'visible' : ''}`}
      >
        <div
          className=" w-96 h-96 md:w-[40rem] md:h-[40rem] lg:w-[30rem] lg:h-[30rem] px-16 bg-cover bg-center rounded"
          style={{ backgroundImage: 'url(/assets/images/doctors/pharmacy2.png)' }}
        ></div>
      
      </div>

      {/* Text Section */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`mt-6 md:mt-0 lg:ml-12 lg:mr-11 space-y-9 text-left blocks ${visibleSections[1] ? 'visible' : ''}`}
      >
        <h1 className="text-5xl md:mt-11 lg:mt-0 text-secondary lg:text-6xl font-bold">Providing <br />Best Healthcare </h1>
        <p className="text-description mt-4 max-w-[36rem] w-full">
          We are dedicated to delivering top-quality medical care, ensuring patient well-being, and advancing healthcare innovation. Let us be your trusted healthcare provider.
        </p>

        {/* Stats Section */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className={`flex justify-center md:justify-start gap-12 mt-6 blocks ${visibleSections[2] ? 'visible' : ''}`}
        >
          <div>
            <p className="text-4xl font-bold text-primary">33+</p>
            <p className="text-description">Years of Medical Expertise</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">117+</p>
            <p className="text-description">Successful Surgeries</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-primary">48+</p>
            <p className="text-description">Satisfied Patients</p>
          </div>
        </div>

        {/* Button Section */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className={`mt-6 blocks ${visibleSections[3] ? 'visible' : ''}`}
        >
          <button onClick={() =>navigate('/about')} className="bg-primary text-white px-6 py-2 rounded font-bold hover:bg-primary_hover">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverView;
