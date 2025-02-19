import React from "react";
import { FaBriefcaseMedical, FaUserNurse } from "react-icons/fa";

const HeroSection = () => {
  return (
 <>
 <div
  className="relative h-[85vh]  w-full md:max-h-[65vh] lg:max-h-[100vh] lg:h-screen bg-cover bg-center flex items-center px-11 md:px-32 
             before:absolute before:inset-0 before:bg-black before:opacity-50 lg:before:opacity-0"
  style={{ backgroundImage: "url('/assets/images/doctors/hero.png')" }}
>
  {/* Gradient Blur Overlay */}
  <div className="absolute inset-0 w-1/2 lg:bg-[#e5f1f1] lg:backdrop-blur-md"
           style={{ maskImage: "linear-gradient(to right, rgba(0,0,0,200) 45%, rgba(0,0,0,0) 100%)" }}>
      </div>

   {/* Text Section */}
   <div className="relative z-10 max-w-md text-white lg:text-secondary">
        <h1 className="text-5xl font-bold">Meet The <br /> Best Experts</h1>
        <div className="bg-red-500 w-12 h-1 mt-3" />
        <p className="my-4">Every day is a new opportunity for you < br/> to do something for your health.</p>
        <button className="bg-red-500 text-white font-poppins font-bold px-6 py-2 text-sm  mt-4 rounded-full">Find A Doctor</button>
      </div>
      </div>
      
    <div className=" relative px-3 w-full items-center justify-center flex -inset-y-28 ">
    <div className="   w-full lg:w-3/4 flex">
       <div className="flex-1 py-20 bg-primary rounded-tl-xl rounded-bl-xl text-white text-center  px-4">
         <FaBriefcaseMedical className="mx-auto text-2xl lg:text-4xl" />
         <p className="lg:font-bold mt-2">Health Information</p>
       </div>
       <div className="flex-1 py-20  bg-primary_hover  text-white text-center  px-4">
         <FaUserNurse className="mx-auto text-2xl lg:text-4xl" />
         <p className="lg:font-bold mt-2">Doctor Timetable</p>
       </div>
       <div className="flex-1 py-20 bg-primary rounded-tr-xl rounded-br-xl text-white text-center  px-4">
         <FaUserNurse className="mx-auto text-2xl lg:text-4xl" />
         <p className="lg:font-bold mt-2">Medical Education</p>
       </div>
     </div>
    </div>
     </>
  );
};

export default HeroSection;
