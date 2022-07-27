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
      },
      "left-bottom": {
        bottom: "32px",
        left: "48px",
      },
      "right-top": {
        top: "32px",
        right: "48px",
      },
      "right-bottom": {
        bottom: "32px",
        right: "48px",
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
      },
    },
  },
});

export default Fab;
