// WalletConnect.jsx
import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

const WalletConnect = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <div>
      {isConnected ? (
        <button
          onClick={() => disconnect()}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition-all"
        >
          Disconnect ({address.slice(0, 5)}...{address.slice(-4)})
        </button>
      ) : (
        connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="bg-highlight text-white px-4 py-2 rounded-xl hover:bg-purple-600 transition-all"
            disabled={isPending}
          >
            Connect with {connector.name}
          </button>
        ))
      )}
    </div>
  );
};

export default WalletConnect;


