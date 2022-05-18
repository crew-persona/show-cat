import { atom } from "recoil";

const isLoggedIn = localStorage.getItem("token");

export const isLoggedInAtom = atom({
  key: "kakaoToken",
  default: isLoggedIn ? isLoggedIn : null,
});
