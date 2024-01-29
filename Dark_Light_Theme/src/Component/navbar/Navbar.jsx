import React from 'react'
import './Navbar.css';
import logo_light from './Assest/logo-black.png';
import logo_dark from './Assest/logo-white.png';
import search_icon_light from './Assest/search-w.png';
import search_icon_dark from './Assest/search-b.png';
import toggle_light from './Assest/night.png';
import toggle_dark from './Assest/day.png';
const Navbar = ({theme,setTheme}) => {

    const toggle_mood = ()=>{
        theme == 'light' ? setTheme('dark'):setTheme('light')
    }

  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark } alt="" className='logo' />
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
        </ul>
        <div className='serch-box'>
            <input type="text" placeholder='search' />
            <img src={theme == 'light' ? search_icon_light : search_icon_dark}></img>
        </div>

        <img src={theme == 'light' ? toggle_light : toggle_dark} onClick={()=>{toggle_mood()}} alt="" className='toggle-icon' />
        
    </div>

  )
}

export default Navbar