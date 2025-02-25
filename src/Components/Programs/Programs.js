import React from 'react'
import "./Program.css"
import {programsData} from "../../data/programsData"
import RightArrow from "../../assets/rightArrow.png"

function Programs() {
  return (
    <div className='Programs' id="programs">
       <div className="programs-header"> 
        <span className='stroke-text'>Explore Our</span>
        <span>Programs</span>
        <span className='stroke-text'>to shape you</span>
       </div>
    
       <div className='pc'>
            {
                programsData.map( (program)=>{
                    return <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now">
                            <span>Join Now</span>
                            <img src={RightArrow} alt=""/>
                        </div>
                    </div>
                })
            }
       </div>
    </div>
  )
}

export default Programs