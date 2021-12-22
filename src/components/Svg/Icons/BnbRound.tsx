import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return <img {...props} src="/images/coins/BNB.png" />;
};

export default Icon;
