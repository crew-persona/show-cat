import { auth } from "config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authAtom } from "recoil/atoms/authAtom";

export default function SignIn() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const uid = useRecoilValue(authAtom);

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        console.log(token);
        const user = result.user;
        console.log(user);
        const { uid } = user;
        localStorage.setItem("uid", uid);
        console.log();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  if (uid) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      SignIn
      <img
        src={require("../../assets/google_signin_buttons/web/1x/btn_google_signin_light_normal_web.png")}
        alt="google-sign-in"
        onClick={handleSignIn}
      />
    </div>
  );
}
