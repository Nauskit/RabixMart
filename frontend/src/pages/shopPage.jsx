import { useEffect, useState } from "react";



export default function ShopPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [products, setProducts] = useState([]);



    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch('http://localhost:3000/product/', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await res.json();
            setProducts(data)
        }
        fetchProduct();
    }, [])

    console.log(products);



    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navbar */}
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

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex">
                {/* Aside with Categories */}
                <aside className="w-1/4 pr-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Categories</h2>
                    <ul className="space-y-2">
                        <li>
                            <button
                                className={"w-full text-left px-4 py-2 rounded-md bg-indigo-600 text-white"}
                            >All
                            </button>
                        </li>
                    </ul>
                </aside>

                {/* Product Grid Section */}
                <section className="w-3/4">
                    {/* Search Bar */}
                    <div className="mb-8">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        />
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Shop Our Collection
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.length > 0 ? (
                            products.map((product) => (
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
                                        <h3 className="text-lg font-semibold text-gray-900">
                                            {product.productName}
                                        </h3>
                                        <p className="text-gray-600">Created by: {product.owner.username}</p>
                                        <p className="text-gray-600">Price: ${product.price}</p>
                                        <a className="mt-auto inline-block bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 text-center"
                                        >
                                            Add to cart
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600 col-span-full">
                                No products found.
                            </p>
                        )}
                    </div>
                </section>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p>© 2025 RabixMart. All rights reserved.</p>
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