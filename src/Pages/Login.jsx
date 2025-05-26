import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center">Login</h2>

        <form>
          <label className="block mb-2 font-medium" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block mb-2 font-medium" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
