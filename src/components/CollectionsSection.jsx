// CollectionsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
const CollectionsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-20 px-4 max-w-7xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Explore Top Collections</h2>
      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-6">
        Discover handpicked NFT collections ranging from digital art to music, gaming assets, and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-purple-300 font-semibold mb-2">CryptoArt Elite</h3>
          <p className="text-gray-300">An exclusive collection of top-tier digital artists showcasing their finest works.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-purple-300 font-semibold mb-2">SoundWave Drops</h3>
          <p className="text-gray-300">Own a piece of musical history with NFT drops from emerging artists.</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl text-purple-300 font-semibold mb-2">PhotoVerse</h3>
          <p className="text-gray-300">Photography NFTs that capture moments, emotions, and stories visually.</p>
        </div>
      </div>
      <Link to="/" className="inline-block mt-10 text-highlight hover:underline text-sm">
        ← Go Back Home
      </Link>
    </motion.section>
  );
};

export default CollectionsSection;

