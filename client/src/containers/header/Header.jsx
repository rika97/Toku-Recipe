import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import shopping from '../../assets/shopping_yellow.svg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="toku__header section__padding" id="home">
        <div className='toku__header-content'>
          <h1 className='gradient__text'>Make grocery shopping easy with Toku</h1>
          <p>Toku is an all-in-one website that gives you access to grocery shopping deals, create
            grocery shopping lists, and share your own recipes. It even lets you manage your fridge stock, 
            allowing you to see what recipes you can cook with your current items.</p>

          <div className='toku__header-content__input'>
            <input id="email" type="email" placeholder="Your Email Address" autoComplete="on"></input>
            <button type="button" onClick={()=> {navigate('/auth')}}>Get Started (It's Free)</button>
          </div>

        </div>
        <div className="toku__header-image">
          <img src={shopping} alt="shopping icon" />
        </div>
    </div>
  )
};

export default Header;