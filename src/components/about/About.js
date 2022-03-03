import React, { useState } from 'react'
import me from "../../assets/images/me.png"
import {CgHello} from 'react-icons/cg'
import {FiUser} from 'react-icons/fi'
import {FaGraduationCap} from 'react-icons/fa'
import {FaBirthdayCake} from 'react-icons/fa'
import {AiFillHome} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import TOEIC from '../../assets/images/TOEIC_certification.jpg'
import diemhvnh from '../../assets/images/diemhvnh.jpg'
import Carousel from './Carousel'


function About({language}) {

  const [activeOption, setActiveOption] = useState('brief');
  const [activeClass] = useState('dark:text-[color:var(--color-bg-variant)] lg:min-w-[30%] flex-1 bg-transparent border-[1px] border-[color:var(--color-primary)] border-solid flex-col rounded-[1rem] p-[1.5rem] items-center flex grow cursor-pointer transition w-[70%] sm:w-fit')
  const [notActiveClass] = useState('lg:min-w-[30%] flex-1 bg-[color:var(--color-bg-variant)] border-[1px] border-transparent border-solid flex-col rounded-[1rem] p-[1.5rem] items-center flex grow hover:bg-transparent hover:border-[color:var(--color-primary-variant)] cursor-pointer transition w-[70%] sm:w-fit')
  
  const [showZoomTOEIC, setShowZoomTOEIC] = useState(false);
  const [showZoomPoint, setShowZoomPoint] = useState(false);
  const [showZoomHVNH, setShowZoomHVNH] = useState(false);

  return (
    <section id="about" 
    className=' mt-[5rem] w-[length:var(--container-width-sm)] md:w-[length:var(--container-width-md)] lg:w-[length:var(--container-width-lg)] mx-auto text-center pt-[2rem] '>
      {language === 'English' &&
      <>
        <h5 className='font-medium text-[color:var(--color-light)]'>Get To Know</h5>
        <h2 className='text-[1.8rem] sm:text-[2.5rem] text-[color:var(--color-primary)] mb-[5rem]'>About Me</h2>
        <div className='flex flex-col lg:flex-row items-center gap-y-[5rem] lg:gap-0 lg:items-start'>
          <div className='flex flex-1'>
            <div className=' w-[280px] md:w-[400px]  lg:w-[330px] xl:w-[400px] bg-gradient-to-b from-sky-900  rounded-[2rem] flex justify-center '>
                <div className=' w-[280px] md:w-[400px]   bg-gradient-to-b from-[color:var(--color-primary)]  rotate-12  rounded-[2rem] hover:rotate-0 cursor-pointer transition-all '>
                  <img src={me} alt="" className='rounded-[2rem]'/>
                </div>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <div className='flex flex-col sm:flex-row gap-[1.5rem] items-center'>
              <div 
              className={activeOption === 'brief' ? activeClass : notActiveClass}
              onClick={() => setActiveOption('brief')}
              >
                <CgHello 
                className='
                text-[color:var(--color-primary)]
                text-[1.5rem]
                mb-[1rem]
                '
                />
                <h2>Brief introduction</h2>
                
              </div>
              
              <div 
                className={activeOption === 'skills' ? activeClass : notActiveClass}
                onClick={() => setActiveOption('skills')}
              >
                <FiUser 
                  className='
                  text-[color:var(--color-primary)]
                  text-[1.5rem]
                  mb-[1rem]
                  '
                />
                <h2>My skills</h2>
                
              </div>
              
              <div 
              className={activeOption === 'cer' ? activeClass : notActiveClass}
              onClick={() => setActiveOption('cer')}
              >
                <FaGraduationCap 
                  className='
                  text-[color:var(--color-primary)]
                  text-[1.5rem]
                  mb-[1rem]
                  '
                />
                <h2 >Education</h2>
                
              </div>
            </div>
            {activeOption === 'brief' && 
              <div className='w-full flex flex-col mt-[3rem] mb-[5rem] text-[color:var(--color-light)] gap-[1rem] text-justify'>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Nguyen Viet Anh</h2>
                <div className='flex gap-[1rem] items-center' >
                  <FaBirthdayCake className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                  <p><strong>Birthday</strong>: 01/05/1994</p>
                </div>
                <div className='flex gap-[1rem] items-center' >
                  <AiFillHome className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                  <p><strong>Address</strong>: Ha Noi, Viet Nam</p>
                </div>
                <p>I graduated from Banking Academy, but I'm very interested in coding when learning about that. Currently, I am studying international developer at FPT APTECH center. In addition, through self-study, I honed my skills in front-end web development.</p>
                <p> I'm seeking to have an opportunity that matches my skills to improve my realistic knowledge and experience of technical and communication skills.</p>
              </div>
            }
            {activeOption === 'skills' && 
              <div className='w-full flex flex-col mt-[3rem] mb-[5rem] text-[color:var(--color-light)] gap-[1rem] text-center sm:text-justify'>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Progamming Languages</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem]'>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]' /> 
                    </div>
                    <p><strong>ReactJS</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]' /> 
                    </div>
                    <p><strong>Redux</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>Tailwindcss</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>Boostrap</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>SCSS</strong></p>
                  </div>
            
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>Javascript</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>CSS</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>HTML</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>SQL SERVER</strong></p>
                  </div>
                </div>
                <p className='text-justify'>(I haven't used SQL SERVER for a while)</p>
                <p className='text-justify'>I'm quite confident that I can catch up with other languages when needed very fast.</p>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Dev Tools</h2>
                <div className='flex gap-[1rem] items-center' >
                  <p className='text-justify'>VScode, WebBrower, Git, GitHub, Figma, Photoshop.</p>
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Personal Skills</h2>
                <div className='flex gap-[1rem] items-center' >
                  <p className='text-justify'>Write, present, teamwork.</p>
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Languages</h2>
                <div className='flex gap-[1rem] items-center' >
                  
                  <p className='text-justify'><strong>English</strong>: <span className='text-white dark:text-black'>TOEIC 780/990</span>. Listen, Read and understand specialized documents. </p>
                  
                </div>
                <div className='flex gap-[1rem] items-center'>
                  <p className='text-justify'><strong>Vietnamese</strong>: Native speaker.</p>
                </div>
                
              </div>
            }
            {activeOption === 'cer' && 
              <div className='w-full flex flex-col mt-[3rem] mb-[5rem] text-[color:var(--color-light)] gap-[1rem] text-justify'>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>TOEIC</h2>
                <div className='flex gap-[1rem] items-center ' >
                  
                    
                    <img 
                    src={TOEIC} 
                    alt="TOEIC_certification" 
                    className='rounded-xl cursor-zoom-in'
                    onClick={() => {setShowZoomTOEIC(true)}}
                    
                    />
                  
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>FPT APTECH SEM1 REPORT</h2>
                <div className='flex justify-center cursor-zoom-in' onClick={() => {setShowZoomPoint(true)}}>
                  <Carousel />
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)] cursor-pointer'
                    onClick={() => {setShowZoomHVNH(true)}}
                >BANKING ACADEMY (2012-2016) - <span className='text-[color:var(--color-light)]'>Click to show</span></h2>
                {showZoomTOEIC && 
                <div 
                className='cursor-zoom-out fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'
                onClick={() => {setShowZoomTOEIC(false)}}
                >
                  <div className='p-[1rem] lg:p-[5rem]'>
                    <img src={TOEIC} alt="" className='rounded-[1rem] lg:rounded-[3rem]'/>
                  </div>
                </div>
                
                }
                {showZoomPoint && 
                <div 
                className='cursor-zoom-out fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'
                onClick={() => {setShowZoomPoint(false)}}
                >
                  <div className='p-[1rem] lg:p-[5rem] cursor-zoom-out'>
                    <Carousel />
                  </div>
                </div>
                
                }
                {showZoomHVNH && 
                <div 
                className='cursor-zoom-out fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'
                onClick={() => {setShowZoomHVNH(false)}}
                >
                  <div style={{scrollbarWidth: 'none'}} className='p-[1rem] lg:p-[5rem] max-h-[80vh] overflow-auto'>
                    <img src={diemhvnh} alt="" className='rounded-[1rem] lg:rounded-[3rem]'/>
                  </div>
                </div>
                
                }
              </div>
          
            }
            <a href="#contact"
                className=' w-[70%] sm:w-max  inline-block  text-[color:var(--color-bg)] bg-[color:var(--color-primary)] py-[0.75rem] px-[1.2rem] rounded-[0.4rem] cursor-pointer border-solid border-[1px] border-[color:var(--color-primary)] hover:bg-white hover:text-[color:var(--color-bg)] hover:border-transparent '
            >Let's Talk</a>
          </div>
        </div>
      </>}
      {language === 'VietNamese' &&
      <>
        <h5 className='font-medium text-[color:var(--color-light)]'>Thông tin</h5>
        <h2 className='text-[1.8rem] sm:text-[2.5rem] text-[color:var(--color-primary)] mb-[5rem]'>Về Tôi</h2>
        <div className='flex flex-col lg:flex-row items-center gap-y-[5rem] lg:gap-0 lg:items-start'>
          <div className='flex flex-1'>
            <div className=' w-[280px] md:w-[400px]  lg:w-[330px] xl:w-[400px] bg-gradient-to-b from-sky-900 rounded-[2rem] flex justify-center '>
                <div className=' w-[280px] md:w-[400px]   bg-gradient-to-b from-[color:var(--color-primary)]  rotate-12  rounded-[2rem] hover:rotate-0 cursor-pointer transition-all '>
                  <img src={me} alt="" className='rounded-[2rem]'/>
                </div>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <div className='flex flex-col sm:flex-row gap-[1.5rem] items-center'>
              <div 
              className={activeOption === 'brief' ? activeClass : notActiveClass}
              onClick={() => setActiveOption('brief')}
              >
                <CgHello 
                className='
                text-[color:var(--color-primary)]
                text-[1.5rem]
                mb-[1rem]
                '
                />
                <h2>Giới thiệu</h2>
                
              </div>
              
              <div 
                className={activeOption === 'skills' ? activeClass : notActiveClass}
                onClick={() => setActiveOption('skills')}
              >
                <FiUser 
                  className='
                  text-[color:var(--color-primary)]
                  text-[1.5rem]
                  mb-[1rem]
                  '
                />
                <h2>Kỹ năng</h2>
                
              </div>
              
              <div 
              className={activeOption === 'cer' ? activeClass : notActiveClass}
              onClick={() => setActiveOption('cer')}
              >
                <FaGraduationCap 
                  className='
                  text-[color:var(--color-primary)]
                  text-[1.5rem]
                  mb-[1rem]
                  '
                />
                <h2 >Học tập</h2>
                
              </div>
            </div>
            {activeOption === 'brief' && 
              <div className='w-full flex flex-col mt-[3rem] mb-[5rem] text-[color:var(--color-light)] gap-[1rem] text-justify '>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Nguyễn Việt Anh</h2>
                <div className='flex gap-[1rem] items-center' >
                  <FaBirthdayCake className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                  <p><strong>Ngày sinh</strong>: 01/05/1994</p>
                </div>
                <div className='flex gap-[1rem] items-center' >
                  <AiFillHome className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                  <p><strong>Địa chỉ</strong>: Hà Nội, Việt Nam</p>
                </div>
                <p> Tốt nghiệp Học Viện Ngân hàng nhưng tôi rất yêu thích Coding sau một thời gian tìm hiểu về nó. Hiện tại, tôi đang theo học chuyên ngành lập trình viên quốc tế tại trung tâm FPT APTECH. Ngoài ra, thông qua việc tự học, tôi đã trau dồi kỹ năng về web frontend.
                </p>
                <p>
                  Tôi đang tìm kiếm công việc phù hợp với kỹ năng của mình nhằm nâng cao kiến thức, kinh nghiệm thực tế về công nghệ và giao tiếp.
                </p>
              </div>
            }
            {activeOption === 'skills' && 
              <div className='w-full flex flex-col mt-[3rem] mb-[5rem] text-[color:var(--color-light)] gap-[1rem] text-center sm:text-justify'>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Ngôn ngữ lập trình</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[1rem]'>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]' /> 
                    </div>
                    <p><strong>ReactJS</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]' /> 
                    </div>
                    <p><strong>Redux</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>Tailwindcss</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>Boostrap</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>SCSS</strong></p>
                  </div>
            
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>Javascript</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>CSS</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>HTML</strong></p>
                  </div>
                  <div className='flex gap-[1rem] items-center' >
                    <div>
                      <MdDone className='text-[1.5rem] text-white dark:text-[color:var(--color-light)]'/> 
                    </div>
                    <p><strong>SQL SERVER</strong></p>
                  </div>
                </div>
                <p className='text-justify'>(Tôi đã không sử dụng SQL SERVER trong một khoảng thời gian)</p>
                <p className='text-justify'>Tôi khá là tự tin rằng mình có thể học nhanh các ngôn ngữ khác khi cần thiết.</p>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Công cụ hỗ trợ</h2>
                <div className='flex gap-[1rem] items-center' >
                  <p className='text-justify'>VScode, WebBrower, Git, GitHub, Figma, Photoshop.</p>
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Kỹ năng cá nhân khác</h2>
                <div className='flex gap-[1rem] items-center' >
                  <p className='text-justify'>Viết, thuyết trình, teamwork.</p>
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>Ngôn ngữ</h2>
                <div className='flex gap-[1rem] items-center' >
                  
                  <p className='text-justify'><strong>English</strong>: <span className='text-white dark:text-black'>TOEIC 780/990</span>. Nghe và đọc hiểu các tài liệu chuyên ngành. </p>
                  
                </div>
                <div className='flex gap-[1rem] items-center'>
                  <p className='text-justify'><strong>Việt Nam</strong>: Người bản ngữ.</p>
                </div>
                
              </div>
            }
            {activeOption === 'cer' && 
              <div className='w-full flex flex-col mt-[3rem] mb-[5rem] text-[color:var(--color-light)] gap-[1rem] text-center lg:text-justify'>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>TOEIC</h2>
                <div className='flex gap-[1rem] items-center ' >
                  
                    
                    <img 
                    src={TOEIC} 
                    alt="TOEIC_certification" 
                    className='rounded-xl cursor-zoom-in'
                    onClick={() => {setShowZoomTOEIC(true)}}
                    
                    />
                  
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)]'>FPT APTECH SEM1 REPORT</h2>
                <div className='flex justify-center cursor-zoom-in' onClick={() => {setShowZoomPoint(true)}}>
                  <Carousel />
                </div>
                <h2 className='text-[1.5rem] text-[color:var(--color-primary)] cursor-pointer'
                    onClick={() => {setShowZoomHVNH(true)}}
                >HỌC VIỆN NGÂN HÀNG (2012-2016) - <span className='text-[color:var(--color-light)]'>Ấn để xem</span></h2>
                {showZoomTOEIC && 
                <div 
                className='cursor-zoom-out fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'
                onClick={() => {setShowZoomTOEIC(false)}}
                >
                  <div className='p-[1rem] lg:p-[5rem]'>
                    <img src={TOEIC} alt="" className='rounded-[1rem] lg:rounded-[3rem]'/>
                  </div>
                </div>
                
                }
                {showZoomPoint && 
                <div 
                className='cursor-zoom-out fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'
                onClick={() => {setShowZoomPoint(false)}}
                >
                  <div className='p-[1rem] lg:p-[5rem] cursor-zoom-out'>
                    <Carousel />
                  </div>
                </div>
                
                }
                {showZoomHVNH && 
                <div 
                className='cursor-zoom-out fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-20'
                onClick={() => {setShowZoomHVNH(false)}}
                >
                  <div style={{scrollbarWidth: 'none'}} className='p-[1rem] lg:p-[5rem] max-h-[80vh] overflow-auto'>
                    <img src={diemhvnh} alt="" className='rounded-[1rem] lg:rounded-[3rem]'/>
                  </div>
                </div>
                
                }
              </div>
          
            }
            <a href="#contact"
                className=' w-[70%] sm:w-max  inline-block  text-[color:var(--color-bg)] bg-[color:var(--color-primary)] py-[0.75rem] px-[1.2rem] rounded-[0.4rem] cursor-pointer border-solid border-[1px] border-[color:var(--color-primary)] hover:bg-white hover:text-[color:var(--color-bg)] hover:border-transparent '
            >Nhắn tin</a>
          </div>
        </div>
      </>}
    </section>
  )
}

export default About