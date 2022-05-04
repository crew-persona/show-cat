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
      "@mobile": {
        fontSize: "$small",
      },
      "@pc": {
        fontSize: "$medium",
      },
    },
  },
  // Heading
  "h1, h2, h3, h4, h5, h6": {
    fontWeight: 600,
  },
  h1: {},
  h2: {},
  h3: {},
  h4: {},
  h5: {},
  h6: {},
});

export default globalStyles;
