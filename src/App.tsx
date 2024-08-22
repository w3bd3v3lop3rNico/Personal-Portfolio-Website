import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
