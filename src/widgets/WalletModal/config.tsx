import Metamask from "./icons/Metamask";
import Coin98Wallet from "./icons/Coin98Wallet";
import MathWallet from "./icons/MathWallet";
import TokenPocket from "./icons/TokenPocket";
import TrustWallet from "./icons/TrustWallet";
import BinanceChain from "./icons/BinanceChain";
import Coinbase from "./icons/Coinbase";
import WalletConnect from "./icons/WalletConnect";
import { Config, ConnectorNames } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TrustWallet",
    icon: TrustWallet,
    connectorId:  ConnectorNames.Injected,
  },
  {
    title: "MathWallet",
    icon: MathWallet,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "TokenPocket",
    icon: TokenPocket,
    connectorId: ConnectorNames.Injected,
  },
  {
    title: "Coinbase Wallet",
    icon: Coinbase,
    connectorId: ConnectorNames.WalletLink,
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: ConnectorNames.WalletConnect,
  },
  {
    title: "Binance Chain Wallet",
    icon: BinanceChain,
    connectorId: ConnectorNames.BSC,
  },
];

export default connectors;
export const connectorLocalStorageKey = "connectorId";
