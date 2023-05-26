import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 64 64" {...props}>
<image
        href="https://media.discordapp.net/attachments/1077288626133663824/1111446651207438367/SoulSwapSpinner.png"
        width="64"
      ></image>
    </Svg>
  );
};

export default Icon;
