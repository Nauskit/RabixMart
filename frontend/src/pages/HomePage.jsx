export default function Homepage() {
  const products = [
    {
      id: 1,
      name: "Minimalist Watch",
      price: "$99.00",
      image: "https://images.unsplash.com/photo-1523275335658-0f3d3f4032b0",
    },
    {
      id: 2,
      name: "Leather Bag",
      price: "$149.00",
      image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d",
    },
    {
      id: 3,
      name: "Sneakers",
      price: "$79.00",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 4,
      name: "Sunglasses",
      price: "$59.00",
      image: "https://images.unsplash.com/photo-1577805947697-89e182386d99",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Rabix Mart</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/shop" className="text-gray-600 hover:text-indigo-600">
                Shop
              </a>
              <a href="/cart" className="text-gray-600 hover:text-indigo-600">
                Cart
              </a>
              <a href="/login" className="text-gray-600 hover:text-indigo-600">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative">
        <img
          src="https://images.unsplash.com/photo-1555529771-835f59fc5efe"
          alt="E-commerce hero banner"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Discover the Latest Trends
            </h2>
            <p className="text-lg mb-6">Shop our exclusive collection today!</p>
            <a
              href="/shop"
              className="bg-indigo-600 text-white py-2 px-6 rounded-md hover:bg-indigo-700"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.price}</p>
                <a
                  href={`/product/${product.id}`}
                  className="mt-4 inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2025 RabixMart. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/about" className="hover:text-indigo-400">
                About
              </a>
              <a href="/contact" className="hover:text-indigo-400">
                Contact
              </a>
              <a href="/privacy" className="hover:text-indigo-400">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
