import { globalCss } from "@styles/stitches.config";
import { reset } from "stitches-reset";

// Initialize Global Styles
const globalStyles = globalCss({
  ...reset,

  "html, body": {
    width: "100%",
    height: "100%",
    "*": {
      fontFamily: "$default",
    },
    "@mobile": {
      fontSize: "$small",
    },
    "@pc": {
      fontSize: "$medium",
    },
  },
  // Heading
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: 600,
  },
  h1: {
    fontSize: "1.938rem",
  },
  h2: {
    fontSize: "1.562rem",
  },
  h3: {
    fontSize: "1.250rem",
  },
  h4: {
    fontSize: "1rem",
  },
  // paragraph
  ".p": {
    fontSize: "1rem",
  },
  // paragraph
  ".p-sm": {
    fontSize: "0.812rem",
  },
  ".p-xs": {
    fontSize: "0.625rem",
  },
});

export default globalStyles;
