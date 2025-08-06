import React, { useState } from 'react';
import { writeContract } from 'wagmi/actions';
import { nftAddress } from '../contracts/nft';
import nftAbi from '../contracts/abis/nft.json';

const MintNFT = () => {
  const [uri, setUri] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleMint = async () => {
    setIsLoading(true);
    setSuccess(false);

    try {
      const tx = await writeContract({
        address: nftAddress,
        abi: nftAbi,
        functionName: 'mint',
        args: [uri], // make sure your contract's mint function expects (string uri)
      });

      console.log('✅ Mint Success:', tx);
      setSuccess(true);
    } catch (err) {
      console.error('❌ Mint Failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={uri}
        onChange={(e) => setUri(e.target.value)}
        placeholder="https://gateway.pinata.cloud/ipfs/..."
        className="px-4 py-2 text-black rounded"
      />

      <button
        onClick={handleMint}
        className="ml-2 bg-purple-600 text-white px-4 py-2 rounded"
        disabled={isLoading || !uri}
      >
        {isLoading ? 'Minting...' : 'Mint NFT'}
      </button>

      {success && (
        <p className="text-green-400 mt-2">✅ NFT Minted Successfully!</p>
      )}
    </div>
  );
};

export default MintNFT;

