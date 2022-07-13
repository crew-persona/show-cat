import { styled } from "@styles/stitches.config";

export const ListContainer = styled("ul", {
  display: "flex",
  flexWrap: "wrap",
  variants: {
    fullWidth: {
      true: {
        width: "100vw",
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        padding: 0,
      },
    },
  },
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
  aspectRatio: "1/1",
});

export const ListOverlay = styled("div", {
  position: "absolute",
  height: "30%",
  display: "flex",
  variants: {
    position: {
      top: {
        background:
          "linear-gradient(180deg, rgba(1, 1, 1, 0.3) 0%, rgba(58, 58, 58, 0) 100%)",
        top: "4px",
        right: "4px",
        left: "4px",
        "@mobile": {
          right: "0",
          left: "0",
        },
      },
      bottom: {
        background:
          "linear-gradient(360deg, rgba(1, 1, 1, 0.3) 0%, rgba(58, 58, 58, 0) 100%)",
        bottom: "4px",
        right: "4px",
        left: "4px",
        "@mobile": {
          bottom: "0",
          right: "0",
          left: "0",
        },
      },
    },
    align: {
      start: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
      },
      end: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
      },
    },
  },
});
