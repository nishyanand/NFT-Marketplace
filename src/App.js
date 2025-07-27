import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NFTGridSection from './components/NFTGridSection';
import TopCreators from './components/TopCreator';
import './index.css';

function App() {
  return (
    <div className="bg-[#1E1B2E] min-h-screen text-white">
      <Navbar />
      <HeroSection />
      <NFTGridSection />
      <TopCreators />
    </div>
  );
}

export default App;

