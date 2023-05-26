import { Colors } from "./types";

export const baseColors = {
  failure: "#FF3838",
  primary: "#FF0000",
  primaryBright: "#FF0000",
  primaryDark: "#000000",
  secondary: "#FF385B",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FFF7F7",
  backgroundDisabled: "#F5F4F4",
  contrast: "#191326",
  invertedContrast: "#FFFFFF",
  input: "#F7E7E7",
  inputBorder: "#D9D6D6",
  tertiary: "#FDF7F7",
  text: "#552233",
  textDisabled: "#BDC2C4",
  textSubtle: "#FF720D",
  borderColor: "#E9EAEB",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FFD9E9 0%, #FFEAF5 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF5990",
  background: "#1F0B21",
  backgroundDisabled: "#3C1B3C",
  contrast: "#FFFFFF",
  invertedContrast: "#0A0E17",
  input: "#34162B",
  inputBorder: "#4D2A4D",
  primaryDark: "#000000",
  tertiary: "#2D101F",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FF720D",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #2B0A27 0%, #18162D 100%)",
  },
};
