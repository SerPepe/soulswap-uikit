import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <image
        href="https://media.discordapp.net/attachments/1077288626133663824/1111444413995028582/SoulSwapRoundLogo.png"
        width="512"
      ></image>
    </Svg>
  );
};

export default Icon;
