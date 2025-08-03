import React, { useEffect, useState } from 'react';

const AuctionCard = ({ image, name, creator, currentBid, endTime }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date(endTime);
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft('Auction Ended');
        clearInterval(interval);
        return;
      }

      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  return (
    <div className="bg-[#2A253D] rounded-xl p-4 shadow-md w-full sm:w-64">
      <img src={image} alt={name} className="rounded-lg mb-4 w-full h-48 object-cover" />
      <p className="text-sm text-gray-400 mb-1">Ends in:</p>
      <h4 className="text-lg font-semibold text-white mb-2">{timeLeft}</h4>
      <p className="text-sm text-gray-400 mb-1">Creator: {creator}</p>
      <p className="text-sm text-gray-400 mb-1">Current Bid: {currentBid} ETH</p>
      <button className="mt-3 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full text-sm transition">
        Bid Now
      </button>
    </div>
  );
};

const LiveAuction = () => {
  const now = new Date();
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto font-sans">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">Live Auctions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <AuctionCard
          image="/assets/alien-punk.avif"
          name="Alien Punk"
          creator="Zack"
          currentBid="2.50"
          endTime={new Date(now.getTime() + 2 * 60 * 60 * 1000)} // 2 hours from now
        />
        <AuctionCard
          image="/assets/robotape.webp"
          name="Robot Ape"
          creator="Mira"
          currentBid="3.90"
          endTime={new Date(now.getTime() + 30 * 60 * 1000)} // 30 minutes from now
        />
        <AuctionCard
          image="/assets/neobeasts.webp"
          name="Neo Beast"
          creator="Kai"
          currentBid="5.25"
          endTime={new Date(now.getTime() + 10 * 60 * 1000)} // 10 minutes from now
        />
        <AuctionCard
          image="/assets/Samurai-cat.jpg"
          name="Samurai Cat"
          creator="Sophia"
          currentBid="4.10"
          endTime={new Date(now.getTime() + 90 * 60 * 1000)} // 1.5 hours from now
        />
      </div>
    </section>
  );
};

export default LiveAuction;

