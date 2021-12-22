import React from "react";
import Svg, { SvgIcon } from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    //   <path d="M8 4L6.5 5.5" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M6.5 2.5L8 4" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M6 4C4.343 4 3 5.343 3 7" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M6 4H8" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M16 20L17.5 18.5" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M17.5 21.5L16 20" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M18 20C19.657 20 21 18.657 21 17" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M18 20H16" stroke="#7BD784" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M9.5 20C12.525 20 15 17.525 15 14.5C15 11.475 12.525 9 9.5 9C6.475 9 4 11.475 4 14.5C4 15.734 4.417 16.873 5.11 17.792C6.115 19.129 7.709 20 9.5 20Z" fill="#35B9C0" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M9.5 20C12.525 20 15 17.525 15 14.5C15 11.475 12.525 9 9.5 9C6.475 9 4 11.475 4 14.5C4 15.734 4.417 16.873 5.11 17.792C6.115 19.129 7.709 20 9.5 20Z" fill="#35B9C0" stroke="#26868C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M15.5 15C18.525 15 21 12.525 21 9.5C21 6.475 18.525 4 15.5 4C12.475 4 10 6.475 10 9.5C10 10.734 10.417 11.873 11.11 12.792C12.115 14.129 13.709 15 15.5 15Z" fill="#35B9C0" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    //   <path d="M15.5 15C18.525 15 21 12.525 21 9.5C21 6.475 18.525 4 15.5 4C12.475 4 10 6.475 10 9.5C10 10.734 10.417 11.873 11.11 12.792C12.115 14.129 13.709 15 15.5 15Z" fill="#35B9C0" stroke="#26868C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    // </Svg>
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M3.882 7.624S5.523 5.07 8.12 3.698c2.597-1.371 5.796-.976 7.894.353 2.098 1.33 2.805 2.452 2.805 2.452l1.807-1.04s.374-.186.374.25v6.523s0 .582-.436.374c-.367-.174-4.337-2.452-5.587-3.17-.687-.31-.084-.56-.084-.56l1.744-1.006s-.995-1.257-2.45-1.923c-1.56-.82-3.018-.917-4.806-.236-1.165.444-2.537 1.58-3.526 3.26l-1.973-1.35zm16.204 8.622s-1.641 2.555-4.238 3.926c-2.597 1.371-5.796.976-7.894-.353-2.099-1.33-2.805-2.452-2.805-2.452l-1.807 1.04s-.374.186-.374-.25v-6.523s0-.582.436-.374c.367.175 4.336 2.452 5.587 3.17.687.31.084.56.084.56L7.33 15.997s.995 1.257 2.451 1.923c1.559.82 3.018.917 4.805.236 1.166-.444 2.538-1.58 3.526-3.26l1.974 1.35z"
      />
    </Svg>
  );
};

export default Icon;
