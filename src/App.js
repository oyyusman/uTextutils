import logo from "./logo.svg";
import "./App.css";
import Navbar from "./compnent/Navbar";
import Textfrom from "./compnent/Textfrom";
import About from "./compnent/About";
import Alert from "./compnent/Alert";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      // to chANGE THE COLOR OF WHOLE PAGE
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enalble", "success");
      document.title = "uTextutils-dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enalble", "danger");
      document.title = "uTextutils-light mode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="uTextutils"
          aboutm="About us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <Textfrom
                  showAlert={showAlert}
                  heading="Enter your text to analyze"
                  mode={mode}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
