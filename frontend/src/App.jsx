import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./LoginPage"
import LandingPage from "./LandingPage"


function App() {

  return (
    <div>
      <LoginPage /> {/* Return the LoginPage component here */}
    </div>
  );

  return (
    <div>
      <LandingPage />
    </div>
  );



  //const [count, setCount] = useState(0);

  // return (
  //   <>
  //     <h1>Artemis</h1>

  //   </>
  // );


  
}





export default App;
