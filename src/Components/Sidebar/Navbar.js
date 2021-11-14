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
    <div>
      <IconContext.Provider value={{ color: '#143784' } } className="flex ">
          <div className="flex ml-8 md:ml-16 lg:ml-28 ">
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <p className="invisible md:invisible lg:visible w-28 pl-3">{full_name}</p>
            </div>

            <div className="flex bg-menuColor h-20 pl-8 sm:pl-0 -md:pl-10 lg:pl-8">
                    <div className="flex justify-center items-baseline place-self-center ml-4 lg:ml-80 md:ml-20">
                        <img alt="" src={watermark} className=" w-8 md:w-12 lg:w-12 "/>
                        <img alt="" src={name} className="h-4 w-8 md:w-12 lg:w-12"/>
                    </div>
                    <a href="https://www.poriumpay.com/contact-us/">
                      <img alt="" src={phone} className="visible md:invisible lg:invisible h-4 mt-8  ml-20 md:ml-0 lg:ml-0"/>
                    </a>
                    <a href="https://www.poriumpay.com/contact-us/">
                      <p className=" invisible md:visible lg:visible text-lg font-light mt-8 ml-10 lg:ml-60 md:ml-28 pr-0 md:pr-6 lg:pr-7">Contact Us</p>
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