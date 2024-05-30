import React from 'react'
import events from "./Image/Backgroundimg.png"
import "./Home.css"
import { MdRestaurant } from "react-icons/md"

function Home() {
 
    return (
    <div className='App'>
    <img src={events} alt='' className='background-img' ></img>
    <MdRestaurant className='logo'/>        
    <div className='upperh3'>
    <h3>Tasty Restaurant</h3>
    </div>
    
    <div className='link'>
     <a href=''>Home</a>
     <a href=''>About Us</a>
     <a href=''>Menu</a>
     <a href=''>Contact</a>
     
    
    <h3> We Are The Best</h3>
  
   <h1>
      Forget Mediocre <br></br>
      Restaurant
    </h1></div>
    <div className='lowerheading'>
    <h4>When while the lovely valley teems with vapour around me,and the <br></br>
    meridian sun strikes the upper surface...</h4>
   
   <button>Read More</button>
   </div>


    </div>
  )
}

export default Home