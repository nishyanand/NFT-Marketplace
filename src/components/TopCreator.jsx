import React from 'react';

const creators = [
  {
    name: 'Hitmaker',
    nfts: '25 NFTs',
    image: 'https://i.pravatar.cc/150?img=1', // placeholder
  },
  {
    name: 'Jitasa Nova',
    nfts: '22 NFTs',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Zia Jun',
    nfts: '19 NFTs',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];

const TopCreators = () => {
  return (
    <section className="bg-[#1E1B2E] text-white py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Top Creator List</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {creators.map((creator, index) => (
            <div key={index} className="bg-[#2A253D] p-4 rounded-lg flex items-center justify-between shadow hover:scale-105 transition">
              <div className="flex items-center gap-4">
                <img src={creator.image} alt={creator.name} className="w-12 h-12 rounded-full" />
                <div>
                  <p className="font-semibold">{creator.name}</p>
                  <p className="text-sm text-gray-400">{creator.nfts}</p>
                </div>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-sm px-4 py-1 rounded-full">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCreators;
