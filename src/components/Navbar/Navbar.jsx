import React, { useState } from 'react'
import Logo from '../../assets/logo.svg'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Button } from '../Button/Button'
import './Navbar.scss'

const Menu = () => (
    <>
       <p><a href="#home">Home</a></p>
        <p><a href="#wgpt3">What is GPT3?</a></p>
        <p><a href="#possibility">Open AI</a></p>
        <p><a href="#features">Case Studies</a></p>
        <p><a href="#blog">Library</a></p>
    </>
  )

function Navbar() {

    const [toggleMenu, setToggleMenu] = useState(false);

  return (
   <div className='navbar'>
        <div className="navbar-logo">
            <img src={Logo} alt="logo"/>
        </div>
    <div className='navbar-links-container'>
            <Menu />
        </div>
    <div className='navbar-sign-in'>
        <Button primary big round>Sign in</Button>
    </div>
    {/* MenuMobile */}
    <div className="navbar-menu-mobile">
        {toggleMenu
            ? <RiCloseLine size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
            <div className="navbar-menu-mobile-container scale-up-center">
                <div className="navbar-menu-mobile-container-links">
                    <Menu />
                </div>
                <div className='navbar-sign-in-mobile'>
        <Button primary round>Sign in</Button>
    </div>
            </div>
        )}
    </div>
   </div>
  )
}

export default Navbar

{/* <div>
<header>
    <div id="logo"></div>
    <div className="toggle-menu">
        <img src={Logo} alt="" />
    </div>
    <ul className="menu-items">
        <li>
            <Link to="/" className='li'>Home</Link>
        </li>
        <li>
            <Link to="/" className='li'>Product</Link>
        </li>
        <li>
            <Link to="/" className='li'>Pricing</Link>
        </li>
        <li>
            <Link to="/" className='li'>Testimony</Link>
        </li>
        <Button primary="true" big="true" round="true">Travel Now</Button>
    </ul>
</header>
</div> */}