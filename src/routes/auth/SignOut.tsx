import { useNavigate } from "react-router-dom";

export default function SignOut() {
  const { Kakao } = window as any;
  const navigate = useNavigate();
  if (!Kakao.Auth.getAccessToken()) {
    console.log("Not logged in.");
    navigate("/");
  }

  Kakao.Auth.logout(function () {
    console.log(Kakao.Auth.getAccessToken());
    navigate("/");
  });

  return <div>SignOut</div>;
}
