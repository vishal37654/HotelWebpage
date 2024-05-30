import React from 'react'
import menu from "./Image/bg img.png"
import bgimg from "./Image/foodimg page3.png"
import "./Thirdpage.css"

function Thirdpage() {
  return (
    <div >
        <img src={menu} alt=''className='backgroundimg3'/>
        <img src={bgimg} alt='' className='backgroundimg4'/>
        <div className='headings'>
          <h1>Our Awsome Restaurant</h1>
          <h3>DISCOVER OUR STORY</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /> Sed posuere nisl vel nisi molestie, at vehicula nulla lobortis.<br /> Interdum et malesuada fames ac ante ipsum primis in faucibus.<br /> Vestibulum nisl dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        
    </div>
  )
}

export default Thirdpage