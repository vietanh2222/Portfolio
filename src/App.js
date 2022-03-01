import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div 
    className='
      font-["Poppins"] 
      bg-[color:var(--color-bg)] 
      text-white 
      leading-[1.7]
    '>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
