
import marketplaceAbi from '../contracts/abis/marketplace.json';


export const marketplaceAddress = '0x97F2A229b8A9b4Cb33278D7BB37d26e0cc65E4A4';

export const marketplaceContract = (config) =>
  getContract({
    address: marketplaceAddress,
    abi: marketplaceAbi,
    ...config,
  });
