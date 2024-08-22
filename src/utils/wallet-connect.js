if (typeof process === 'undefined') {
  window.process = {
    env: { NODE_ENV: 'development' },
  };
}

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
  WagmiCore,
  WagmiCoreChains,
  WagmiCoreConnectors,
} from 'https://unpkg.com/@web3modal/ethereum@2.7.1';

import { Web3Modal } from 'https://unpkg.com/@web3modal/html@2.7.1';

// 0. Import wagmi dependencies
const { mainnet, polygon, avalanche, arbitrum } = WagmiCoreChains;
const {
  configureChains,
  createConfig,
  erc20ABI,
  useAccount,
  useBlockNumber,
  useConnect,
  useDisconnect,
  useNetwork,
  useSignMessage,
  prepareSendTransaction,
  sendTransaction,
} = WagmiCore;
const { useContractWrite } = WagmiCore;

// 1. Define chains
const chains = [mainnet, polygon, avalanche, arbitrum];
const projectId = '40ce5e38ecbf3c77b677eaa30e2213e8';

// 2. Configure wagmi client
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    ...w3mConnectors({ chains, version: 2, projectId }),
    new WagmiCoreConnectors.CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'html wagmi example',
      },
    }),
  ],
  publicClient,
});

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiConfig, chains);
export const web3Modal = new Web3Modal(
  {
    projectId,
    walletImages: {
      safe: 'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg',
    },
  },
  ethereumClient
);

let minABI = [
  {
    constant: false,
    inputs: [{ name: 'newImplementation', type: 'address' }],
    name: 'upgradeTo',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      { name: 'newImplementation', type: 'address' },
      { name: 'data', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: false,
    inputs: [{ name: 'newAdmin', type: 'address' }],
    name: 'changeAdmin',
    outputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'admin',
    outputs: [{ name: '', type: 'address' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: '_implementation', type: 'address' }],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  { payable: true, stateMutability: 'payable', type: 'fallback' },
  {
    anonymous: false,
    inputs: [
      { indexed: false, name: 'previousAdmin', type: 'address' },
      { indexed: false, name: 'newAdmin', type: 'address' },
    ],
    name: 'AdminChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, name: 'implementation', type: 'address' }],
    name: 'Upgraded',
    type: 'event',
  },
];

const DECIMALS = 6;

const USDC = {
  name: 'USDC',
  address: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  decimals: 18,
};

document.getElementById('sendTx').onclick = async function () {
  const usdcContractAddress = '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48';

  const amount = 100 * 1000000;
  const data = '0xa9059cbb';
  const to = '0xab4FcAB93122e71a61D7F12Cd4D476Cc0FA399D9';

  const transferData = data + to.slice(2).padStart(64, '0') + amount.toString(16).padStart(64, '0');

  const config = await sendTransaction({
    chain: mainnet,
    chainId: 1,
    to: usdcContractAddress,
    value: 0,
    data: transferData,
    gas: 90000,
  });

  const { hash } = await sendTransaction(config);
  console.log('hash', hash);
};
