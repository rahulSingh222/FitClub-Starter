import React, {useState} from 'react'
import "./Testimonials.css"
import {testimonialsData} from "../../data/testimonialsData"
import leftArrow from "../../assets/leftArrow.png"
import rightArrow from "../../assets/rightArrow.png"
import {motion} from "framer-motion"

function Testimonials() {
   const transition = {type :"spring", duration : 2}

   const [selected, setSelected] = useState(0);
   const tlength =selected.length;
    

  return (
    <div className='Testimonials' id='testimonials'>
        <div className='left-t'>
           <span>Testimonials</span>
           <span className='stroke-text'>What they</span>
           <span>say about us</span>
           <span>
                {testimonialsData[selected].review}
           </span>
           <span>
            <span style={{color:"var(--orange)"}}>{testimonialsData[selected].name}</span>
             - {testimonialsData[selected].status}   
           </span>
        </div>

        {/* right */}
        <div className='right-t'>
          <motion.div
          initial={{opacity : 0, x:-100}}
          whileInView={{opacity:1, x:0}}
          transition={transition}
          ></motion.div> 
          <motion.div
          initial={{opacity : 0, x:100}}
          whileInView={{opacity:1, x:0}}
          transition={{...transition, type :"spring"}}
          ></motion.div> 
          <img src={testimonialsData[selected].image} alt=""/>

          {/* some issue here in clicking arrow buttons */}
          <div className='arrows'>
            <img onClick={ ()=> {
                selected===0?setSelected(tlength-1):setSelected((prev)=> prev-1)
            }} src={leftArrow} alt=""/>
            <img  onClick={ ()=> {
                selected===tlength-1 ?setSelected(0):setSelected((prev)=> prev+1)
            }} src={rightArrow} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Testimonials