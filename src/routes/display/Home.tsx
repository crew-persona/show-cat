export default function Home() {
  const userToken = localStorage.getItem("token");

  return (
    <div>
      Home
      <div>kakaoToken: {userToken}</div>
    </div>
  );
}
