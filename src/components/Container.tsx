import { styled } from "@styles/stitches.config";

const Container = styled("article", {
  "@pc": {
    width: "1000px",
  },
  "@mobile": {
    width: "90%",
  },
  margin: "0 auto",
  height: "100%",
});

export default Container;
