const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 w-full mt-auto">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold italic text-teal-400">
            Softech <span className="not-italic">Solutions</span>
          </h2>
          <p className="text-gray-400 text-sm mt-2">
            A Microsoft Gold Partner & AWS Partner, delivering secure and scalable digital solutions worldwide.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-gray-400 space-y-1 text-sm">
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            softechsolutionsww@gmail.com <br />
            +1 (571) 336-2295
          </p>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500 text-xs border-t border-gray-700 pt-3">
        © 2025 Softech Solutions. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
