import { StatePovider } from "./component/Context/StateProvider";
import MainPage from "./component/MainPage";
import "./style/App.scss";

function App() {
  return (
    <>
      <StatePovider>
        <MainPage />
      </StatePovider>
    </>
  );
}

export default App;
