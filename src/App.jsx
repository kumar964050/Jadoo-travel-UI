// components
import Header from "./components/Header";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import CompanyLogos from "./components/componayLogos";
import Destinations from "./components/Destinations";
import Category from "./components/Category";
import Home from "./components/Home";
import "./App.css";
import { useEffect, useState } from "react";
const App = () => {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    document.documentElement.setAttribute(
      "color-schema",
      theme ? "dark" : "light"
    );
  }, [theme]);

  return (
    <main className="container">
      <Header theme={theme} setTheme={setTheme} />
      <Home />
      <Category />
      <Destinations />
      <CompanyLogos />
      <Subscribe />
      <Footer />
      <center>All rights reserved@jadoo.co</center>
    </main>
  );
};

export default App;
