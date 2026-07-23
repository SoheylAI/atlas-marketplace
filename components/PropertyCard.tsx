export default function PropertyCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="h-56 bg-gray-300 flex items-center justify-center">
        Image
      </div>

      <div className="p-5">
        <h3 className="text-2xl font-bold">Luxury Apartment</h3>

        <p className="text-gray-600 mt-2">
          Kyrenia, Northern Cyprus
        </p>

        <p className="text-teal-600 font-bold text-xl mt-4">
          £185,000
        </p>

        <button className="mt-5 w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl">
          View Details
        </button>
      </div>
    </div>
  );
}