export default function Appointment() {
    return (
      <div className="flex flex-col lg:flex-row  lg:space-y-0 lg:pt-32 lg:pb-32 md:px-32 space-y-11 pb-20  pt-20  bg-cyan-500 px-6 lg:px-32 items-center">
        {/* Left Side */}
        <div className="lg:w-1/2 text-white  lg:pr-10">
          <h3 className="uppercase font-bold text-lg">Appointment</h3>
          <h2 className="text-4xl font-bold mt-2">Make An Appointment For Your Family</h2>
          <p className="mt-4 text-lg">
            Proactively harness mission-critical interfaces via turnkey total linkage. 
            Effectively underwhelm innovative methods of empowerment without multimedia based materials. 
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-black  text-white px-6 py-3 rounded-full">Find Doctor</button>
            <button className="border border-black text-black px-6 py-3 rounded-full">Book Now</button>
          </div>
        </div>
        
        {/* Right Side */}
        <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Book An Appointment</h3>
          <div className="grid grid-cols-2 gap-4">
            <select className="border p-3 rounded">
              <option>Choose Department</option>
            </select>
            <select className="border p-3 rounded">
              <option>Select Doctor</option>
            </select>
            <input type="text" placeholder="Your Name" className="border p-3 rounded" />
            <input type="text" placeholder="Your Email" className="border p-3 rounded" />
            <input type="text" placeholder="Date" className="border p-3 rounded" />
            <input type="text" placeholder="Time" className="border p-3 rounded" />
          </div>
          <button className="mt-6 w-full bg-cyan-500 text-white py-3 rounded">Book An Appointment</button>
        </div>
      </div>
    );
  }
  