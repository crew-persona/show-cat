import { styled } from "@styles/stitches.config";

const Button = styled("button", {
  fontWeight: 500,
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  padding: "12px 16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "14px",
  variants: {
    color: {
      primary: {
        color: "$white",
        backgroundColor: "$primary",
        fontWeight: 600,
      },
      transparent: {
        color: "$black1",
        backgroundColor: "transparent",
      },
    },
    active: {
      true: {
        backgroundColor: "$black5",
      },
    },
    iconOnly: {
      true: {
        padding: "12px",
      },
    },
    iconAlign: {
      left: {
        svg: {
          marginRight: "6px",
        },
      },
      right: {
        svg: {
          marginLeft: "6px",
        },
      },
    },
  },
  defaultVariants: {
    color: "transparent",
    iconOnly: false,
  },
});

export default Button;
