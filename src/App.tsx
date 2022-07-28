import Router from "Router";
import globalStyles from "@styles/globalStyles";
import Recoil from "recoil";
import Fab from "components/Fab";
import { ReactComponent as ArrowUp } from "assets/icons/arrow-up.svg";
import useScrollPosition from "hooks/useScrollPosition";
import { css } from "@styles/stitches.config";

function App() {
  const { scrollPositionY } = useScrollPosition();
  const arrowUpStyles = css({
    "@mobile": {
      width: "24px",
      height: "24px",
    },
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  // Apply global styles
  globalStyles();

  return (
    <>
      <Recoil.RecoilRoot>
        <Router />
      </Recoil.RecoilRoot>
      <Fab
        floatingPosition="right-bottom"
        color="primary"
        iconOnly={true}
        circle={true}
        onClick={scrollToTop}
        css={{
          opacity: scrollPositionY > 0 ? 1 : 0,
          pointerEvents: scrollPositionY > 0 ? "auto" : "none",
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        <ArrowUp className={arrowUpStyles()} />
      </Fab>
    </>
  );
}

export default App;
