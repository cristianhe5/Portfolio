import React from 'react'

const ProjectList = () => {

  const mjs = {
    img1: 'WEATHER-APP: made with React/JS/HTML/CSS',
    img2: 'ONLINE STORE: made with JS/HTML/CSS',
    img3: 'RICK AND MORTY: made with React/JS/HTML/CSS. Search your Favorite caracter!',
    img4: 'POKEDEX: made with React/JS/HTML/CSS. Search your Favorite pokemon!'
  }
  return (
    <section className='projects__section'>
      <h2 className='projects__title'>Projects</h2>

      <div className='projects__img-container'>
        <div className='caja'>
          <img className='caja__img' src="/Screenshot 2023-12-06 185805.png" alt="" />
          <div className="div_caja">
            <p className='texto__p'>{mjs.img1}</p>
          </div>
        </div>
        <div className='caja'>
          <img className='caja__img' src="/Screenshot 2023-12-06 185900.png" alt="" />
          <div className="div_caja">
            <p className='texto__p'>{mjs.img2}</p>
          </div>
        </div>  
        <div className='caja'>
          <img className='caja__img' src="/Screenshot 2023-12-06 190001.png" alt="" />
          <div className="div_caja">
            <p className='texto__p'>{mjs.img3}</p>
          </div>
        </div>  
        <div className='caja'>
          <img className='caja__img' src="/Screenshot 2023-12-06 190033.png" alt="" />
          <div className="div_caja">
            <p className='texto__p'>{mjs.img4}</p>
          </div>
        </div>  
      </div>
    </section>
  )
}

export default ProjectList