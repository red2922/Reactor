import NavBar from "./pages/NavBar";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Navbar from "./pages/NavBar";
import About from "./pages/about";

function App() {
  return (
    <>
      <Navbar />
      <Route path="/about" element={<About />} />
    </>
  );
}
export default App;
