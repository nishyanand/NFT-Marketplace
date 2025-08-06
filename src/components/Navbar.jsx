import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WalletConnect from './WalletConnect'; 

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);

  return (
    <nav className="bg-purpleDark text-white px-8 py-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-md">
      <div className="text-2xl font-bold tracking-wider">TokenTrove</div>

      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/marketplace" className="hover:text-highlight">Marketplace</Link></li>
        <li><Link to="/collections" className="hover:text-highlight">Collections</Link></li>
        <li><Link to="/about" className="hover:text-highlight">About</Link></li>
        <li><Link to="/buy" className="hover:text-highlight">Buy</Link></li>

      </ul>

      <motion.input
        type="text"
        placeholder="Search NFTs..."
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-purple-900 text-white placeholder-gray-400 px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-highlight transition w-full md:w-64"
        onChange={(e) => console.log('Search:', e.target.value)}
      />

      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsDark(!isDark)}
          className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs hover:bg-gray-700 transition"
        >
          {isDark ? '🌙 Dark' : '☀️ Light'}
        </button>

        {/* ✅ Wallet connect button */}
        <WalletConnect />
      </div>
    </nav>
  );
};

export default Navbar;








