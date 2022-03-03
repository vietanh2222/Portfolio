import React, { useState, useEffect } from 'react';
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";


function App() {
  
  const [language, setLanguage] = useState('English')
  const [classForEnlish] = useState('font-["Poppins", sans-serif] bg-[color:var(--color-bg)] dark:bg-white text-white leading-[1.7]')
  const [classForVietNamese] = useState('font-["Poppins", sans-serif] bg-[color:var(--color-bg)] dark:bg-white text-white leading-[1.7]')
  const handleChangeLanguage = () => {
    if(language === 'English'){
      setLanguage('VietNamese')
    }else{
      setLanguage('English')
    }
  }

  useEffect(() => {
    const userAgent = navigator.userAgent;
    const screenWidth = window.screen.width;
    
    if(screenWidth > 1024 && userAgent && (userAgent.toLocaleLowerCase().match(/chrome|chromium|crios/i) || userAgent.toLocaleLowerCase().match(/edg/i))){
      document.querySelector('html').style.fontSize = '80%';
    }
  }, [])
  
  return (
    <div 
      className={language === 'English' ? classForEnlish : classForVietNamese}
    >
      <Header 
        toggleChangeLanguage={handleChangeLanguage}
        language={language}
      />
      <Nav />
      <About 
        language={language}
      />
      <Portfolio 
        language={language}
      />
      <Contact 
        language={language}
      />
      <Footer 
        language={language}
      />
    </div>
  );
}

export default App;
