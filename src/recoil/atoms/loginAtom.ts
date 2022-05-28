import { atom } from "recoil";

const isLoggedIn = localStorage.getItem("token");

export const LoginState = atom({
  key: "googleToken",
  default: isLoggedIn ? isLoggedIn : null,
});