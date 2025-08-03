import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-4 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold text-white mb-6">About TokenTrove</h2>
      <p className="text-gray-400 mb-6 leading-relaxed">
        TokenTrove is your gateway into the world of digital art and collectibles. 
        Our platform empowers creators to showcase their NFTs and allows collectors to find unique digital assets, 
        ranging from art to music and more.
      </p>
      <p className="text-gray-400 mb-8">
        With real-time auctions, verified collections, and AI-curated tags, we aim to make NFT discovery smooth and enjoyable. 
        Join our growing community of artists, developers, and collectors today!
      </p>

      <Link
        to="/"
        className="inline-block text-highlight hover:underline transition-all"
      >
        ← Go Back Home
      </Link>
    </motion.section>
  );
};

export default AboutSection;


