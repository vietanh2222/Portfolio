import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub, BsFacebook } from 'react-icons/bs';

function HeaderSocial() {
  return (
    <div className=' lg:flex  md:flex  sm:hidden  hidden  flex-col  gap-y-[1rem]  flex-1  absolute  bottom-[3rem]  left-0  animate-fadeOutSocial '>
        <a 
        href='https://linkedin.com' 
        target="_blank" 
        rel="noreferrer"
        className='text-[color:var(--color-primary)] text-[1.6rem] hover:text-white '
        >
            <BsLinkedin />
        </a>
        <a 
            href='https://github.com/vietanh2222' 
            target="_blank" 
            rel="noreferrer" 
            className='text-[color:var(--color-primary)] text-[1.6rem] hover:text-white'
        >
            <BsGithub />
        </a>
        <a 
            href='https://www.facebook.com/profile.php?id=100010379702934' 
            target="_blank" 
            rel="noreferrer" 
            className='text-[color:var(--color-primary)] text-[1.6rem] hover:text-white'
        >
            <BsFacebook />
        </a>
        <div className='w-[1px] h-[2rem] bg-[color:var(--color-primary)] ml-[12px]'></div>
    </div>
  )
}

export default HeaderSocial