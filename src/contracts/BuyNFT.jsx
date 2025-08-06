import React, { useState } from 'react';
import { useWriteContract } from 'wagmi';
import { marketplaceAddress } from '../contracts/marketplace';
import marketplaceAbi from '../contracts/abis/marketplace.json';


const BuyNFT = () => {
  const [itemId, setItemId] = useState('');
  const [price, setPrice] = useState('');
  const { writeContractAsync } = useWriteContract();

  const handleBuy = async () => {
    try {
      const tx = await writeContractAsync({
        address: marketplaceAddress,
        abi: marketplaceAbi,
        functionName: 'purchaseItem',
        args: [parseInt(itemId)],
        value: BigInt(price || 0), // In wei
      });
      console.log('Purchase success:', tx);
    } catch (err) {
      console.error('Purchase error:', err);
    }
  };

  return (
    <div className="p-4">
      <input
        type="number"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        placeholder="Item ID"
        className="px-4 py-2 text-black rounded mr-2"
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Total Price in Wei"
        className="px-4 py-2 text-black rounded mr-2"
      />
      <button
        onClick={handleBuy}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Buy NFT
      </button>
    </div>
  );
};

export default BuyNFT;
