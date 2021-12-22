import React from "react";
import Svg, { SvgIcon } from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 60 60" {...props}>
      <g fill="none">
        <path
          style={{
            transition: "fill .3s ease-in-out",
          }}
          d="M13.488.025C6.015.131.01 6.213 0 13.686v32.628a13.68 13.68 0 0 0 23.357 9.675l9.287-9.289c.221 7.47 6.396 13.38 13.868 13.275C53.985 59.869 59.99 53.787 60 46.314V13.686a13.68 13.68 0 0 0-23.357-9.675L27.356 13.3C27.135 5.83 20.96-.08 13.488.025z"
          fill="#6DD784"
        />
        <circle
          style={{
            transition: "cx .3s ease-in-out,cy .3s ease-in-out",
          }}
          fill="#FFF"
          cx={30}
          cy={30}
          r={13.686}
        />
      </g>
    </Svg>
  );
};

export default Icon;
