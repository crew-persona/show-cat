import { useRecoilValue } from "recoil";
import { authAtom } from "recoil/atoms/authAtom";

export default function SignOut() {
  const uid = useRecoilValue(authAtom);
  if (uid) {
    localStorage.removeItem("uid");
  }

  return <div>SignOut</div>;
}
