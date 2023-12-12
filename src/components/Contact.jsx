import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'


const Contact = () => {

   const formRef = useRef()
   const [error, setError] = useState(false)
   const [success, setSuccess] = useState(false)


   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e1o4mzl', 'template_kmm3shn', formRef.current, 'ka7N8KqNyxoXZIxhe')
      .then((result) => {
          setSuccess(true)
          formRef.current.reset()
      }, (error) => {
        setError(true)
          console.log(error.text);
      });
  };
  

  return (
    <div className='contact__container'>
      <h2 className='contact__title'>Contact</h2>
      <div className='contact__form-container'>
        <form className='contact__from' ref={formRef} onSubmit={sendEmail}>
            <input className='contact__input' type="text" required placeholder='Name' name='name'/>
            <input className='contact__input' type="text" placeholder='Email' name='email'/>
            <textarea className='contact__input' rows={8} placeholder='messege' name='message'/>
          <button className='contact__btn'>Send<i className='bx bxs-up-arrow-alt' ></i></button>
          {error && 'Error'}
          {success && 'Success'}
        </form>
      </div>
    </div>
  )
}

export default Contact