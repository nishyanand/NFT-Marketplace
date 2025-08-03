import React from 'react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#2A253D] text-white py-12 px-8 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1: Links */}
        <div>
          <h4 className="text-lg font-bold mb-4">Explore</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy</a></li>
          </ul>
        </div>

        {/* Column 2: Socials */}
        <div>
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl text-gray-400">
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaDiscord /></a>
            <a href="#" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>

        {/* Column 3: Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-4">Subscribe</h4>
          <p className="text-gray-400 text-sm mb-4">Get updates on new NFT drops.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 rounded-l-lg bg-[#1E1B2E] text-sm text-white border border-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-r-lg text-sm">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-500 text-xs mt-10">
        © {new Date().getFullYear()} NFT Marketplace. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
