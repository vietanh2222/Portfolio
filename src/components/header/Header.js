import React, { useState } from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import me from "../../assets/images/me.png"
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

function Header({toggleChangeLanguage, language}) {
  const [mode, setMode] = useState('light');
  const r = document.querySelector(':root')
  const handleToggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.querySelector('html').classList.add('dark')
      
      r.style.setProperty('--color-light', '#8c8686');
    }else{
      setMode('light')
      document.querySelector('html').classList.remove('dark')
      r.style.setProperty('--color-light', 'rgba(255, 255, 255, 0.6)');
    }
  }

  return (
    <header
      id="header"
      className=" lg:w-[length:var(--container-width-lg)] md:w-[length:var(--container-width-md)] sm:w-[length:var(--container-width-sm)] w-[length:var(--container-width-sm)] lg:h-screen md:h-[82vh] sm:h-screen h-screen text-center pt-[7rem] overflow-hidden mx-auto relative" >
      {language === 'English' &&
      <>
        <button onClick={handleToggleMode} className="absolute top-0 left-0 mt-[1rem] dark:text-[color:var(--color-bg-variant)]">
        {mode === 'light' ? <BsFillSunFill className="text-[2rem]"/>  : <MdDarkMode className="text-[2rem]"/>}
        </button>
        <button onClick={toggleChangeLanguage} className="absolute top-0 right-0 mt-[1rem] dark:text-[color:var(--color-bg-variant)]">
          <p className="text-[1rem]">Vietnamese</p>
        </button>
        <div className="animate-fadeOut">
        <h5 className="font-medium text-[color:var(--color-light)]">Hello I'm</h5>
        <h1 className="text-[1.8rem] sm:text-[2.5rem] font-medium text-[color:var(--color-primary)]">Nguyen Viet Anh</h1>
        <h5 className="text-[color:var(--color-light)] font-medium">
          Frontend Web Developer
        </h5>
        
        <CTA 
          language={language}
        />
        </div>
        <div className="flex justify-between items-end h-[77%] relative">
          <HeaderSocial />
          <div className="w-[20rem] h-[27rem] sm:w-[25rem] sm:h-[31rem] rounded-t-[12rem] bg-gradient-to-b from-[color:var(--color-primary)] absolute bottom-0 left-[50%] translate-x-[-50%] animate-fadeOutImage">
              <img
              src={me}
              alt=""
              className="object-cover max-w-full
              h-fit"
              />
          </div>
          <div className="flex flex-1 justify-end absolute right-[-20px] bottom-[5rem] rotate-90 animate-fadeOutSocial">
              <a href="#contact" 
              className=" text-[color:var(--color-primary)]  text-[1rem] translate-y-[-1rem] hover:text-white md:block sm:hidden hidden " >
                  Scroll Down
              </a>
          </div>
        </div>
      </>}
      {language === 'VietNamese' &&
      <>
        <button onClick={handleToggleMode} className="absolute top-0 left-0 mt-[1rem] dark:text-[color:var(--color-bg-variant)]">
        {mode === 'light' ? <BsFillSunFill className="text-[2rem]"/>  : <MdDarkMode className="text-[2rem]"/>}
        </button>
        <button onClick={toggleChangeLanguage} className="absolute top-0 right-0 mt-[1rem] dark:text-[color:var(--color-bg-variant)]">
          <p className="text-[1rem]">EN</p>
        </button>
        <div className="animate-fadeOut">
        <h5 className="font-medium text-[color:var(--color-light)]">Xin chào ! Tôi là</h5>
        <h1 className="text-[1.8rem] sm:text-[2.5rem] font-medium text-[color:var(--color-primary)]">Nguyễn Việt Anh</h1>
        <h5 className="text-[color:var(--color-light)] font-medium">
          Frontend Web Developer
        </h5>
        
        <CTA 
          language={language}
        />
        </div>
        <div className="flex justify-between items-end h-[77%] relative">
          <HeaderSocial />
          <div className="w-[20rem] h-[27rem] sm:w-[25rem] sm:h-[31rem] rounded-t-[12rem] bg-gradient-to-b from-[color:var(--color-primary)] absolute bottom-0 left-[50%] translate-x-[-50%] animate-fadeOutImage">
              <img
              src={me}
              alt=""
              className="object-cover max-w-full
              h-fit"
              />
          </div>
          <div className="flex flex-1 justify-end absolute right-[-20px] bottom-[5rem] rotate-90 animate-fadeOutSocial">
              <a href="#contact" 
              className=" text-[color:var(--color-primary)]  text-[1rem] translate-y-[-1rem] hover:text-white md:block sm:hidden hidden " >
                  Cuộn Xuống
              </a>
          </div>
        </div>
      </>}
    </header>
  );
}

export default Header;
