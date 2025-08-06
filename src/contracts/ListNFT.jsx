import React, { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { nftAddress } from './nft';
import { marketplaceAddress } from './marketplace';
import nftAbi from './abis/nft.json';
import marketplaceAbi from './abis/marketplace.json';

const ListNFT = () => {
  const [tokenId, setTokenId] = useState('');
  const [price, setPrice] = useState('');
  const { writeContractAsync } = useWriteContract();

  const handleApproveAndList = async () => {
    try {
      // 1. Approve the marketplace to transfer your NFT
      await writeContractAsync({
        address: nftAddress,
        abi: nftAbi,
        functionName: 'approve',
        args: [marketplaceAddress, tokenId],
      });

      // 2. Call makeItem() on marketplace
      await writeContractAsync({
        address: marketplaceAddress,
        abi: marketplaceAbi,
        functionName: 'makeItem',
        args: [nftAddress, tokenId, price],
      });

      alert('NFT listed successfully!');
    } catch (err) {
      console.error('Listing error:', err);
    }
  };

  return (
    <div className="p-4">
      <input
        type="text"
        value={tokenId}
        onChange={(e) => setTokenId(e.target.value)}
        placeholder="Token ID"
        className="px-4 py-2 text-black rounded"
      />
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price in wei"
        className="ml-2 px-4 py-2 text-black rounded"
      />
      <button
        onClick={handleApproveAndList}
        className="ml-2 bg-green-600 text-white px-4 py-2 rounded"
      >
        List NFT
      </button>
    </div>
  );
};

export default ListNFT;
