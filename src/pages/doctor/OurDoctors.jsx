import DoctorCard from "../../components/doctor/doctorCard";
import { carImages } from "../../utils/constants";

export default function OurDoctors() {
  return (
    <div className="relative min-h-screen  flex flex-col items-center py-20 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(54, 180, 156, 0.5), rgba(54, 180, 156, 0.5)), url('/assets/images/doctors/hospital.jpg')` }}>
      <h2 className="text-white text-3xl font-bold">OUR DOCTORS</h2>
      <p className="text-white text-center max-w-2xl mt-2 px-4">
        Incididunt sapiente illo quia praesentium officiis laudantium nostrum, ad adipisci explicabo ab, 
        cupiditate aliquid. Officia laudantium fuga ad voluptate aspernatur error fugiat.
      </p>
      <div className="flex w-screen flex-wrap justify-center gap-6 mt-8">
      <DoctorCard  name="Elina Josh" title="Doctor" image="/assets/images/doctors/doctor1.jpg" />
          <DoctorCard name="Adam View" title="Doctor" image="/assets/images/doctors/doctor2.jpg" />
          <DoctorCard name="Mia Mike" title="Doctor" image="/assets/images/doctors/doctor3.png" />
      </div>
      <button className="mt-6 bg-green-800 text-white px-6 py-2 rounded hover:bg-green-900">View All</button>
    </div>
  );
}

  