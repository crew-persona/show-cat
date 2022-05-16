import { styled } from "@styles/stitches.config";

export const Header = styled("header", {
  "@mobile": {
    padding: "12px 0",
    boxShadow: "$mobile",
  },
  "@pc": {
    padding: "20px 0",
    boxShadow: "$pc",
  },
});

export const HeaderWrapper = styled("div", {
  maxWidth: "1000px",
  width: "90%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
});

export const HeaderItem = styled("div", {
  "&:not(:last-child)": {
    marginRight: "8px",
  },
});

export const HeaderItemFull = styled("div", {
  flex: "auto",
  "&:not(:last-child)": {
    marginRight: "8px",
  },
});
