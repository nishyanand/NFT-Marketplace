import React from 'react';
import catImage from '../assets/cat.png';

const HeroSection = () => {
  return (
    <section className="bg-[#1E1B2E] text-white px-8 py-16 font-sans">
      {/* Top Row: Text + Image + ETH Card */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover Collect And Sell<br />Remarkable NFTs.
          </h1>
          <p className="text-gray-400 mb-8 max-w-md">
            A modern agency with new solution to creating website.
          </p>
          <button className="bg-[#A259FF] hover:bg-purple-700 transition px-6 py-3 rounded-full text-white text-sm font-medium">
            Get Started →
          </button>
        </div>

        {/* Right: Image + ETH card beside it */}
        <div className="flex flex-col md:flex-row items-start gap-6 flex-1 justify-center">
          {/* NFT Image */}
          <div className="bg-[#2A253D] rounded-3xl overflow-hidden w-72 md:w-80 shadow-lg">
            <img
              src={catImage}
              alt="NFT"
              className="w-full h-auto rounded-2xl"
            />
          </div>

          {/* ETH Info Box */}
          <div className="bg-white text-black rounded-xl shadow-xl px-4 py-3 w-44">
            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?img=4"
                alt="creator"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-bold text-[#1E1B2E]">💎 9.05 ETH</p>
                <p className="text-xs text-gray-500">Create by</p>
                <p className="text-sm font-semibold text-[#1E1B2E]">89HFFFL</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mt-12 bg-[#2A253D] p-8 rounded-2xl grid grid-cols-1 sm:grid-cols-3 gap-6 text-center max-w-5xl mx-auto">
        <div>
          <h3 className="text-2xl font-bold">132+</h3>
          <p className="text-gray-400 text-sm">Currencies supported</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">85.5%</h3>
          <p className="text-gray-400 text-sm">Businesses using Finto</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold">150M</h3>
          <p className="text-gray-400 text-sm">API request per day</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






