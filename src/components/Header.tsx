import { styled } from "@styles/stitches.config";
import { HTMLAttributes } from "react";

// 헤더
const HeaderWrapper = styled("header", {
  "@mobile": {
    boxShadow: "$mobile",
    height: "63px",
  },
  "@pc": {
    boxShadow: "$pc",
    height: "80px",
  },
  backgroundColor: "$white",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1,
});

const HeaderContents = styled("div", {
  maxWidth: "1000px",
  width: "90%",
  height: "100%",
  margin: "auto",
  display: "flex",
  alignItems: "center",
});

// 헤더 아이템
export const HeaderItem = styled("div", {
  "&:not(:last-child)": {
    marginRight: "8px",
  },
});

export const HeaderItemFull = styled("div", {
  flex: "auto",
  display: "flex",
  "&:not(:last-child)": {
    marginRight: "8px",
  },
});

// 헤더 제목, 부제목
export const HeaderTitle = styled("a", {
  fontSize: "1.562rem",
  fontWeight: 600,
});

export const HeaderSubtitle = styled("span", {
  "@mobile": {
    display: "none",
  },
  marginLeft: "12px",
  color: "$black4",
});

const Header = ({ children, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <HeaderWrapper {...props}>
      <HeaderContents>{children}</HeaderContents>
    </HeaderWrapper>
  );
};

export default Header;
