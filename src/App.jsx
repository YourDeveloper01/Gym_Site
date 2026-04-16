import { useState } from "react";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import About2 from "./components/About/About2";
import Contact from "./components/Contact/Contact";
import Pricing from "./components/Pricing/Pricing";
import Feedback from "./components/Feedback/Feedback";
import Footer from "./components/footer/footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About/>
        <About2 />
        <Contact />
        <Pricing />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}

export default App;
