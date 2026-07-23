import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">
        Featured Properties
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>
    </section>
  );
}