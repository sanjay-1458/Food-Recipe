import "./App.scss";
import Header from "./Components/Header";
import Tabs from "./Components/Tab";
import RecipeLists from "./Components/RecipeList";
import { useState } from "react";

function App() {
  const [loader, setLoader] = useState(true);
  return (
    <div className="main">
      <Header />
      <Tabs setLoader={setLoader} />
      <RecipeLists setLoader={setLoader} />
      {loader && (
        <div className="loader">
          <div className="spinner"></div>
        </div>
      )}
    </div>
  );
}

export default App;
