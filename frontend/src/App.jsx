import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import login from "./login";
import ImgUploader from "./components/ImgUploader.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Artemis</h1>
      <login />
    </>
  );
}

export default App;
