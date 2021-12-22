import React from "react";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SocialLinks: React.FC = () => (
  <Flex style={{ width: "100%" }} justifyContent="space-around">
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "21px", color: "textSubtle", style: { cursor: "pointer" }, colorFill: "#6DD784" };
      const mr = index < socials.length - 1 ? "7px" : 0;
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
