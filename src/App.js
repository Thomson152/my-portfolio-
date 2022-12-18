/** @format */

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/nav/Nav";
import Portifolio from "./components/Portifolio/Portifolio";

import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portifolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
