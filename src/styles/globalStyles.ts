import { globalCss } from "./stitches.config";

// Initialize Global Styles
const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, fontFamily: "$default" },
});

export default globalStyles;
