import React from 'react'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'

function Footer() {
  return (
    <footer 
      className='
      bg-[color:var(--color-primary)]
      py-[3rem]
      text-center
      text-[0.9rem]
      mt-[7rem]
      pb-[7rem]
      '
    >
      <a href="#header" className='text-[color:var(--color-bg)] text-[2rem] mb-[2rem] inline-block text hover:text-white'>Nguyen Viet Anh</a>
      <ul className='flex gap-[1rem] justify-center mb-[3rem]'>
        <li><a href="#header" className='text-[color:var(--color-bg)] text-[1.1rem] hover:text-white'>Home</a></li>
        <li><a href="#about" className='text-[color:var(--color-bg)] text-[1.1rem] hover:text-white'>About</a></li>
        <li><a href="#portfolio" className='text-[color:var(--color-bg)] text-[1.1rem] hover:text-white'>Portfolio</a></li>
        <li><a href="#contact" className='text-[color:var(--color-bg)] text-[1.1rem] hover:text-white'>Contact</a></li>
      </ul>
      <div className='flex gap-[1rem] justify-center mb-[3rem]'>
        <a 
        href="https://www.facebook.com/profile.php?id=100010379702934"
        target="_blank"
        rel="noreferrer"
        className='
        bg-[color:var(--color-bg)]
        p-[0.5rem]
        rounded-[0.5rem]
        border-[1px]
        border-[solid]
        border-transparent
        hover:bg-transparent
        hover:text-[color:var(--color-bg)]
        hover:border-[color:var(--color-bg)]
        transition
        '
        >
          <FaFacebookF className='text-[1.1rem]'/>
        </a>
        <a 
        href="https://github.com/vietanh2222" 
        target="_blank" 
        rel="noreferrer"
        className='
        bg-[color:var(--color-bg)]
        p-[0.5rem]
        rounded-[0.5rem]
        border-[1px]
        border-[solid]
        border-transparent
        hover:bg-transparent
        hover:text-[color:var(--color-bg)]
        hover:border-[color:var(--color-bg)]
        transition
        '
        >
          <FiGithub className='text-[1.1rem]'/>
        </a>
        <a 
        href="https://github.com/vietanh2222" 
        target="_blank" 
        rel="noreferrer"
        className='
        bg-[color:var(--color-bg)]
        p-[0.5rem]
        rounded-[0.5rem]
        border-[1px]
        border-[solid]
        border-transparent
        hover:bg-transparent
        hover:text-[color:var(--color-bg)]
        hover:border-[color:var(--color-bg)]
        transition
        '
        >
          <ImLinkedin2 className='text-[1.1rem]'/>
        </a>
      </div>
      <div>
        <small
          className='mb-[4rem] text-[color:var(--color-bg)] text-[1rem]'
        >&copy; Nguyen Viet Anh. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer