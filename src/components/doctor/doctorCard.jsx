const DoctorCard = ({ name, title, image }) => {
    return (
      <div className="bg-white pb-4 rounded-lg shadow-md text-center md:w-64 w-80">
        <img src={image} alt={name} className="w-full h-64 object-cover rounded-md" />
        <h3 className="mt-4 text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    );
  }

  export default DoctorCard