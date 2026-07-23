export default function SearchBar() {
  return (
    <section className="max-w-6xl mx-auto -mt-12 px-6 relative z-10">
      <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-wrap gap-4">
        <select className="border rounded-lg px-4 py-3 flex-1">
          <option>Property Type</option>
          <option>House</option>
          <option>Apartment</option>
          <option>Villa</option>
        </select>

        <select className="border rounded-lg px-4 py-3 flex-1">
          <option>Location</option>
          <option>Nicosia</option>
          <option>Kyrenia</option>
          <option>Famagusta</option>
        </select>

        <select className="border rounded-lg px-4 py-3 flex-1">
          <option>Price Range</option>
          <option>£50k - £100k</option>
          <option>£100k - £250k</option>
          <option>£250k+</option>
        </select>

        <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition">
          Search
        </button>
      </div>
    </section>
  );
}