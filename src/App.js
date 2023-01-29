import { useState } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import { Routes, Route } from "react-router-dom";

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
      <Routes>
        <Route
          path="/"
          element={
            <Textarea
              heading="Enter the text to analyse"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route
          path="home"
          element={
            <Textarea
              heading="Enter the text to analyse"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />

        <Route path="aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
