import React from 'react'
import "./Fourthpage.css"
import img from "./Image/menu bg img.png"
import pic1 from "./Image/chef1 img.png"
import pic2 from "./Image/chef2img.png"
import pic3 from "./Image/chef3img.png"
import bgimg from "./Image/bgimg pg4.png"
function Fourthpage() {
  return (

    <div>
     <img src={img} alt='' className='pagefourbgimg'/>   
     <div className='containerss'>
     <h1>Meet Our Chefs</h1>
     <h3>PROFESSIONAL COOK TEAM</h3>
     </div>
     <div className='chefsimg'>
     <img src={pic1} alt='chef1' className='chef1'/>
     <img src={pic2} alt='chef1' className='chef2'/>
     <img src={pic3} alt='chef1' className='chef3'/>
     </div>
     <div className='heading'>
      <img src={bgimg} alt='bgimg' className='bgimg4'/>
      <h1>We Created Best Dinning Experience<br />
          For You & Your Family
      </h1>
     <h3>SIMPLY BUT DELECIOUS EXPERIENCE</h3>
     </div>
     
    </div>
  )
}

export default Fourthpage