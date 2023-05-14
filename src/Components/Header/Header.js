import React, { useState } from 'react'
import "./Header.css"
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { Link } from 'react-scroll'

function Header() {

  const mobile = window.innerWidth<=768 ? true :false;
  const [menuOpen, setMenuOpened] = useState(false);
  return (
    <div className='header'>
        <img src={Logo} alt="The Fit Club" className='logo'></img>
        { menuOpen===false && mobile===true ?(
        <div onClick={() => setMenuOpened(!menuOpen)}>
          <img src={Bars} style={{width:'1.5rem', height:'1.5rem'}} alt="" />
        </div>) : 
        (<ul className='header-menu'>
            <li ><Link to='header' span={true} smooth={true} activeClass='active'  spy={true} onClick={() => setMenuOpened(!menuOpen)} >Home</Link></li>
            <li ><Link to='programs' span={true} smooth={true} spy={true} onClick={() => setMenuOpened(!menuOpen)} >Programs</Link></li>
            <li ><Link to='reason' span={true} smooth={true} spy={true} onClick={() => setMenuOpened(!menuOpen)} >Why us</Link></li>
            <li ><Link to='plans' span={true} smooth={true} spy={true} onClick={() => setMenuOpened(!menuOpen)} >Plans</Link></li>
            <li ><Link to='testimonials' span={true} smooth={true} spy={true} onClick={() => setMenuOpened(!menuOpen)} >Testimonials </Link></li>
        </ul>)}
    </div>
  )
}

export default Header