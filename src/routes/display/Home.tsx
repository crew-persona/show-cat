export default function Home() {
  const uid = localStorage.getItem("uid");
  return (
    <div>
      Home
      {uid && <span>UID: {uid}</span>}
    </div>
  );
}
