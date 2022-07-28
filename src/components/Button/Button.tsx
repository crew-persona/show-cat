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
        svg: {
          margin: 0,
        },
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
    underline: {
      true: {
        textDecoration: "underline",
      },
      false: {
        textDecoration: "none",
      },
    },
  },
  defaultVariants: {
    color: "transparent",
    iconOnly: false,
    underline: false,
  },
});

export default Button;
