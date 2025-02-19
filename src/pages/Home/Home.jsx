import React from "react";
import OurServices from "../../components/services";
import Footer from "../../components/Footer";
import TopBar from "../../components/TopBar";
import Brand from "../../components/Brand/brand";
import Blog from "../../components/blog/Blog";
import ConstructionLeaders from "../../components/sections/construcionleaders/ConstructionLeaders";
import Hero2 from "../../components/Hero2";
import Stats from "./Stats";
import ExperienceSection from "../../components/sections/About2";
import OverView from "../../components/sections/OverView";
import OurDoctors from "../doctor/OurDoctors";
import Appointment from "../doctor/Appointment";
import ServicesSection from "../doctor/ServicesSection";
import ReviewSection from "../doctor/Reviews";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Hero2 />
      <ExperienceSection />
      <Brand />
      <ServicesSection />
      <Stats />
      <OverView />
      <ReviewSection />
      <ConstructionLeaders />
      <OurDoctors />
      <Blog />
      <Appointment />
      <Footer />
    </div>
  );
};

export default Home;
