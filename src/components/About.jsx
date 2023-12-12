import React from 'react'

const About = () => {
  return (
    <section className='about__section'>
        <h2 className='about__title'>About</h2>
        <article className='about__article'>
          <img  className='about__img'src="/aboutMe.png" alt="" />
          <div className='about__div'>  
            <h2 className='about__h2'>Hello</h2>
            <p className='about__p'>I am Cristian Hernandez, I am a <span className='about__span'>Full-Stack developer.</span> some of the Tecnologies that I have experience are <span className='about__span'>React, JS, NodeJS, Html, Css, TypeScript</span> and others! I enjoy coding. I use my skills to propose innovative solutions for the needs, and satisfaction of the users on new challenges, new projects or code problems. I really feel that I am doing what I like, and that is why I am open to accept new opportunities.  </p>
            
          </div>
        </article>
    </section>
  )
}

export default About