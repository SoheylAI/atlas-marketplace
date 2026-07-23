import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import FeaturedProperties from "@/components/FeaturedProperties";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
      <FeaturedProperties />
    </>
  );
}