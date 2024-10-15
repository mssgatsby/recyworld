import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./pages/productpage";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
