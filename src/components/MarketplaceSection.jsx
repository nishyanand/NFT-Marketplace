import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MarketplaceSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Explore the Marketplace</h2>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
        Browse thousands of digital collectibles from top creators. Filter by category, rarity, and price to find the perfect NFT.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Verified Collections</h3>
          <p className="text-gray-400">Only the most trusted and authentic collections make it here. Curated for quality.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Real-time Bidding</h3>
          <p className="text-gray-400">Bid in real time with other collectors and artists in live auctions.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-2">Top Rated Art</h3>
          <p className="text-gray-400">Check out the top trending art pieces gaining attention from the NFT community.</p>
        </div>
      </div>

      {/* Back to home */}
      <Link to="/" className="inline-block mt-10 text-highlight hover:underline text-sm">
        ← Go Back Home
      </Link>
    </motion.section>
  );
};

export default MarketplaceSection;
