import React from "react";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { infos } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => (
  <Flex style={{ width: "100%" }} justifyContent="space-around">
    {infos.map((info, index) => {
      const Icon = Icons[info.icon];
      const iconProps = { width: index === 2 ? "29px" : "21px", color: "textSubtle", style: { cursor: "pointer" }, colorFill: "#6DD784" };
      const mr = index < infos.length - 1 ? "7px" : 0;
      return (
        <Link external key={info.label} href={info.href} aria-label={info.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
