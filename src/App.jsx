import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Education from './components/Education'
import ProjectList from './components/ProjectList'
import Skills from './components/Skills'




function App() {

  const [theme, setTheme] = useState('dark')
  const [isdisable, setIsDisable] = useState(false)
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])
  const handleMobMenu = () => {
    setIsDisable(true)
  }
  const handleExit = () => {
    setIsDisable(false)
  }

  return (
    <div className={`app ${theme}`}>
      <header className='header'>

        <a className='a__h3' href="#home"><h3  className='header__logo'>[ CH ]</h3></a>
        <nav className='header__nav'>
          <ul className='header__ul'>
            <li className='header__li' ><a className='header__a' href="#home">HOME</a></li>
            <li className='header__li' ><a className='header__a' href="#about">ABOUT</a></li>
            <li className='header__li' ><a className='header__a' href="#skills">SKILLS</a></li>
            <li className='header__li' ><a className='header__a' href="#education">EDUCATION</a></li>
            <li className='header__li' ><a className='header__a' href="#projects">PROJECTS</a></li>
            <li className='header__li' ><a className='header__a' href="#contact">CONTACT</a></li>
          </ul>
        </nav>
        <div className="header__btns">
          <button className={`mode__btn ${theme}`} onClick={toggleTheme}>
            <span className='mode__span'><i className='bx bxs-spray-can'></i></span>
          </button>
          <div className='mobMenu'>
            <button className='modMenu__btn' onClick={handleMobMenu}><i className='bx bx-menu'></i></button>
          </div>
        </div>



      </header>

      <div className={`menu ${isdisable && "menu__disable"}`}>
        <div className='div__x'><span onClick={handleExit} className='span__x'><i className='bx bx-x'></i></span></div>
        <ul className='menu__ul'>
          <li className='menu__li' ><a className='menu__a' onClick={handleExit} href="#home">HOME</a></li>
          <li className='menu__li' ><a className='menu__a' onClick={handleExit} href="#about">ABOUT</a></li>
          <li className='menu__li' ><a className='menu__a' onClick={handleExit} href="#skills">SKILLS</a></li>
          <li className='menu__li' ><a className='menu__a' onClick={handleExit} href="#education">EDUCATION</a></li>
          <li className='menu__li' ><a className='menu__a' onClick={handleExit} href="#projects">PROJECTS</a></li>
          <li className='menu__li' ><a className='menu__a' onClick={handleExit} href="#contact">CONTACT</a></li>
        </ul>
      </div>

      <section className='home' id='home'>
        <div className='home__title-container'>
          <h2 className='home__title'>Hi,</h2>
          <h2 className='home__name'> I'm <span className='name__span'>Cristian</span></h2>
          <h2 className='home__h2'>FullStack web developer</h2>
          <p className='home__p'>Experience on React, JS and Node JS!</p>
        </div>

        <h1 className='home__logo'><span className='home__logo-span'>[ CH ]</span></h1>


        <div className='home__icons-container'>
          <a className='home__a' href=""><i className='bx bxl-linkedin-square'></i></a>
          <a className='home__a' href=""><i className='bx bxl-github' ></i></a>
          <a className='home__a' href=""><i className='bx bx-envelope' ></i></a>
        </div>

      </section>

      <section className='about' id='about'>
        <About />
      </section>

      <section className='skills' id='skills'>
        <Skills />
        <div className='soft__skills'>
          <ul className='soft__ul'>
            <li className='soft__li'>Teamwork,</li>
            <li className='soft__li'>Problem Solving,</li>
            <li className='soft__li'>Adaptability,</li>
            <li className='soft__li'>Critical thinking,</li>
            <li className='soft__li'>Leadership</li>
          </ul>
        </div>
      </section>

      <section className='education' id='education'>
        <Education />
      </section>

      <section className='projects' id='projects'>
        <ProjectList />
      </section>

      <section className='contact' id='contact'>
        <Contact />
      </section>
    </div>
  )
}

export default App
