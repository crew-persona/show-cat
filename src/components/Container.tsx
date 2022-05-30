import { styled } from "@styles/stitches.config";

const Container = styled("article", {
  "@pc": {
    width: "1000px",
    height: "80px",
  },
  "@mobile": {
    width: "90%",
    height: "63px",
  },
  margin: "0 auto",
});

export default Container;
