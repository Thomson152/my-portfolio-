import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
  <header>
  <div className="container  header__container">
    <h5>Hello I'm </h5>
    <h1>Thomson</h1>
    <h5 className='text-light'>Fullstack Developer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME}/>
      </div>
      <a href='#contact' className='scroll_down'>Scroll Down</a>
      
  </div> 
  </header>
  )
}

export default Header