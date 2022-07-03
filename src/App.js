import "./App.css";
import FormText from "./components/FormText";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    background: "light",
    text: "Enable Dark Mode",
    opposite: "dark",
  });

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode.background == "light") {
      document.body.style.background = "#042743";
      setMode({
        background: "dark",
        text: "Enable light mode",
        opposite: "light",
      });
      showAlert("Dark Mode has been enabled", "success");
    } else {
      document.body.style.background = "white";
      setMode({
        background: "light",
        text: "Enable Dark Mode",
        opposite: "dark",
      });
      showAlert("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="Stringify" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/" element={<FormText showAlert={showAlert} />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
