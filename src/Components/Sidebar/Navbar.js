import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import watermark from "../../assests/waterMark.svg"
import name from '../../assests/logoName.svg'
import phone from '../../assests/phone.svg'

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const full_name = localStorage.getItem("full_name");

  return (
    <div className="w-full">
      <IconContext.Provider value={{ color: '#143784' } }>
          <div className="flex ml-0 md:ml-16 lg:ml-48 ">
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} className="z-10"/>
                </Link>
                <p className="invisible md:invisible lg:visible w-28 pl-3">{full_name}</p>
            </div>

            <div className="flex bg-menuColor h-20 ml-6 -md:pl-10 lg:pl-8">
                    <div className="flex  items-baseline mt-3 md:mt-0 lg:md-0 ml-40 lg:ml-80 md:ml-20 lg:mt-4">
                        <img alt="" src={watermark} className=" h-12 md:h-0 lg:h-16 w-16 md:w-12 lg:w-12 "/>
                        <img alt="" src={name} className="h-4 w-8 md:w-12 lg:w-12"/>
                    </div>
                    <a href="https://www.poriumpay.com/contact-us/">
                      <img alt="" src={phone} className="visible md:invisible lg:invisible h-4 mt-8  ml-32 md:ml-0 lg:ml-0"/>
                    </a>
                    <a href="https://www.poriumpay.com/contact-us/">
                      <p className=" invisible md:visible lg:visible text-lg font-light mt-8 ml-10 lg:ml-60 md:ml-28 pr-0 md:pr-6 lg:pr-16">Contact Us</p>
                    </a>
            </div>
          </div>
        


        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}

export default Navbar;