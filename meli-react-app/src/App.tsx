import "./App.scss";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Header from "./components/header/Header";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Breadcrumb
        categories={[
          "Eletronica, Audio y Video",
          "iPod",
          "Reproductores",
          "iPod touch",
          "32GB",
        ]}
      />
      <Outlet />
    </>
  );
}

export default App;
