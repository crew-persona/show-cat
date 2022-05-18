import { RecoilRoot } from "recoil";
import Router from "Router";
import globalStyles from "@styles/globalStyles";

function App() {
  // Apply global styles
  globalStyles();
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
