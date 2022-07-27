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

const Router = () => {
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
      >
        <ArrowUp />
      </Fab>
    </BrowserRouter>
  );
};

export default Router;
