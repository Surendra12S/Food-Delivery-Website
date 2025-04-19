import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
      <div className='footer-content'>  
        <div className='footer-content-left' >
           <img className='footer-logo' src={assets.logo}/>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, placeat. Laudantium ab sit aperiam praesentium hic dolorem saepe fugit, quod blanditiis nemo exercitationem! Laborum blanditiis sunt et. Eveniet, ab at.</p>
           <div className='footer-social-icons'>
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
           </div>
        </div>
        <div className='footer-content-center'>
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='footer-content-right'>
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+1-212-343-7553</li>
            <li>Contact@tomato.com</li>
           </ul>
        </div>
      </div>
      <hr/>
      <p className='footer-copyright'>Copyright 2024 @ Tomato.com -  All Right Reserved.</p>
    </div>
  )
}

export default Footer
