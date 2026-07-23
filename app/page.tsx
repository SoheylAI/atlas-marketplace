import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex items-center justify-center h-[80vh]">
        <h1 className="text-5xl font-bold">
          Welcome to Atlas Marketplace
        </h1>
      </main>
    </>
  );
}