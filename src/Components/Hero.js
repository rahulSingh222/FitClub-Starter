import React from 'react';
import "./Hero.css";
import "../App.css"
import Header from './Header/Header';
import hero_image from "../assets/hero_image.png"
import hero_image_back from "../assets/hero_image_back.png"
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png"
import {motion} from "framer-motion"
import NumberCounter from "number-counter"


function Hero() {

  const transition = {type : 'tween', duration: 3}

  return (
    <div className="hero">
      {/* will see later  */}
      <div className='blur blur-h'></div>
        <div className="left-h">
            <Header/>
            <div className='the-best-ad'>
              <motion.div
              initial ={{left:"238px"}}
              whileInView = {{left : '8px'}}
              transition={transition}
              >
              </motion.div>
              <span>the best fitness club in the town</span>
            </div>
            <div className='hero-text'>
             <div>
              <span className='stroke-text'>Shape </span>
              <span>Your</span>
            </div> 
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
            </div>
            </div>
            {/* figures */}
             <div className="figures">
               <div>
                <span><NumberCounter end={140} start={100} delay='2' preFix='+'/></span>
                <span>expert coaches</span>
               </div>
               <div>
                <span><NumberCounter end={978} start={700} delay='2' preFix='+'/></span>
                <span>MEMBERS JOINED</span>
               </div>
               <div>
                <span><NumberCounter end={50} start={13} delay='2' preFix='+'/></span>
                <span>FITNESS PROGRAMS</span>
               </div>
             </div>

             {/* hero buttons */}          
            <div className='hero-buttons'>
              <button className='btn'>Get Started</button>
              <button className='btn'>Learn More</button>
            </div>
             
        </div>

        {/* Right side code */}
        
        <div className="right-h">
            <button className='btn'>Join now</button>
            <motion.div 
             initial={{right:"-1rem"}}
             whileInView={{right :"4rem"}}
             transition={{...transition, type :"spring"}}
            className='heart-rate'>
              <img src={Heart} alt=""></img>
              <span>Heart Rate</span><span>112 bpm</span>
            </motion.div>
            {/* hero images */}
            <img className='hero-image' src={hero_image} alt=""></img>
            <motion.img 
            initial={{right:"11rem"}}
            whileInView={{right :"28rem"}}
            transition={{...transition, type :"spring"}}
            className='hero-image-back' src={hero_image_back} alt=""></motion.img>
            {/* calories */}
        
            <motion.div 
            initial={{right:"42rem"}}
            whileInView={{right :"34rem"}}
            transition={{...transition, type :"spring"}}
            className='calories'>
              <img src={Calories} alt =""/>
              <div>
              < span>Calories Burned</span><span>220 kcal</span>
              </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Hero;