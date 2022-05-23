import { styled } from "@styles/stitches.config";
import { HTMLAttributes } from "react";

const HeaderWrapper = styled("header", {
  "@mobile": {
    padding: "12px 0",
    boxShadow: "$mobile",
  },
  "@pc": {
    padding: "20px 0",
    boxShadow: "$pc",
  },
  backgroundColor: "$white",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  marginBottom: "32px",
});

const HeaderContents = styled("div", {
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

const Header = ({ children, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <HeaderWrapper {...props}>
      <HeaderContents>{children}</HeaderContents>
    </HeaderWrapper>
  );
};

export default Header;
