import { styled } from "@styles/stitches.config";

const Heading = styled("p", {
  "@mobile": {
    fontSize: "$small",
  },
  "@pc": {
    fontSize: "$medium",
  },
  fontWeight: "600",
  variants: {
    as: {
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
    },
  },
});

export default Heading;
