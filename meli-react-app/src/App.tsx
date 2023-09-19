import "./App.scss";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Header from "./components/header/Header";

import { Outlet } from "react-router-dom";
import Loader from "./components/loader/Loader";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
