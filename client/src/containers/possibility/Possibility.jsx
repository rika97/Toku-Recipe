import React from 'react';
import './possibility.css';

import possibilityImage from '../../assets/personalgoals.svg';

const Possibility = () => {
  return (
    <div className="toku__possibility" id="possibility">
        <div className='toku__possibility-wrapper section__padding'>
          <div className="toku__possibility-image">
            <img src={possibilityImage} alt="possibility" />
          </div>
          <div className='toku__possibility-content'>
            <h4>Guess what... you don't need to do all the tedious tasks anymore</h4>
            <h1 className='gradient__text'>Get personalized recipe recommendations just for you</h1>
            <p>You will get personalized recipe recommendations depending on what you currently have in your 
              fridge and will show missing ingredients to add to your shopping list. This website can help you 
              save much more time than using a conventional recipe app.</p>
            <h4>Get started for free to change your lifestyle.</h4>
          </div>
        </div>
    </div>
  )
};

export default Possibility;