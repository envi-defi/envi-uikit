import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon, BnbRoundIcon } from "../../../components/Svg";
import Skeleton from "../../../components/Skeleton/Skeleton";
import { Link } from "../../../components/Link";

export enum Token {
  SPIRIT = 'SPIRIT',
  ETH = 'BNB'
};

interface Props {
  token?: Token;
  cakePriceUsd?: number;
}

const PriceLink = styled.span`
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.3s;
  }
`;

const CakePrice: React.FC<Props> = ({ token = Token.SPIRIT, cakePriceUsd }) => {
  const renderIcon = () => {
    const styles = {
      width: "24px",
      mr: "8px"
    };
    switch(token) {
      case Token.SPIRIT: 
        return <PancakeRoundIcon {...styles} />;
      case Token.ETH:
        return <BnbRoundIcon {...styles} />;
      default:
        return null;
    }
  };

  const getPriceLink = () => {
    switch(token) {
      case Token.SPIRIT: 
        return `https://bscscan.com/tokens/`;
      case Token.ETH:
        return `https://coinmarketcap.com/currencies/wbnb/`;
    }
  };

  return cakePriceUsd ? (
    <PriceLink>
      {renderIcon()}
      <Link
        href={getPriceLink()}
        style={{ marginLeft: "5px", textDecoration: "none" }}
        target="_blank"
        color="textSubtle"
        fontSize="14px"
      >{`$${cakePriceUsd.toFixed(2)}`}</Link>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
