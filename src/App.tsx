import "aos/dist/aos.css";
import  AOS from "aos";
import Header from "./components/Header";
import HeroSection from "./sections/Hero/HeroSection";
import Services from "./sections/Services/Services";
import { useEffect } from "react";
import About from "./sections/About/About";
import Testimonials from "./sections/Testimonials/Testimonials";
import Blog from "./sections/Blog/Blog";
import FAQ from "./sections/FAQ/FAQ";
import Contact from "./sections/Contact/Contact";
import Footer from "./components/Footer";


export default function App(){
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true, 
    });
  }, []);
  return (
    <div className="w-full min-h-screen bg-gray-950 overflow-x-hidden">
      <Header/>
      <HeroSection/>
      <Services/>
      <About/>
      <Testimonials/>
      <Blog/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </div>
  )
}

