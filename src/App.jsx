import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext("light");
const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <Router>
      <ThemeContext.Provider value={theme}>
        <Header setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;