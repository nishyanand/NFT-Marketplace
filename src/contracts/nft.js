
import nftAbi from '../contracts/abis/nft.json';


export const nftAddress = '0x2Af2774Bd5DAd75EDECaAd2B5DD1f34EB0CBD298';

export const nftContract = (config) =>
  getContract({
    address: nftAddress,
    abi: nftAbi,
    ...config,
  });
