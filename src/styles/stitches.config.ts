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
      // white
      white: "#fff",
      // main colors
      primary: "#2771ff",
      red: "#FF0000",
      teal: "#00FFF0",
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
