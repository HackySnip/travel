import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from "react-icons/md";


const Footer: React.FC = () => {
   return (
      <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
         <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-10 md:mb-0 w-full md:w-3/12">
               <h2 className="text-lg font-semibold text-white">
                  Stay updated with our latest travel deals and tips.
               </h2>
               <div className="flex mt-4">
                  <input
                     type="email"
                     placeholder="Your email address"
                     className="p-2 w-full max-w-xs bg-gray-800 text-gray-300 border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="bg-purple-600 text-white p-2 rounded-r-md hover:bg-purple-700">
                     <MdAlternateEmail />
                  </button>
               </div>
               <div className="flex space-x-4 mt-8">
                  <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                     <FaFacebookF className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Twitter" className="hover:text-blue-400">
                     <FaTwitter className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                     <FaInstagram className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
                     <FaLinkedinIn className="w-6 h-6" />
                  </a>
                  <a href="#" aria-label="GitHub" className="hover:text-gray-400">
                     <FaGithub className="w-6 h-6" />
                  </a>
               </div>
            </div>
            <div className="w-full sm:mt-0 sm:mb-4 md:my-0 md:w-2/12">
               <h3 className="font-semibold text-white mb-4">Explore</h3>
               <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Destinations</a></li>
                  <li><a href="#" className="hover:underline">Travel Guides</a></li>
                  <li><a href="#" className="hover:underline">Blog</a></li>
                  <li><a href="#" className="hover:underline">Travel Tips</a></li>
                  <li><a href="#" className="hover:underline">About Us</a></li>
                  <li><a href="#" className="hover:underline">Contact Us</a></li>
               </ul>
            </div>
            <div className="w-full sm:my-4 md:my-0 md:w-2/12">
               <h3 className="font-semibold text-white mb-4">Support</h3>
               <ul className="space-y-2">
                  <li><a href="#" className="hover:underline">Help Center</a></li>
                  <li><a href="#" className="hover:underline">FAQs</a></li>
                  <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#" className="hover:underline">Terms of Service</a></li>
               </ul>
            </div>
            <div className="w-full sm:my-4 md:my-0 md:w-4/12">
               <h3 className="font-semibold text-white mb-4">About Our Travel Site</h3>
               <p className="leading-relaxed">
                  We are dedicated to providing the best travel experiences and deals, helping you explore the world with ease and comfort.
                  Whether it's a weekend getaway or a month-long adventure, our site is your ultimate travel companion.
               </p>
            </div>
         </div>

         <div className="mt-10 border-t border-gray-800 pt-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row justify-between items-center">
               <div className="text-sm space-x-4">
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                  <a href="#" className="hover:underline">Privacy Policy</a>
               </div>
               <div className="mt-4 md:mt-0 text-sm">
                  Powered by Rushabh Bhosale
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
