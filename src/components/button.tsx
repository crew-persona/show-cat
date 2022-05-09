import { styled } from "@styles/stitches.config";

const Button = styled("button", {
  padding: "12px 16px",
  fontWeight: 500,
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  variants: {
    color: {
      primary: {
        color: "$white",
        backgroundColor: "$primary",
      },
      transparent: {
        color: "$black1",
        backgroundColor: "transparent",
        "&.active": {
          backgroundColor: "$black5",
        },
      },
    },
    icon: {
      true: {
        padding: "12px",
      },
    },
  },
  defaultVariants: {
    color: "transparent",
    icon: false,
  },
});

export default Button;
