import { auth } from "config/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

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
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

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
