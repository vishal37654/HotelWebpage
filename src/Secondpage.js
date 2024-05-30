import React from 'react'
import image from "./Image/menu bg img.png"
import "./Secondpage.css"
import img2 from"./Image/bg img 2.png"
import img from "./Image/page 2 bgimg.png"
import img3 from "./Image/page2 bgimg3.png"
function Secondpage() {
  return (
    <div >
    <img src={image} className='backgroundimg2' alt=''/>
    
    <div className='heading1'>
     <h1>The Perfect Offer For You</h1>   
    </div>
    <div className='ptag'>
    <h3>From Our Master Chef</h3>    
    </div>
    <div className='container'>
      <figure>
      <img src={img} alt='pasta' />  
      <figcaption>Veg Pasta</figcaption>
      <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </figure>
      <figure>
        <img src={img2} alt='' />
        <figcaption>Tomato Pasta</figcaption>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet nisi</p>
      </figure>
      <figure>
        <img src={img3} alt='' />
        <figurecaption>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras velindustry's standard dummy text.</p>
        </figurecaption>
      </figure>
    </div>
    </div>
  )
}

export default Secondpage