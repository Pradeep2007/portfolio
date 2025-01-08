import "./App.css"
import Navbar from "./components/navbar";
import Profile from "./components/profile";
import About from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  );
}

export default App;
