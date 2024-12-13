import "./App.css";
import { BrowserRouter as Bhagya, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Blog from "./components/Blog";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Bhagya>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Bhagya>
    </>
  );
}

export default App;
