import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "routes/display/NotFound";
import Oauth from "routes/auth/Oauth";
import SignIn from "routes/auth/SignIn";
import SignUp from "routes/auth/SignUp";
import Home from "routes/display/Home";
import Kakao from "routes/auth/Kakao";
import UploadFile from "routes/display/Upload";
import SignOut from "routes/auth/SignOut";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="oauth" element={<Oauth />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-out" element={<SignOut />} />
          <Route path="callback/kakao" element={<Kakao />} />
        </Route>
        <Route path="upload" element={<UploadFile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
