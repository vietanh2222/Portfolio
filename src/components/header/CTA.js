import React from 'react'
import NVA from '../../assets/images/NguyenVietAnh - Front-end Web Developer.pdf'
import NVAV from '../../assets/images/NguyễnViệtAnh - Front-end Web Developer.pdf'


function CTA({language}) {
  
  return (
    <div className='pt-[2rem] flex gap-x-[2rem] justify-center items-center '>
        <a href={language === 'English' ? NVA : NVAV} download={true}
        className=' w-max  inline-block  text-[color:var(--color-primary)] py-[0.75rem] px-[1.2rem] rounded-[0.4rem] cursor-pointer border-solid border-[1px] border-[color:var(--color-primary)] hover:bg-white hover:text-[color:var(--color-bg)] hover:border-transparent '>{language === 'English' ? "Dowload CV" : 'Tải xuống CV'}</a>
        <a href='#contact'
           className=' w-max  inline-block  text-[color:var(--color-bg)] bg-[color:var(--color-primary)] py-[0.75rem] px-[1.2rem] rounded-[0.4rem] cursor-pointer border-solid border-[1px] border-[color:var(--color-primary)] hover:bg-white hover:text-[color:var(--color-bg)] hover:border-transparent '>
        {language === 'English' ? "Let's talk" : 'Nhắn tin'}</a>
    </div>
  )
}

export default CTA