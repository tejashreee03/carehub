import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {MdFingerprint} from 'react-icons/md';
import {FaBars, FaTimes} from 'react-icons/fa';
import { Button } from './Button';
import './NavbarH.css';
import { IconContext } from 'react-icons/lib';

function NavbarH() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState (true);
  const [nav, setnav] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu =  () => setClick(false);
  const changeBackground = () => {
    if(window.scrollY >=50) {
      setnav(true);
    }
    else{
      setnav(false);
    }
  }
  window.addEventListener('scroll',changeBackground);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize',showButton);




  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <div className={nav ? "nav active" : "nav"}>
            <div className="navbar-container container">
                <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                    <MdFingerprint className='navbar-icon' />
                    CareHub
                </Link>
                <div className="menu-icon" onClick={handleClick} >
                  {click ? <FaTimes /> : <FaBars />} 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  {/* <li className='nav-item'>
                    <Link to='/Reports' className='nav-links' onClick={closeMobileMenu}>
                      Reports
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link to='/Appointment' className='nav-links'  onClick={closeMobileMenu}>
                      Appointment
                    </Link>
                  </li> */}
                  <li className='nav-item'>
                    <Link to='/Dashboard' className='nav-links'  onClick={closeMobileMenu}>
                      Dashboard
                    </Link>
                  </li>
                  <li className='nav-btn'>
                    {button ? (
                      <Link to='/auth' className='btn-link' >
                        <Button buttonStyle='btn--outline'>LOG IN</Button>
                      </Link> 
                    ):(
                      <Link to='/auth' className='btn-link'  onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline'
                        buttonSize='btn--mobile'>
                          SIGN UP
                        </Button>
                      </Link>
                    )}
                  </li>

                </ul>
            </div>
        </div>
   </IconContext.Provider>
    </>
  )
}

export default NavbarH