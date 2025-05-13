import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import AOS from "aos";
import "aos/dist/aos.css";
import Services from './components/Services/Services';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import ChooseVehicles from './components/ChooseVehicles/ChooseVehicles';
import AboutService from './components/AboutService/AboutService';

const App = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // AOS Initialization
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <ChooseVehicles></ChooseVehicles>
      <AboutService></AboutService>

      <Services />
      <Footer />
    </div>
  )
}

export default App