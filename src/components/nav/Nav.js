import React, { useEffect, useState } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCardChecklist} from 'react-icons/bs'
import {AiOutlineMessage} from 'react-icons/ai'



function Nav() {
  const [activeNav, setActiveNav] = useState("#header");
  const [scrollHeight, setScrollHeight] = useState(0);
  const [classWhenNotActive] = useState('bg-transparent rounded-full flex text-[color:var(--color-light)] sm:text-[1.5rem] sm:p-[0.8rem] text-[1.1rem] p-[0.5rem]')
  const [classWhenActive] = useState('bg-[color:var(--color-bg)] rounded-full flex text-white sm:text-[1.5rem] sm:p-[0.8rem] text-[1.1rem] p-[0.5rem]')
 
  useEffect(() => {
    
    const handleGetScrollHeight = () => {
      setScrollHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleGetScrollHeight)
    return () => {
      window.removeEventListener('scroll', handleGetScrollHeight)
    }
  }, [])

  useEffect(() => {
    const headerHeight = document.querySelector('#header').clientHeight
    const aboutHeight = document.querySelector('#about').clientHeight
    const portfolioHeight = document.querySelector('#portfolio').clientHeight
    const contactHeight = document.querySelector('#contact').clientHeight
    if(scrollHeight > (headerHeight / 4 * 3 )){
      setActiveNav('#about')
    }else{
      setActiveNav('#header')
    }

    if(scrollHeight > (headerHeight + aboutHeight / 4 * 3 )){
      setActiveNav('#portfolio')
    }

    if(scrollHeight > (headerHeight + aboutHeight + portfolioHeight / 4 * 3 )){
      setActiveNav('#contact')
    }

    if(scrollHeight + 500 > (headerHeight + aboutHeight + portfolioHeight + contactHeight )){
      setActiveNav('abc')
    }
   
  }, [scrollHeight])
    
  return (
    <nav className=' flex  fixed  bottom-[2rem]  left-[50%]  translate-x-[-50%] gap-[2rem] w-max bg-[#000000]/25 sm:py-[0.8rem] sm:px-[1.6rem] py-[0.6rem] px-[1.2rem] z-10 rounded-[3rem] backdrop-blur-lg '>
      <a href="#header"
        className={activeNav === '#header' ?  classWhenActive : classWhenNotActive}
        onClick={() => setActiveNav('#header')}
      >
        <AiOutlineHome className='hover:text-[#fff]'/>
      </a>
      <a href="#about"
       className={activeNav === '#about' ?  classWhenActive : classWhenNotActive}
       onClick={() => setActiveNav('#about')}
      ><AiOutlineUser className='hover:text-[#fff]'/></a>
      <a href="#portfolio"
      className={activeNav === '#portfolio' ?  classWhenActive : classWhenNotActive}
      onClick={() => setActiveNav('#portfolio')}
      >
        <BsCardChecklist className='hover:text-[#fff]'/></a>
      <a href="#contact"
       className={activeNav === '#contact' ?  classWhenActive : classWhenNotActive}
       onClick={() => setActiveNav('#contact')}
       ><AiOutlineMessage className='hover:text-[#fff]'/></a>
    </nav>
  )
}

export default Nav