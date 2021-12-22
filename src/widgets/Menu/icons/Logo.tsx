import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../../hooks";

const Text = styled.text`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
`;
const Tspan = styled.tspan`
  font-size: 26.26px;
  font-family: GoodTimingRg-Bold, Good Timing !important;
  font-weight: 700;
  letter-spacing: 0em;
`;
const IconContainer = styled.div<{ isPushed?: boolean; isMobile?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  padding-left: 16px;
  width: 100%;
  margin-top: ${({ isPushed }) => (isPushed ? `6px` : `4px`)};
  margin-left: ${({ isMobile }) => (isMobile ? `50px` : `0px`)};
  // display: ${({ isMobile }) => (isMobile ? `none` : `flex`)};
  display: flex;
`;

interface LogoProps extends SvgProps {
  isDark: boolean;
  isPushed: boolean;
}

// const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
//   const textColor = isDark ? "#FFFFFF" : "#432918";
//   return <img {...props} width="220px" height="50px" src="/images/logo.png" />;
// };
const Logo: React.FC<LogoProps> = ({ isDark, isPushed, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#432918";
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;

  return (
    <IconContainer isMobile={isMobile} isPushed>
      <img {...props} src="/images/egg/logo.png" alt="" width="325" height="294" />
      {isPushed ? (
        <span className="desktop-icon" style={{ color: "#52D784", marginLeft: "30px", fontSize: "24px", fontWeight: 500 }}>
          Envi
          <span style={{ color: "#60D5DC" }}>Dex</span>
        </span>
      ) : (
        <></>
      )}
    </IconContainer>
  );
};

export default Logo;
