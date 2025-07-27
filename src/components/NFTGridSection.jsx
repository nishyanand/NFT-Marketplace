import React from 'react';
import image1 from '../assets/image1.avif';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.avif';
import image4 from '../assets/image4.webp';


const nftData = [
  {
    title: 'Digital Panther',
    price: '4.30 ETH',
    creator: 'Jake',
    image: image1,
  },
  {
    title: 'Crypto Cat',
    price: '5.90 ETH',
    creator: 'Sophia',
    image: image2,
  },
  {
    title: 'Meta Beast',
    price: '3.45 ETH',
    creator: 'Leo',
    image: image3,
  },
  {
    title: 'Shadow NFT',
    price: '7.00 ETH',
    creator: 'Mira',
    image: image4,
  },
];

const NFTGridSection = () => {
  return (
    <section className="bg-[#1E1B2E] text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Weekly Top NFTs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {nftData.map((nft, index) => (
            <div key={index} className="bg-[#2A253D] rounded-xl p-4 shadow hover:scale-105 transform transition">
              <img src={nft.image} alt={nft.title} className="rounded-lg mb-4" />
              <h3 className="text-lg font-semibold">{nft.title}</h3>
              <p className="text-sm text-gray-400">by {nft.creator}</p>
              <p className="text-purple-400 mt-2 font-bold">{nft.price}</p>
              <button className="mt-3 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm">
                Place Bid
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NFTGridSection;
