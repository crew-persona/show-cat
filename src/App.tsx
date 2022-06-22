import Router from "Router";
import globalStyles from "@styles/globalStyles";
import Recoil from "recoil";

function App() {
  // Apply global styles
  globalStyles();

  return (
    <>
      <Recoil.RecoilRoot>
        <Router />
      </Recoil.RecoilRoot>
    </>
  );
}

export default App;
