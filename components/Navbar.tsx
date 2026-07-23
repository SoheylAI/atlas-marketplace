import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-teal-600">
          Atlas
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/">Home</Link>
          <Link href="/properties">Properties</Link>
          <Link href="/cars">Cars</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <button className="rounded-xl bg-teal-600 px-5 py-2 text-white font-semibold hover:bg-teal-700 transition">
          Sign In
        </button>
      </div>
    </header>
  );
}