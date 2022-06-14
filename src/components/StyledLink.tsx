import { styled } from "@styles/stitches.config";
import { Link } from "react-router-dom";

const StyledLink = styled(Link, {
  variants: {
    underline: {
      true: {
        textDecoration: "underline",
      },
      false: {
        textDecoration: "none",
        color: "inherit",
      },
    },
  },
  defaultVariants: {
    underline: true,
  },
});

export default StyledLink;
