import React from 'react';
import BuyNFT from '../contracts/BuyNFT';

const BuyPage = () => (
  <div className="py-20 px-4 max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-white mb-6">Buy NFTs</h2>
    <BuyNFT />
  </div>
);

export default BuyPage;
