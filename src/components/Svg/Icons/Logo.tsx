import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32">
      <image
        href="https://media.discordapp.net/attachments/1077288626133663824/1111441245647151104/SoulSwapSouly.png"
        width="32"
      ></image>
    </Svg>
  );
};

export default Icon;
