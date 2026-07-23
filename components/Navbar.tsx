export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 border-b">
      <h1 className="text-2xl font-bold text-teal-600">
        Atlas Marketplace
      </h1>

      <div className="flex gap-8">
        <a href="#">Buy</a>
        <a href="#">Rent</a>
        <a href="#">Sell</a>
        <a href="#">Cars</a>
        <a href="#">Login</a>
      </div>
    </nav>
  );
}