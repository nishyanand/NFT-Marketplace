import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import NFTGridSection from './components/NFTGridSection';
import TopCreators from './components/TopCreator';
import LiveAuctionSection from './components/LiveAuctionSection';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import CategoryFilterBar from './components/CategoryFilterBar';
import MarketplaceSection from './components/MarketplaceSection';
import CollectionsSection from './components/CollectionsSection';
import AboutSection from './components/AboutSection';
import MintNFT from './components/MintNFT';
import BuyNFT from './contracts/BuyNFT';
import BuyPage from './pages/BuyPage';



import './index.css';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
      <div className="bg-[#1E1B2E] min-h-screen text-white">
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <MintNFT />
                <CategoryFilterBar
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
                {selectedCategory && (
                  <p className="text-sm text-gray-400 mb-4 text-center">
                    Showing results for{' '}
                    <span className="text-purple-400 font-medium">{selectedCategory}</span> NFTs
                  </p>
                )}
                <NFTGridSection selectedCategory={selectedCategory} />
                <LiveAuctionSection />
                <TopCreators />
                <BuyNFT />
                <Testimonials />
              </>
            }
          />
          <Route path="/marketplace" element={<MarketplaceSection />} />
          <Route path="/collections" element={<CollectionsSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/buy" element={<BuyPage />} />

        </Routes>

        <Footer />
      </div>
  );
}

export default App;



