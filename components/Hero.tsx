import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100">
      <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-teal-100 px-4 py-2 text-sm font-semibold text-teal-700">
          Northern Cyprus' Modern Marketplace
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Find Your Perfect
          <br />
          Home or Car
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Discover verified properties and vehicles with a fast, secure, and
          modern marketplace built for Northern Cyprus.
        </p>

        <div className="mt-10">
          <Button size="lg">
  Start Searching
</Button>
        </div>
      </div>
    </section>
  );
}