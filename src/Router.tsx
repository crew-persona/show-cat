import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NotFound from "routes/display/NotFound";
import Oauth from "routes/auth/Oauth";
import SignIn from "routes/auth/SignIn";
import SignUp from "routes/auth/SignUp";
import Home from "routes/display/Home";
import Kakao from "routes/auth/Kakao";
import Challengers from "routes/display/Home/Challengers";
import BestCats from "routes/display/Home/BestCats";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* OAuth */}
        <Route path="oauth" element={<Oauth />}>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="callback/kakao" element={<Kakao />} />
        </Route>
        {/* Home */}
        <Route path="/" element={<Home />}>
          <Route index element={<Challengers />} />
          <Route path="best-cats" element={<BestCats />} />
        </Route>
        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
