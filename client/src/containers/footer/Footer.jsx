import React from 'react';
import './footer.css';
import tokulogo from '../../assets/logo.png'

const Footer = () => {

  return (
    <div className='toku__footer section__padding'>
        <div className='toku__footer-heading'>
          <h1 className='gradient__text'>Want to make life easy?</h1>
        </div>

        <div className='toku__footer-button'>
          <a href="/auth">
            <p>Join now</p>
          </a>
        </div>

        <div className='toku__footer-links'>
          <div className='toku__footer-links_logo'>
            <img src={tokulogo} alt='logo' />
            <p>Made with 💚 in Los Angeles, CA.</p>
          </div>
          <div className='toku__footer-links_div'>
            <h4>Links</h4>
            {/* <p>Social Media</p> */}
            <p><a href='/privacy'>Privacy Policy</a></p>
            <p><a href='/terms'>Terms and Conditions</a></p>
            <p><a href='/contact'>Contact</a></p>
          </div>
        </div>
        <div className='toku__footer-copyright'>
          <p>2022 Toku. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer;