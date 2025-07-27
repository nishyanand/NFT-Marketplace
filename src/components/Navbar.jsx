import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-purpleDark text-white px-8 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold tracking-wider">TokenTrove</div>

      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="cursor-pointer hover:text-highlight">Marketplace</li>
        <li className="cursor-pointer hover:text-highlight">Collections</li>
        <li className="cursor-pointer hover:text-highlight">About</li>
      </ul>

      <button className="bg-highlight text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition-all">
        Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar;
