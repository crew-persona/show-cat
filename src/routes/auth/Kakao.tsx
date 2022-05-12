import { Navigate } from "react-router-dom";

export default function Kakao() {
  let code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  return <>{code && <Navigate to="/" />}</>;
}
