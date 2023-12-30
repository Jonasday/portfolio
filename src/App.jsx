import "./App.scss"
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
/* import { Test } from "./Test"; */

function App () {
  return <div>
    {/* <section>
      <Test />
    </section> */}
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services" /></section>
    <section>Services</section>
    <section id="Portfolio"><Parallax type="portfolio" /></section>
    <Portfolio />
    <section id="Contact">Contact</section>
  </div>;
}

export default App;
