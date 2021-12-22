import React from "react";
import Svg , {SvgIcon} from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <SvgIcon width="26px" height="26px" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.0957 12.1235L11.699 16.4409C11.5068 16.5946 11.2647 16.6721 11.019 16.6585C10.7733 16.6449 10.5412 16.5411 10.3672 16.3671L7.63298 13.6329C7.45897 13.4589 7.35523 13.2268 7.34162 12.9811C7.32801 12.7354 7.40549 12.4933 7.55922 12.3011L11.8766 6.90434C12.8512 5.68606 14.0874 4.70259 15.4936 4.02675C16.8998 3.35091 18.4399 3 20.0001 3V3C20.2653 3 20.5197 3.10536 20.7072 3.29289C20.8947 3.48043 21.0001 3.73478 21.0001 4C21.0001 5.56016 20.6492 7.10034 19.9733 8.50651C19.2975 9.91269 18.314 11.1488 17.0957 12.1235Z" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 13V17.382C16 17.5677 15.9483 17.7498 15.8506 17.9077C15.753 18.0657 15.6133 18.1934 15.4472 18.2764L13.0313 19.4844C12.9031 19.5485 12.7627 19.5843 12.6195 19.5894C12.4764 19.5944 12.3338 19.5687 12.2014 19.5139C12.069 19.459 11.95 19.3764 11.8523 19.2716C11.7547 19.1667 11.6807 19.0421 11.6354 18.9062L11 17" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7.00009 13L5.09393 12.3646C4.95801 12.3193 4.83341 12.2453 4.72857 12.1477C4.62374 12.05 4.54111 11.931 4.48628 11.7986C4.43145 11.6662 4.4057 11.5236 4.41079 11.3805C4.41587 11.2373 4.45165 11.0969 4.51573 10.9687L5.72373 8.55279C5.80677 8.38669 5.93443 8.247 6.09239 8.14937C6.25036 8.05173 6.43238 8.00001 6.61809 8H11.0001" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M5.7501 20.5867L3 20.9999L3.41315 18.2498C3.47844 17.8152 3.68136 17.413 3.9921 17.1022C4.30285 16.7915 4.70505 16.5886 5.13964 16.5233C5.45754 16.4755 5.78222 16.503 6.08756 16.6036C6.3929 16.7041 6.67038 16.8749 6.89769 17.1022C7.12501 17.3296 7.29581 17.607 7.39636 17.9124C7.49691 18.2177 7.52441 18.5424 7.47664 18.8603C7.41134 19.2949 7.20841 19.6971 6.89765 20.0078C6.5869 20.3186 6.18469 20.5215 5.7501 20.5867Z" stroke="#35B9C0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon >
  );
};

export default Icon;
