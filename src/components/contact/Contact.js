import React, { useRef } from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { AiOutlineMessage } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import emailjs from '@emailjs/browser';

function Contact({ language }) {

  const form = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_30gvrsx', 'template_t676d1k', form.current, 'user_TiZ1DSiWWF9jfToiPflac')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    alert('Your message have been sent. Thank you !')
  };

  return (
    <section id="contact" className='pt-[2rem] text-center mt-[5rem] w-[90%] sm:w-[86%] md:w-[88%] lg:w-[76%] xl:w-[48%] mx-auto'>
      {language === 'English' && 
      <>
        <h5 className='font-medium text-[color:var(--color-light)]'>Get In Tough</h5>
        <h2 className='text-[1.8rem] sm:text-[2.5rem] text-[color:var(--color-primary)] mb-[5rem]'>Contact Me</h2>
        <div className='flex flex-col md:flex-row gap-[2rem] items-center md:items-start'>
          <div className='flex flex-col gap-y-[2rem] items-center md:items-start'>
            <article
              className=' bg-[color:var(--color-bg-variant)] p-[1.2rem] rounded-[2rem] border-[1px] border-solid border-transparent hover:border-[color:var(--color-primary-variant)] hover:bg-transparent transition w-[100%] lg:min-w-[300px] group'>
              <MdOutlineEmail
                className=' text-[color:var(--color-primary)] text-[1.5rem] mb-[1rem] mx-auto'/>
                
              <h4 className='dark:group-hover:text-[color:var(--color-primary)]'>Email</h4>
              <h5
                className='text-[1rem] text-[color:var(--color-light)]'
              >nguyenvietanh2222@gmail.com</h5>
              <a href='mailto:nguyenvietanh2222@gmail.com'
                className='text-[color:var(--color-primary)] hover:text-white'
                target="_blank" rel="noreferrer"
              >Send an email</a>
            </article>
            <article
              className=' bg-[color:var(--color-bg-variant)] p-[1.2rem] rounded-[2rem] border-[1px] border-solid border-transparent hover:border-[color:var(--color-primary-variant)] hover:bg-transparent transition w-[100%] group '
            >
              <AiOutlineMessage
                className=' text-[color:var(--color-primary)] text-[1.5rem] mb-[1rem] mx-auto '
              />
              <h4 className='dark:group-hover:text-[color:var(--color-primary)]'>Message</h4>
              <h5
                className='text-[1rem] text-[color:var(--color-light)]'
              >Nguyen Viet Anh</h5>
              <a href='https://m.me/100010379702934'
                className='text-[color:var(--color-primary)] hover:text-white'
                target="_blank" rel="noreferrer"
              >Send a message</a>
            </article>
            <article
              className=' bg-[color:var(--color-bg-variant)] p-[1.2rem] rounded-[2rem] border-[1px] border-solid border-transparent hover:border-[color:var(--color-primary-variant)] hover:bg-transparent transition w-[100%] group '
            >
              <BiPhoneCall
                className=' text-[color:var(--color-primary)] text-[1.5rem] mb-[1rem] mx-auto '
              />
              <h4 className='dark:group-hover:text-[color:var(--color-primary)]'>Phone</h4>
              <h5
                className='text-[1rem] text-[color:var(--color-light)]'
              >039 655 6211</h5>
              <a href='tel:+0396556211'
                className='text-[color:var(--color-primary)] hover:text-white'
                target="_blank" rel="noreferrer"
              >Call now</a>
            </article>
          </div>
          <form
            ref={form}
            onSubmit={handleSendEmail}
            className="flex flex-col gap-[2rem] flex-1 items-center md:w-fit"
          >
            <input
              type="text"
              name='name'
              placeholder='Your Full Name'
              className=' p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-[color:var(--color-primary-variant)] resize-none text-white w-full '
            />
            <input
              type="text"
              name='email'
              placeholder='Your Email'
              className=' p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-[color:var(--color-primary-variant)] resize-none text-white w-full '
            />
            <textarea
              name="message"
              rows="7"
              placeholder='Your Message'
              className=' p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-[color:var(--color-primary-variant)] resize-none text-white w-full '

            />
            <button
              type='submit'
              className=' w-max  inline-block  text-[color:var(--color-bg)] bg-[color:var(--color-primary)] py-[0.75rem] px-[1.2rem] rounded-[0.4rem] cursor-pointer border-solid border-[1px] border-[color:var(--color-primary)] hover:bg-white hover:text-[color:var(--color-bg)] hover:border-transparent '
            >Send Message</button>
          </form>
        </div>
      </>}
      {language === 'VietNamese' && 
      <>
        <h5 className='font-medium text-[color:var(--color-light)]'>Liên hệ</h5>
        <h2 className='text-[1.8rem] sm:text-[2.5rem] text-[color:var(--color-primary)] mb-[5rem]'>VỚI TÔI</h2>
        <div className='flex flex-col md:flex-row gap-[2rem] items-center md:items-start'>
          <div className='flex flex-col gap-y-[2rem] items-center md:items-start'>
            <article
              className=' bg-[color:var(--color-bg-variant)] p-[1.2rem] rounded-[2rem] border-[1px] border-solid border-transparent hover:border-[color:var(--color-primary-variant)] hover:bg-transparent transition w-[100%] lg:min-w-[300px] group '
            >
              <MdOutlineEmail
                className='
                text-[color:var(--color-primary)]
                text-[1.5rem]
                mb-[1rem]
                mx-auto
                '
              />
              <h4 className='dark:group-hover:text-[color:var(--color-primary)]'>Email</h4>
              <h5
                className='text-[1rem] text-[color:var(--color-light)]'
              >nguyenvietanh2222@gmail.com</h5>
              <a href='mailto:nguyenvietanh2222@gmail.com'
                className='text-[color:var(--color-primary)] hover:text-white'
                target="_blank" rel="noreferrer"
              >Gửi Email</a>
            </article>
            <article
              className=' bg-[color:var(--color-bg-variant)] p-[1.2rem] rounded-[2rem] border-[1px] border-solid border-transparent hover:border-[color:var(--color-primary-variant)] hover:bg-transparent transition w-[100%] group '
            >
              <AiOutlineMessage
                className='
                text-[color:var(--color-primary)]
                text-[1.5rem]
                mb-[1rem]
                mx-auto
                '
              />
              <h4 className='dark:group-hover:text-[color:var(--color-primary)]'>Tin nhắn</h4>
              <h5
                className='text-[1rem] text-[color:var(--color-light)]'
              >Nguyễn Việt Anh</h5>
              <a href='https://m.me/100010379702934'
                className='text-[color:var(--color-primary)] hover:text-white'
                target="_blank" rel="noreferrer"
              >Gửi tin nhắn</a>
            </article>
            <article
              className=' bg-[color:var(--color-bg-variant)] p-[1.2rem] rounded-[2rem] border-[1px] border-solid border-transparent hover:border-[color:var(--color-primary-variant)] hover:bg-transparent transition w-[100%] group '
            >
              <BiPhoneCall
                className='
                text-[color:var(--color-primary)]
                text-[1.5rem]
                mb-[1rem]
                mx-auto
                '
              />
              <h4 className='dark:group-hover:text-[color:var(--color-primary)]'>Điện thoại</h4>
              <h5
                className='text-[1rem] text-[color:var(--color-light)]'
              >039 655 6211</h5>
              <a href='tel:+0396556211'
                className='text-[color:var(--color-primary)] hover:text-white'
                target="_blank" rel="noreferrer"
              >Gọi ngay</a> 
            </article>
          </div>
          <form
            ref={form}
            onSubmit={handleSendEmail}
            className="flex flex-col gap-[2rem] flex-1 items-center md:w-fit"
          >
            <input
              type="text"
              name='name'
              placeholder='Họ và tên'
              className=' p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-[color:var(--color-primary-variant)] resize-none text-white w-full '
            />
            <input
              type="text"
              name='email'
              placeholder='Email của bạn'
              className=' p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-[color:var(--color-primary-variant)] resize-none text-white w-full '
            />
            <textarea
              name="message"
              rows="7"
              placeholder='Tin nhắn của bạn'
              className=' p-[1.5rem] rounded-[0.5rem] bg-transparent border-[2px] border-solid border-[color:var(--color-primary-variant)] resize-none text-white w-full '

            />
            <button
              type='submit'
              className=' w-max  inline-block  text-[color:var(--color-bg)] bg-[color:var(--color-primary)] py-[0.75rem] px-[1.2rem] rounded-[0.4rem] cursor-pointer border-solid border-[1px] border-[color:var(--color-primary)] hover:bg-white hover:text-[color:var(--color-bg)] hover:border-transparent '
            >Gửi tin nhắn</button>
          </form>
        </div>
      </>}
    </section>
  )
}

export default Contact