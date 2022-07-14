import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme,
  createTheme,
  getCssText,
} = createStitches({
  media: {
    mobile: "(max-width: 999px)",
    pc: "(min-width: 1000px)",
  },
  theme: {
    colors: {
      // black
      black1: "#000",
      black2: "#242424",
      black3: "#4e4e4e",
      black4: "#949494",
      black5: "#f4f4f4",
      // white
      white: "#fff",
      // main colors
      primary: "#4987FF",
      blue: "#2771FF",
      red: "#FF0000",
      teal: "#00FFF0",
      // medal colors
      gold: "#EFFF33",
      silver: "#CCD6DD",
      bronze: "#FF8A3B",
      // medal colors (jelly)
      goldJelly: "#796600",
      silverJelly: "#627077",
      bronzeJelly: "#7C4119",
    },
    fontSizes: {
      small: "14px",
      medium: "16px",
    },
    fonts: {
      default: "Spoqa Han Sans Neo, sans-serif",
    },
    fontWeights: {
      heading: 600,
      default: 400,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {
      pc: "0px 2px 8px rgba(0, 163, 255, 0.16)",
      mobile: "0px 2px 8px rgba(0, 163, 255, 0.08)",
    },
    zIndices: {},
    transitions: {},
  },
});
