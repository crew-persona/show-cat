import { styled } from "@styles/stitches.config";

export const ListContainer = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  li: {},
});

export const ListItem = styled("li", {
  paddingTop: "100%",
  padding: "4px",
  variants: {
    count: {
      "1": {
        width: "calc(100% / 1 - 8px)",
      },
      "2": {
        width: "calc(100% / 2 - 8px)",
      },
      "4": {
        width: "calc(100% / 4 - 8px)",
      },
    },
  },
});

export const ListImage = styled("img", {
  width: "100%",
  height: "100%",
  objectFit: "cover",
});
