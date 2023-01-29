import { useState } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("");
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode has activated", "success");
      document.title = "Text Utils App - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has activated", "success");
      document.title = "Text Utils App";
    }
  };

  return (
    <div className="App">
      <Navbar title="Text Utils App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Textarea
          heading="Enter the text to analyse"
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <AboutUs /> */}
    </div>
  );
}

export default App;
