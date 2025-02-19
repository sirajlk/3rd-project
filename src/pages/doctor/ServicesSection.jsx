import React from "react";
import DottedGrid from "../../components/sections/DotGrid";
import SmallDottedGrid from "../../components/sections/SmallDottedGrid";

const services = [
  {
    title: "Cardiology",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt fermentum amet sit.",
    icon: "❤️",
  },
  {
    title: "Gastroenterologist",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt fermentum amet sit.",
    icon: "🍽️",
  },
  {
    title: "Orthopaedic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris nulla tincidunt fermentum amet sit.",
    icon: "🦴",
  },
];

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-left border border-gray-200 relative w-80 h-64 flex flex-col justify-between">
      <div className="absolute -top-7 left-1/4 transform -translate-x-1/2 bg-[#f4faff] p-3 rounded-full shadow-md border border-[#f4faff]">
        <span className="text-3xl">{icon}</span>
      </div>
      <div className="mt-8">
        <h3 className="text-secondary text-lg font-bold">{title}</h3>
        <p className="text-gray-500 mt-2 text-sm">{description}</p>
      </div>
      <button className="mt-auto border border-blue-500 text-blue-500 px-5 py-2 rounded text-sm font-medium hover:bg-blue-500 hover:text-white transition">
        Learn More
      </button>
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="relative py-16 text-center flex flex-col items-center">
      {/* DottedGrid: Positioned on Top Left */}
      <div className="absolute hidden lg:flex lg:top-[170px] lg:right-[100px]">
        <DottedGrid />
      </div>
      <div className="absolute  top-[270px] right-[32px] md:hidden">
        <SmallDottedGrid />
      </div>
      <h2 className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
        Our Services
      </h2>
      <h1 className="text-4xl font-bold mt-2">
        Healthcare for Your Family’s Health
      </h1>
      <p className="text-description mt-4 max-w-xl mx-auto text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non mauris
        nulla tincidunt fermentum.
      </p>
      <div className="flex justify-center gap-8 mt-12 flex-wrap">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      <button className="mt-10 bg-blue-600 text-white px-10 py-3 rounded shadow-md text-sm font-medium hover:bg-blue-700 transition">
        More Services
      </button>
    </section>
  );
}
