import React from 'react'
import pics from "./Image/bg img.png"
import "./Fifthpage.css"
import event from "./Image/pg5 profilepic 1.png"
import picture from "./Image/Bgimg5.png"
import pic from "./Image/contact details 8.png"

function Fifthpage() {
  return (
    <div>
      <img src={pics}alt='pics' className='bgimg5' ></img>  
    <div className='containers'>
     <figure>
      <img src={event} alt='profilepic' />
      <figcaption><h4>Sarah Wilson</h4><br></br>
      <h5>HEAD CHEF</h5>
      </figcaption>  
      <p>Lorem ipsum dolor sit ametat vehicula nulla lobortis. Interdum et malesuada fames ac ante ipsum primisvel nisi molestie, at vehicula nulla lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
     </figure>
     <figure>
      <img src={picture} alt='profilepic' />
      <figcaption><h4>Richard Mark</h4><br></br>
      <h5>HEAD CHEF</h5>
      </figcaption>  
      <p>Lorem ipsum dolor sit ametat vehicula nulla lobortis. Interdum et malesuada fames ac ante ipsum primisvel nisi molestie, at vehicula nulla lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus</p>
     </figure>
    </div>
    <div className='contactbgimg'>
     <img src={pic} alt='bgimg' />   
    <h2>Follow</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere nisl vel nisi molestie, at vehicula nulla lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum nisl. </p>
    <input type='gmail' placeholder='Enter Your Email' />
    <button>Submit</button>
    
    <h3>Hours</h3>
    <div className='time'>
     <p>Monday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      9.00-10.00
        Tuesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      9.00-10.00
        Wednesday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   9.00-10.00
        Thursday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     9.00-10.00
        Friday&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;       9.00-10.00
        </p>   
        
    </div>
    <div className='lastline'>
        <p>©TastyRestaurant.All rights reserved</p>
    </div>
    </div>
    
    
    </div>
    
  )
}

export default Fifthpage