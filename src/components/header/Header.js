import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import me from "../../assets/images/me.png"


function Header() {
  return (
    <header
      id="header"
      className="
    lg:w-[length:var(--container-width-lg)]
    md:w-[length:var(--container-width-md)]
    sm:w-[length:var(--container-width-sm)]
    w-[length:var(--container-width-sm)]
    lg:h-screen
    md:h-[82vh]
    sm:h-screen
    h-screen
    text-center
    pt-[7rem]
    overflow-hidden
    mx-auto"
    >
      <div className="animate-fadeOut">
      <h5 className="font-medium text-[color:var(--color-light)]">Hello I'm</h5>
      <h1 className="text-[1.8rem] sm:text-[2.5rem] font-medium text-[color:var(--color-primary)]">Nguyen Viet Anh</h1>
      <h5 className="text-[color:var(--color-light)] font-medium">
        Front-end developer
      </h5>
      
      <CTA />
      </div>
      <div className="flex justify-between items-end h-[77%] relative">
        <HeaderSocial />
        <div className="
        w-[20rem] 
        h-[27rem] 
        sm:w-[25rem] 
        sm:h-[31rem] 
        rounded-t-[12rem] 
        bg-gradient-to-b 
        from-[color:var(--color-primary)] 
        absolute bottom-0 
        left-[50%] 
        translate-x-[-50%] 
        animate-fadeOutImage
        ">
            <img
            src={me}
            alt=""
            className="object-cover max-w-full
            h-fit"
            />
        </div>
        <div className="flex flex-1 justify-end absolute right-[-20px] bottom-[5rem] rotate-90 animate-fadeOutSocial">
            <a href="#contact" 
            className="
            text-[color:var(--color-primary)] 
            text-[1rem]
            translate-y-[-1rem]
            hover:text-white
            md:block
            sm:hidden
            hidden
            
            "
            >
                Scroll Down
            </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
