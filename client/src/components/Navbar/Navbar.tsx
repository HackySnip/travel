import React, { useState, useRef, useEffect } from 'react';
import { FaTelegramPlane, FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close the drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
        setIsDrawerOpen(false);
      }
    };

    if (isDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <div
      className={`fixed top-0 w-full py-2 px-6  transition-colors duration-300 ${scrollY > 10 ? 'bg-white' : 'bg-transparent'
        }`}
    >
      <nav className="container flex items-center mx-auto justify-between">
        <div className="flex items-center space-x-2">
          <span className={`text-2xl font-bold transition-colors duration-300 ${scrollY > 10 ? 'text-gray-900' : 'text-white'}`}>Travel</span>
        </div>

        {/* Center - Navigation Links (hidden on mobile) */}
        <div className="hidden md:flex sm:hidden md:ms-28 flex-1 justify-center">
          <div className={`space-x-8 py-3 px-6 ${scrollY > 10 ? "" : "bg-black bg-opacity-40 rounded-full"} `}>
            <a href="#" className={`${scrollY > 10 ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>Overview</a>
            <a href="#" className={`${scrollY > 10 ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>Why Travel</a>
            <a href="#" className={`${scrollY > 10 ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>Routes</a>
            <a href="#" className={`${scrollY > 10 ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>Where</a>
            <a href="#" className={`${scrollY > 10 ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>Nearby Destinations</a>
          </div>
        </div>

        {/* Right side - Language Dropdown, Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <div className={`relative font-semibold ${scrollY > 10 ? 'text-gray-700' : 'text-white'}`}>
            EN
          </div>
          <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-full flex items-center hover:bg-pink-600">
            <FaTelegramPlane className="mr-2" />
            Talk to an expert
          </button>
          <button className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-800">
            Sign in
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleDrawer} className={`${scrollY > 10 ? 'text-gray-700 hover:text-black' : 'text-white hover:text-gray-200'}`}>
            {isDrawerOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Drawer */}
        {isDrawerOpen && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleDrawer}
            />
            <div
              ref={drawerRef}
              className="fixed inset-y-0 right-0 bg-white shadow-lg w-4/5 max-w-xs transform transition-transform z-50"
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <span className="text-2xl font-bold">Travel</span>
                <button onClick={toggleDrawer} className="text-gray-700">
                  <FaTimes size={24} />
                </button>
              </div>
              <div className="flex flex-col p-4 space-y-4">
                <a href="#" className="text-gray-700 hover:text-black">Overview</a>
                <a href="#" className="text-gray-700 hover:text-black">Why Travel?</a>
                <a href="#" className="text-gray-700 hover:text-black">Routes</a>
                <a href="#" className="text-gray-700 hover:text-black">Where</a>
                <a href="#" className="text-gray-700 hover:text-black">Nearby Destinations</a>
                <div className="mt-auto flex flex-col space-y-4">
                  <div className="relative mb-4">
                    <select className="bg-white text-gray-700 font-semibold cursor-pointer appearance-none">
                      <option value="EN">EN</option>
                      <option value="ES">ES</option>
                    </select>
                  </div>
                  <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-full flex items-center hover:bg-pink-600 justify-center">
                    <FaTelegramPlane className="mr-2" />
                    Talk to an expert
                  </button>
                  <button className="bg-black text-white font-semibold py-2 px-4 rounded-full hover:bg-gray-800">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
