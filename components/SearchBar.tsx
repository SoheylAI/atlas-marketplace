export default function SearchBar() {
  return (
    <section className="mx-auto -mt-16 max-w-7xl px-6 relative z-20">
      <div className="rounded-3xl bg-white p-6 shadow-2xl">

        <div className="mb-6 flex gap-3">
          <button className="rounded-full bg-teal-600 px-5 py-2 text-white font-semibold">
            Buy
          </button>

          <button className="rounded-full border px-5 py-2 font-semibold">
            Rent
          </button>

          <button className="rounded-full border px-5 py-2 font-semibold">
            Cars
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-5">

          <input
            type="text"
            placeholder="City"
            className="rounded-xl border p-4"
          />

          <select className="rounded-xl border p-4">
            <option>Property Type</option>
            <option>Apartment</option>
            <option>House</option>
            <option>Villa</option>
          </select>

          <select className="rounded-xl border p-4">
            <option>Price</option>
            <option>£50k - £100k</option>
            <option>£100k - £250k</option>
            <option>£250k+</option>
          </select>

          <input
            type="text"
            placeholder="Keywords"
            className="rounded-xl border p-4"
          />

          <button className="rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 transition">
            Search
          </button>

        </div>

      </div>
    </section>
  );
}