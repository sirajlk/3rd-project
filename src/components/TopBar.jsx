import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";

export default function TopBar() {
  return (
    <div className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-8 text-sm text-gray-700">
        {/* Left Side: Logo */}
        <div className=" font-bold">
          <img src="/assets/images/doctors/logo.png" alt="" className="h-9" />
        </div>

        {/* Center: Menu */}
  

        {/* Right Side: Info */}
        <div className="hidden md:flex space-x-6 text-gray-600">
          <div className="flex items-center space-x-2">
            <FaClock />
            <span>MON - FRI: 08:00AM - 20:00PM</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>+0800 2466 7921</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>34TH AVENUE, New York, W2 3XE</span>
          </div>
        </div>

      
      </div>

    <div className="bg-gray-200 w-full md:h-[1px]" />

      <div className="md:py-4 px-[4.5rem]">
      <div className="hidden md:flex text-sm space-x-6 font-medium">
          <a href="#" className="text-red-500 border-b-2 border-red-500 pb-1">HOME</a>
          <a href="#" className="hover:text-red-500">PAGES</a>
          <a href="#" className="hover:text-red-500">DOCTORS</a>
          <a href="#" className="hover:text-red-500">TIMETABLE</a>
          <a href="#" className="hover:text-red-500">BLOG</a>
          <a href="#" className="hover:text-red-500">SHOP</a>
          <a href="#" className="hover:text-red-500">ELEMENTS</a>
        </div>
      </div>
    </div>
  );
}
