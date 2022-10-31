import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./home";
import About from "./about";
import PageNotFound from "./pagenotfound";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>{" "}
        <Link to="/about">About</Link>
      </nav>
      <h1>Assignment 2</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
