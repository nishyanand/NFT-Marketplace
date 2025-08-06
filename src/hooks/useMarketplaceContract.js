import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import marketplaceAbi from '../contracts/abis/marketplace.json';

export const useListItem = (nftAddress, tokenId, price) => {
  const { config } = usePrepareContractWrite({
    address: '0x97F2A229b8A9b4Cb33278D7BB37d26e0cc65E4A4',
    abi: marketplaceAbi,
    functionName: 'makeItem',
    args: [nftAddress, tokenId, price],
  });

  const { write, isLoading, isSuccess } = useContractWrite(config);

  return { write, isLoading, isSuccess };
};
