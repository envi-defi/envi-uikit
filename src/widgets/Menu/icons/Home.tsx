import React from "react";
import Svg, { SvgIcon } from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <SvgIcon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    //   <path d="M4 8.6001V21.0001H20V8.6001" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M2 10L12 3L22 10" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M15 21V15C15 13.895 14.105 13 13 13H11C9.895 13 9 13.895 9 15V21" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    // </SvgIcon>
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.657 6.65c.133-1.252-.481-2.694-1.74-2.64a10.346 10.346 0 00-8.665 5.439c-2.746 5.074-.9 11.437 4.12 14.208 5.018 2.771 11.32.915 14.066-4.16a10.506 10.506 0 001.252-5.679c-.05-.804-.96-1.187-1.738-.973a5.787 5.787 0 01-7.295-6.195zm.697 4.112c-2.027-1.12-4.577-.363-5.684 1.681-1.108 2.045-.361 4.62 1.666 5.74s4.577.364 5.684-1.68c1.105-2.046.36-4.621-1.666-5.741z"
      />
    </Svg>
  );
};

export default Icon;
