import { Outlet } from "react-router-dom";

export default function Oauth() {
  /*
    if the user has already signed in, indirect to 'home'
    if the user has not signed yet, indirect to 'sign-in'.
*/
  return <Outlet />;
}
