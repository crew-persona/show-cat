export default function SignIn() {
  const { Kakao } = window as any;

  const handleSignIn = () => {
    !Kakao.isInitialized() && Kakao.init(process.env.REACT_APP_KAKAO_APP_KEY);
    Kakao.Auth.authorize({
      redirectUri: process.env.REACT_APP_KAKAO_REDIRECT_URI,
    });
  };

  return (
    <div>
      SignIn
      <img
        src={require("../../assets/icons/kakao_login_small.png")}
        alt="kakao"
        onClick={handleSignIn}
      />
    </div>
  );
}
