import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Signup = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://signup-backend-15x7t8pvp-abd-10-54a9568b.vercel.app/signup", formData);
      window.location.href = "https://softechww.com";
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{ backgroundImage: "url('/Top-Background.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <Header />
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full mt-20">
        <h2 className="text-2xl font-bold text-center text-gray-700">Sign Up</h2>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg mt-6 hover:bg-indigo-700"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center text-gray-600">
            Already have an account? <a href="https://www.softechww.com/" className="text-indigo-600 hover:underline">Log in</a>
          </p>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
