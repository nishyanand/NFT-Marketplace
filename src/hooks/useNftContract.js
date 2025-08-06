import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import nftAbi from '../contracts/abis/nft.json';

export const useMintNft = () => {
  const { config } = usePrepareContractWrite({
    address: '0x2Af2774Bd5DAd75EDECaAd2B5DD1f34EB0CBD298',
    abi: nftAbi,
    functionName: 'mint',
    args: ['https://ipfs.io/ipfs/QmYourTokenUri'], // Replace dynamically
  });

  const { write, isLoading, isSuccess } = useContractWrite(config);

  return { write, isLoading, isSuccess };
};
