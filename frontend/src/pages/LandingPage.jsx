import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556740714-7c2b9e8e6b3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">
          Welcome to Rabix-Mart
        </h1>
        <p className="text-gray-600 mb-8">
          Discover the best in e-commerce shopping with Rabix. Start your
          journey today!
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/homePage"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="w-full py-2 px-4 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Login
          </Link>
        </div>
        <p className="text-xs text-gray-500 mt-6">
          Image by{" "}
          <a
            href="https://unsplash.com/@nordwood"
            className="text-indigo-600 hover:underline"
          >
            Nordwood Themes
          </a>{" "}
          on Unsplash
        </p>
      </div>
    </div>
  );
}
