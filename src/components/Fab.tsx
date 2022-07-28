import { styled } from "@styles/stitches.config";
import { Button } from "components/Button";

const Fab = styled(Button, {
  position: "fixed",
  variants: {
    // 플로팅 될 위치 지정
    floatingPosition: {
      "left-top": {
        top: "32px",
        left: "48px",
        "@mobile": {
          top: "20px",
          left: "20px",
        },
      },
      "left-bottom": {
        "@mobile": {
          bottom: "20px",
          left: "20px",
        },
        bottom: "32px",
        left: "48px",
      },
      "right-top": {
        top: "32px",
        right: "48px",
        "@mobile": {
          top: "20px",
          right: "20px",
        },
      },
      "right-bottom": {
        bottom: "32px",
        right: "48px",
        "@mobile": {
          bottom: "20px",
          right: "20px",
        },
      },
    },
    circle: {
      true: {
        borderRadius: "50%",
      },
    },
    iconOnly: {
      true: {
        padding: "16px",
        "@mobile": {
          padding: "12px",
        },
      },
    },
  },
});

export default Fab;
