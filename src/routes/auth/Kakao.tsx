import { Navigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInAtom } from "utils/atoms";

export default function Kakao() {
  const kakaoToken = new URL(window.location.href).searchParams.get("code");
  const setKakaoToken = useSetRecoilState(isLoggedInAtom);
  if (kakaoToken) {
    setKakaoToken(kakaoToken);
    localStorage.setItem("token", kakaoToken);
  }

  return <>{kakaoToken && <Navigate to="/" />}</>;
}
