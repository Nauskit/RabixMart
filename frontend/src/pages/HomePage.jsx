import { useEffect, useState } from "react";

export default function Homepage() {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
  const [isLogin, setIsLogin] = useState(false);


  useEffect(() => {

    const fethProduct = async () => {
      try {
        const resProduct = await fetch('http://localhost:3000/product/', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        const data = await resProduct.json();
        setProducts(data);
        setIsLogin(true);
      } catch (err) {
        setError(err.message)
      }
    }


    fethProduct();
  }, [])




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
              {!isLogin ? (
                <a href="/login" className="text-gray-600 hover:text-indigo-600">
                  Login
                </a>
              ) : (
                <a className="text-gray-600 hover:text-indigo-600">
                  {localStorage.getItem("username")}
                </a>
              )}

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
              key={product._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={product.imageUrl}
                alt={product.productName}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 flex flex-col h-[calc(100%-16rem)]">
                <h3 className="text-lg font-semibold text-gray-900 ">
                  {product.productName}
                </h3>
                <p className="text-gray-600">Created by: {product.owner?.username}</p>
                <p className="text-gray-600">Price: {product.price}</p>
                <a
                  href={`/product/${product._id}`}
                  className="mt-auto inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
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
