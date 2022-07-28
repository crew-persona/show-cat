import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "routes/display/NotFound";
import Oauth from "routes/auth/Oauth";
import SignIn from "routes/auth/SignIn";
import SignUp from "routes/auth/SignUp";
import Home from "routes/display/Home";
import Challengers from "routes/display/Home/Challengers";
import BestCats from "routes/display/Home/BestCats";
import UploadFile from "routes/display/Upload";
import SignOut from "routes/auth/SignOut";
import Detail from "routes/display/Detail";
import Fab from "components/Fab";
import { ReactComponent as ArrowUp } from "assets/icons/arrow-up.svg";
import useScrollPosition from "hooks/useScrollPosition";

const Router = () => {
  const { scrollPositionY } = useScrollPosition();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* OAuth */}
        <Route path="oauth" element={<Oauth />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
        </Route>
        {/* Home */}
        <Route path="/" element={<Home />}>
          <Route index element={<Challengers />} />
          <Route path="best-cats" element={<BestCats />} />
        </Route>
        {/* Upload */}
        <Route path="upload" element={<UploadFile />} />
        {/* Detail */}
        <Route path="detail/:id" element={<Detail />} />
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
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
        <ArrowUp />
      </Fab>
    </BrowserRouter>
  );
};

export default Router;
