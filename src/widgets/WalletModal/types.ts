import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  // Coin98 = "coin98",
  WalletLink = "walletlink",
  Authereum = "authereum",
  Fortmatic = "fortmatic",
  Frame = "frame",
  Portis = "portis",
  SquareLink = "squarelink",
  Torus = "torus",
  Provided = "provided"
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
}
