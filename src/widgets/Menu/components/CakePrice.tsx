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
  link?: string
  priceUsd?: number
  logoUrl?: string
}

const PriceLink = styled.span`
  display: flex;
  align-items: center;

  svg {
    transition: transform 0.3s;
  }
`;

const CakePrice: React.FC<Props> = ({ link, logoUrl, priceUsd = 0 }) => {
  const renderIcon = () => {
    const styles = {
      width: "24px",
      mr: "8px"
    };
    return <img src={logoUrl} {...styles} />
    // switch(token) {
    //   case Token.SPIRIT: 
    //     return <PancakeRoundIcon {...styles} />;
    //   case Token.ETH:
    //     return <BnbRoundIcon {...styles} />;
    //   default:
    //     return null;
    // }
  };

  // const getPriceLink = () => {
  //   switch(token) {
  //     case Token.SPIRIT: 
  //       return `https://bscscan.com/tokens/`;
  //     case Token.ETH:
  //       return `https://coinmarketcap.com/currencies/wbnb/`;
  //   }
  // };

  return (
    <PriceLink>
      {renderIcon()}
      {
        priceUsd ? (
          <Link
            href={link}
            style={{ marginLeft: "5px", textDecoration: "none", overflowWrap: 'anywhere' }}
            target="_blank"
            color="textSubtle"
            fontSize="14px"
          >{`$${priceUsd.toFixed(2)}`}</Link>
        ) : (
          <Skeleton width={40} height={24} ml='6px' />
        )
      }
    </PriceLink>
  )
};

export default React.memo(CakePrice);
