import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-100 shadow-md py-4 w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">
          Softech Solutions
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium text-gray-700">
            <li>
              <a href="https://www.softechww.com/" className="hover:text-blue-600 transition duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="https://www.softechww.com/why-join-us#meet-the-team" className="hover:text-blue-600 transition duration-300">
                About
              </a>
            </li>
            <li>
              <a href="https://www.softechww.com/computer-vision-development-services" className="hover:text-blue-600 transition duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="https://www.softechww.com/contact" className="hover:text-blue-600 transition duration-300">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
