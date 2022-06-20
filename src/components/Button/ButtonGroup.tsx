import { styled } from "@styles/stitches.config";

export const ButtonGroup = styled("ul", {
  display: "flex",
  marginTop: "24px",
  marginBottom: "24px",
});

export const ButtonGroupItem = styled("li", {
  listStyle: "none",
  padding: 0,
  display: "flex",
  ":not(:first-child)": {
    marginLeft: "8px",
  },
});

export const ButtonGroupItemFull = styled("li", {
  listStyle: "none",
  padding: 0,
  flex: 1,
  display: "flex",
  ":not(:first-child)": {
    marginLeft: "8px",
  },
  variants: {
    align: {
      center: {
        justifyContent: "center",
      },
      left: {
        justifyContent: "flex-start",
      },
      right: {
        justifyContent: "flex-end",
      },
    },
  },
});
