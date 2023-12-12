import React from 'react'

const Skills = () => {
  return (
    <article className='skills__article'>
        <h2 className='skills__title'>Skills</h2>
        <div className='skills__div'>
            <ul className='skills__ul'>
                <li className='skills__li'><span className='skills__icon'><i className='bx bxl-html5 logo__html' ></i></span><span className='skills__span-name'>HTML</span></li>
                <li className='skills__li'><span className='skills__icon'><i className='bx bxl-css3 logo__css' ></i></span><span className='skills__span-name'>CSS</span></li>
                <li className='skills__li'><span className='skills__icon'><i className='bx bxl-javascript logo__js' ></i></span><span className='skills__span-name'>JAVASCRIPT</span></li>
                <li className='skills__li'><span className='skills__icon'><i className='bx bxl-react logo__react' ></i></span><span className='skills__span-name'>REACT</span></li>
                <li className='skills__li'><span className='skills__icon'><i className='bx bxl-typescript logo__ts' ></i></span><span className='skills__span-name'>TYPESCRIPT</span></li>
            </ul>
        </div>
    </article>
  )
}

export default Skills