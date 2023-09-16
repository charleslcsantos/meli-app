// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.scss";
import Breadcrumb from "./components/breadcrumb/Breadcrumb";
import Header from "./components/header/Header";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Breadcrumb
        categories={["Eletronica, Audio y Video", "Ipod", "Reproductores"]}
      />
    </>
  );
}

export default App;
