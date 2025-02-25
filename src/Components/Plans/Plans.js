import React from 'react'
import "./Plans.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"

function Plans() {
  return (
    <div className='plans-container'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header' style={{gap:"2rem"}}>
          <span className='stroke-text'>READY TO START</span>
          <span>YOUR JOURNEY</span>
          <span className='stroke-text'>NOW WITHUS</span>  
        </div>
        {/* plans card */}
        <div className='plans'>
            {
                plansData.map((plan, ind)=> {
                    return <div className='plan' key={ind}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className='features'>
                            {
                                plan.features.map((feature,ind) => {
                                    return <div className='feature' key={ind}>
                                        <img src={whiteTick} alt=""/>
                                        <span>{feature}</span>
                                    </div>
                                })
                            }
                        </div>
                        <div>
                            <span>See more benifits... </span>
                        </div>
                        <button className='btn'>Join Now</button>
                    </div>
                })
            }
        </div>

    </div>
  )
}

export default Plans