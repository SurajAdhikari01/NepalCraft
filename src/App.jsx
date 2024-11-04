import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NepaliDecorWebsite from "./NepalCraft";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NepaliDecorWebsite />
    </>
  );
}

export default App;
