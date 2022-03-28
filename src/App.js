import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./component/Home";
import { Login } from "./component/Login";
import { Notfound } from "./component/Notfound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
