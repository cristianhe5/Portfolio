import React from 'react'

const Education = () => {
  return (
    <div className='education__div'>
      <h2 className='education__title'>Education</h2>
      <div className='articles__container-div'>
        <article className='education__article'>
          <img className='education__log' src="/academlo.png" alt="" />
          <span className='education__span'>Web Development Fundamentals</span>
        </article>
        <article className='education__article'>
        <img className='education__log' src="/academlo.png" alt="" />
          <span className='education__span'>Front-End Development with React</span>
        </article>
        <article className='education__article'>
          <img className='education__log' src="/download.png" alt="" />
          <span className='education__span'>Environmental management</span>
        </article>
      </div>
    </div>
  )
}

export default Education