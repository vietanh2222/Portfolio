import React, { useState } from 'react'
import tasha from '../../assets/images/tasha.png';
import facebookclone from '../../assets/images/facebookclone.png';
import theband from '../../assets/images/TheBand.png';
import octavian from '../../assets/images/Octavian.png';
import { MdDone } from 'react-icons/md'
import { MdClose } from 'react-icons/md'


function Portfolio() {
  const [showInfoFacebookClone, setShowInfoFacebookClone] = useState(false)
  const [showInfoTasha, setShowInfoTasha] = useState(false)
  const [showInfoTheBand, setShowInfoTheBand] = useState(false)
  const [showInfoOctavian, setShowInfoOctavian] = useState(false)
  return (
    <section 
    id="portfolio" 
    className='
    pt-[2rem] 
    text-center 
    mt-[5rem] 
    min-h-screen 
    mx-auto
    w-[length:var(--container-width-sm)]
    md:w-[length:var(--container-width-md)]
    lg:w-[length:var(--container-width-lg)]
    '>
      <h5 className='font-medium text-[color:var(--color-light)]'>My Recent Work</h5>
      <h2 className='text-[1.8rem] sm:text-[2.5rem] text-[color:var(--color-primary)] mb-[5rem]'>Portfolio</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-[2rem]'>
        <article 
        className='
        bg-[color:var(--color-bg-variant)]
        p-[1.2rem]
        rounded-[2rem]
        border-[1px]
        border-solid
        border-transparent
        hover:border-[color:var(--color-primary-variant)]
        hover:bg-transparent
        transition
        '
        >
          <div className='flex items-center'>
            <img src={facebookclone} alt='' 
              className='rounded-[1.5rem] overflow-hidden mx-auto'
            />
          </div>
          <h3 className='mt-[1.2rem] mb-[2rem]'>FACEBOOK-CLONE</h3>
          <div className='flex gap-[1rem] mb-[1rem] justify-center flex-wrap'>
            <a 
            href='https://github.com/vietanh2222/facebook-clone' 
            target="_blank" 
            rel="noreferrer"
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
            '
            >GitHub</a>
            <a 
            href='https://facebook-clone-496ed.web.app' 
            target="_blank" 
            rel="noreferrer"
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
            >Live Demo</a>
            <button
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
            '
            onClick={() => {
              setShowInfoFacebookClone(true)
            }}
            >Informations</button>
          </div>
        </article>
        {showInfoFacebookClone && 
          <div className=' fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20 text-[color:var(--color-light)]'
                onClick={() => {setShowInfoFacebookClone(false)}}
          >
            
            <div style={{scrollbarWidth: 'none'}} className='text-left rounded-[2rem] overscroll-y-contain overflow-auto max-h-[60vh] relative flex flex-col gap-[1rem] w-[90%] md:w-[86%] lg:w-[60%] mx-auto p-[2rem] lg:p-[4rem] bg-[color:var(--color-bg)]  border-[color:var(--color-primary)] border-[1px] border-solid'
              onClick={(e) => {e.stopPropagation()}}
            >
              <div className='text-black hover:text-[color:var(--color-primary)] hover:bg-transparent hover:border-[color:var(--color-primary)] border-[1px] border-solid border-transparent cursor-pointer absolute right-0 top-0  p-[0.5rem] m-[1rem] md:m-[2rem] bg-[color:var(--color-light)] rounded-full '
                onClick={() => {setShowInfoFacebookClone(false)}}
              >
                <MdClose className='text-[1.5rem] '/>
              </div>
              <h1 className='text-[2rem] text-white text-center'>FACEBOOK CLONE</h1>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Features</h2>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Login with Gmail, Facebook. </p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Add new, delete and modify for Post and Comment.  </p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Reaction for post and comment. </p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Infinite-scroll Posts.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Search friend and go to profile.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Save search friends history.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Responsive.</p>
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Technologies</h2>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p className='text-left'><strong>Front End:</strong> ReactJs, React-Router-DOM, React-infinite-scroll-component, JavaScripts, CSS, HTML ....</p>
                
              </div>
              
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p className='text-left'><strong>Back End:</strong> Firebase - FireStore Database, Storage.</p>
                
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Member</h2>
              <div className='flex gap-[1rem] items-center' >
                Nguyen Viet Anh
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Fullpermission Account to Login</h2>
              <div className='text-left'>
                <p>You can login Gmail or Facebook with this fullpermission Account ( delete, update, add new ) !</p> 
                <p>Account: facebookclonelogin2222@gmail.com</p>
                <p>Password: 1234@abcd</p>
              </div>
            </div>
          </div>
        }
        <article 
        className='
        bg-[color:var(--color-bg-variant)]
        p-[1.2rem]
        rounded-[2rem]
        border-[1px]
        border-solid
        border-transparent
        hover:border-[color:var(--color-primary-variant)]
        hover:bg-transparent
        transition
        '
        >
          <div className='flex items-center'>
            <img src={tasha} alt='' 
              className='rounded-[1.5rem] overflow-hidden'
            />
          </div>
          <h3 className='mt-[1.2rem] mb-[2rem]'>TASHA STORE</h3>
          <div className='flex gap-[1rem] mb-[1rem] justify-center flex-wrap'>
            <a 
            href='https://github.com/vietanh2222/TashaStore' 
            target="_blank" 
            rel="noreferrer"
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
            '
            >GitHub</a>
            <a 
            href='https://tasha-store.web.app/HRKitchen.html' 
            target="_blank" 
            rel="noreferrer"
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
            >Live Demo</a>
             <button
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
            '
            onClick={() => {
              setShowInfoTasha(true)
            }}
            >Informations</button>
          </div>
          {showInfoTasha && 
          <div  className='fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20 text-[color:var(--color-light)]'
                onClick={() => {setShowInfoTasha(false)}}
          >
            
            <div style={{scrollbarWidth: 'none'}} className='text-left rounded-[2rem] overscroll-y-contain overflow-auto max-h-[60vh] relative flex flex-col gap-[1rem] w-[90%] md:w-[86%] lg:w-[60%] mx-auto p-[2rem] lg:p-[4rem] bg-[color:var(--color-bg)]  border-[color:var(--color-primary)] border-[1px] border-solid'
              onClick={(e) => {e.stopPropagation()}}
            >
              <div className='text-black hover:text-[color:var(--color-primary)] hover:bg-transparent hover:border-[color:var(--color-primary)] border-[1px] border-solid border-transparent cursor-pointer absolute right-0 top-0  p-[0.5rem] m-[1rem] md:m-[2rem] bg-[color:var(--color-light)] rounded-full '
                onClick={() => {setShowInfoTasha(false)}}
              >
                <MdClose className='text-[1.5rem] '/>
              </div>
              <h1 className='text-[2rem] text-white text-center'>TASHA STORE</h1>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Features</h2>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Sign Up, Sign In. </p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Form Validation. </p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Sort product by price range.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Search product by name.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Pagination.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Google Map.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Shopping Cart.</p>
              </div>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Responsive.</p>
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Technologies</h2>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p className='text-left'><strong>Front End:</strong> Bootstrap, Jquerry, JavaScripts, CSS, HTML.</p>
                
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Members</h2>
              <div className='flex gap-[1rem] items-center' >
                Nguyen Viet Anh, Nguyen Van Binh, Hoang Thi Thao, Nguyen Hoang Son.
              </div>
             
            </div>
          </div>
        }
        </article>
        <article 
        className='
        bg-[color:var(--color-bg-variant)]
        p-[1.2rem]
        rounded-[2rem]
        border-[1px]
        border-solid
        border-transparent
        hover:border-[color:var(--color-primary-variant)]
        hover:bg-transparent
        transition
        '
        >
          <div className='flex items-center'>
            <img src={theband} alt='' 
              className='rounded-[1.5rem] overflow-hidden'
            />
          </div>
          <h3 className='mt-[1.2rem] mb-[2rem]'>THE BAND</h3>
          <div className='flex gap-[1rem] mb-[1rem] justify-center flex-wrap'>
            <a 
            href='https://github.com/vietanh2222/TheBand' 
            target="_blank" 
            rel="noreferrer"
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
            '
            >GitHub</a>
            <a 
            href='https://theband-1f0a2.web.app/' 
            target="_blank" 
            rel="noreferrer"
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
            >Live Demo</a>
            <button
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
            '
            onClick={() => {
              setShowInfoTheBand(true)
            }}
            >Informations</button>
          </div>
          {showInfoTheBand && 
          <div  className='fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20 text-[color:var(--color-light)]'
                onClick={() => {setShowInfoTheBand(false)}}
          >
            
            <div style={{scrollbarWidth: 'none'}} className='text-left rounded-[2rem] overscroll-y-contain overflow-auto max-h-[60vh] relative flex flex-col gap-[1rem] w-[90%] md:w-[86%] lg:w-[60%] mx-auto p-[2rem] lg:p-[4rem] bg-[color:var(--color-bg)]  border-[color:var(--color-primary)] border-[1px] border-solid'
              onClick={(e) => {e.stopPropagation()}}
            >
              <div className='text-black hover:text-[color:var(--color-primary)] hover:bg-transparent hover:border-[color:var(--color-primary)] border-[1px] border-solid border-transparent cursor-pointer absolute right-0 top-0  p-[0.5rem] m-[1rem] md:m-[2rem] bg-[color:var(--color-light)] rounded-full '
                onClick={() => {setShowInfoTheBand(false)}}
              >
                <MdClose className='text-[1.5rem] '/>
              </div>
              <h1 className='text-[2rem] text-white text-center'>THE BAND</h1>
              <p className='text-center'> My first landingpage when learn HTML, CSS, JavaScript !</p>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Features</h2>

              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Responsive.</p>
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Technologies</h2>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p className='text-left'><strong>Front End:</strong> JavaScript, CSS, HTML.</p>
                
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Member</h2>
              <div className='flex gap-[1rem] items-center' >
                Nguyen Viet Anh
              </div>
             
            </div>
          </div>
        }
        </article>
        <article 
        className='
        bg-[color:var(--color-bg-variant)]
        p-[1.2rem]
        rounded-[2rem]
        border-[1px]
        border-solid
        border-transparent
        hover:border-[color:var(--color-primary-variant)]
        hover:bg-transparent
        transition
        '
        >
          <div className='flex items-center'>
            <img src={octavian} alt='' 
              className='rounded-[1.5rem] overflow-hidden'
            />
          </div>
          <h3 className='mt-[1.2rem] mb-[2rem]'>OCTAVIAN</h3>
          <div className='flex gap-[1rem] mb-[1rem] justify-center flex-wrap'>
            <a 
            href='https://github.com/vietanh2222/Octavian' 
            target="_blank" 
            rel="noreferrer"
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
            '
            >GitHub</a>
            <a 
            href='https://octavian-landingpage.web.app/' 
            target="_blank" 
            rel="noreferrer"
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
            >Live Demo</a>
            <button
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
            '
            onClick={() => {
              setShowInfoOctavian(true)
            }}
            >Informations</button>
          </div>
          {showInfoOctavian && 
          <div  className='fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20 text-[color:var(--color-light)]'
                onClick={() => {setShowInfoOctavian(false)}}
          >
            
            <div style={{scrollbarWidth: 'none'}} className='text-left rounded-[2rem] overscroll-y-contain overflow-auto max-h-[60vh] relative flex flex-col gap-[1rem] w-[90%] md:w-[86%] lg:w-[60%] mx-auto p-[2rem] lg:p-[4rem] bg-[color:var(--color-bg)]  border-[color:var(--color-primary)] border-[1px] border-solid'
              onClick={(e) => {e.stopPropagation()}}
            >
              <div className='text-black hover:text-[color:var(--color-primary)] hover:bg-transparent hover:border-[color:var(--color-primary)] border-[1px] border-solid border-transparent cursor-pointer absolute right-0 top-0  p-[0.5rem] m-[1rem] md:m-[2rem] bg-[color:var(--color-light)] rounded-full '
                onClick={() => {setShowInfoOctavian(false)}}
              >
                <MdClose className='text-[1.5rem] '/>
              </div>
              <h1 className='text-[2rem] text-white text-center'>OCTAVIAN</h1>
              <p className='text-center'> My first landingpage when learn Photoshop and FigMa !</p>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Features</h2>

              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p>Responsive.</p>
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Technologies</h2>
              <div className='flex gap-[1rem] items-center' >
                <div>
                  <MdDone className='text-[1.5rem] ' /> 
                </div>
                <p className='text-left'><strong>Front End:</strong> JavaScript, SCSS, HTML.</p>
                
              </div>
              <h2 className='text-[1.5rem] text-[color:var(--color-primary)] text-left'>Member</h2>
              <div className='flex gap-[1rem] items-center' >
                Nguyen Viet Anh
              </div>
             
            </div>
          </div>
        }
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio