import { atom } from "recoil";
const uid = localStorage.getItem("uid");
const authAtom = atom({
  key: "auth",
  // get initial state from local storage to enable user to stay logged in
  default: uid,
});

export { authAtom };
