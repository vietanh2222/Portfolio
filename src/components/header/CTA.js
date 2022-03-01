import React from 'react'

function CTA() {
  return (
    <div className='pt-[2rem] flex gap-x-[2rem] justify-center items-center '>
        <a href='#contact' download={true}
        className='
        w-max 
        inline-block 
        text-[color:var(--color-primary)]
        py-[0.75rem]
        px-[1.2rem]
        rounded-[0.4rem]
        cursor-pointer
        border-solid
        border-[1px]
        border-[color:var(--color-primary)]
        hover:bg-white
        hover:text-[color:var(--color-bg)]
        hover:border-transparent
        '>Download CV</a>
        <a href='#contact'
           className='
           w-max 
           inline-block 
           text-[color:var(--color-bg)]
           bg-[color:var(--color-primary)]
           py-[0.75rem]
           px-[1.2rem]
           rounded-[0.4rem]
           cursor-pointer
           border-solid
           border-[1px]
           border-[color:var(--color-primary)]
           hover:bg-white
           hover:text-[color:var(--color-bg)]
           hover:border-transparent
           '
        >Let's Talk</a>
    </div>
  )
}

export default CTA