import React from 'react';
import { Feature } from '../../components';
import './about.css';

const about = () => {
  return (
    <div className="toku__about section__margin" id="about">
      <div className='toku__about-feature'>
        <Feature title="What is Toku?" text="An all in one food management app never like before!"/>
      </div>
      <div className='toku__about-heading'>
        <h1 className='gradient__text'>Meal prep is so much easier</h1>
        <p>Explore what you can do</p>
      </div>
      <div className='toku__about-container'>
        <Feature title='Personalized Discounts' text='Get access to special coupons for items in your shopping list'/>
        <Feature title='Reduce spendings and food waste' text="If you have unused food that's about to expire or have plans to eat out, efficiently manage your fridge stock to reduce food waste."/>
        <Feature title='Delicious recipes' text='Get access to recommended recipes and import your own recipe so you can plan your meals efficiently.' />
      </div>
    </div>
  )
}

export default about;