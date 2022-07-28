import { globalCss } from "@styles/stitches.config";
import { reset } from "stitches-reset";

// Initialize Global Styles
const globalStyles = globalCss({
  ...reset,
  "html, body, #root": {
    width: "100%",
    height: "100%",
    fontFamily: "$default",

    "@pc": {
      fontSize: "16px",
    },
    "@mobile": {
      fontSize: "14px",
    },
  },
});

export default globalStyles;
