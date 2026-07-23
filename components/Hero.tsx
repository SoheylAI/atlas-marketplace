import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 px-6">
      <h1 className="text-6xl font-bold max-w-4xl">
        Find Your Perfect Home or Car in Northern Cyprus
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Discover verified properties and vehicles with a modern, secure, and
        easy-to-use marketplace.
      </p>

      <div className="mt-10">
        <Button text="Start Searching" />
      </div>
    </section>
  );
}