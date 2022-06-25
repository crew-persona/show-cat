import { styled } from "@styles/stitches.config";

const Text = styled("p", {
  "@mobile": {
    fontSize: "$small",
  },
  "@pc": {
    fontSize: "$medium",
  },
  variants: {
    size: {
      default: {
        fontSize: "1rem",
      },
      sm: {
        fontSize: "0.812rem",
      },
      xs: {
        fontSize: "0.625rem",
      },
    },
  },
});

export default Text;
