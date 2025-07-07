import { Link } from 'react-router-dom'

export default function CartPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link to='/homePage' className="text-2xl font-bold text-gray-900">
                                Rabix Mart
                            </Link>
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

            {/* Cart Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    Your Cart
                </h2>

                <p className="text-gray-600 text-center">Your cart is empty.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">

                        <div

                            className="bg-white rounded-lg shadow-md overflow-hidden mb-4 flex"
                        >
                            <img


                                className="w-32 h-32 object-cover"
                            />
                            <div className="p-4 flex flex-col flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">

                                </h3>
                                <p className="text-gray-600">Created by: </p>
                                <p className="text-gray-600">Price: </p>
                                <div className="mt-2">
                                    <label className="text-gray-600">
                                        Select Quantity to Pay:
                                    </label>
                                    <input
                                        type="number"
                                        min="0"

                                        className="ml-2 w-16 border rounded-md px-2 py-1"
                                    />
                                    <span className="ml-2 text-gray-600">
                                        Available:
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Payment Section */}
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Payment Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="cardNumber" className="block text-gray-600">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="cardNumber"
                                    name="cardNumber"


                                    placeholder="1234 5678 9012 3456"
                                    className="w-full border rounded-md px-3 py-2"
                                />
                            </div>
                            <div className="flex space-x-4">
                                <div className="flex-1">
                                    <label htmlFor="expiry" className="block text-gray-600">
                                        Expiry Date
                                    </label>
                                    <input
                                        type="text"
                                        id="expiry"
                                        name="expiry"


                                        placeholder="MM/YY"
                                        className="w-full border rounded-md px-3 py-2"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label htmlFor="cvv" className="block text-gray-600">
                                        CVV
                                    </label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"


                                        placeholder="123"
                                        className="w-full border rounded-md px-3 py-2"
                                    />
                                </div>
                            </div>
                            <div className="border-t pt-4">
                                <p className="text-lg font-semibold text-gray-900">
                                    Total: $
                                </p>
                                <button

                                    className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
                                >
                                    Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

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
