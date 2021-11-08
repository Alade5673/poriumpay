import React, { useEffect, useState } from "react";
import watermark from "../../assests/waterMark.svg"
import name from '../../assests/logoName.svg'
import hamburger from '../../assests/hamburger.svg'
import airtime from '../../assests/airtime.svg'
import data from '../../assests/data.svg'
import cable from '../../assests/cable.svg'
import electricity from '../../assests/electricity.svg'
import lock from '../../assests/lock.svg'
import next from '../../assests/next_icon.svg'
import history from '../../assests/history.svg'
import historyGray from '../../assests/history_gray.svg'
import Login from "../Authentication/Login";
import {useHistory} from "react-router-dom"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import '../Sidebar/Navbar.css'
import { IconContext } from 'react-icons';
import Navbar from "../Sidebar/Navbar";
import disableScroll from 'disable-scroll';

function Homepage() {

    disableScroll.on(); // prevent scrolling

    disableScroll.off();

    const history = useHistory();

    const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

 return (
    <div>
     <Navbar/>
    <div className="w-full h-screen flex justify-center md:justify-center lg:mt-32 mt-10 md:mt-32">
        <div className="flex bg-cardColor shadow-sm flex-col  h-full w-10/12  space-y-8">
           
            <div className="flex">
                    {/* airtime */}
                    <div className=" -ml-4 lg:ml-52 md:ml-4">
                        <button className="w-16 md:w-24 lg:w-24 bg-airtimeColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        onClick={() => history.push('/airtime')}>
                            <img alt="" src={airtime} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-2 md:ml-7 lg:ml-7 "> Airtime </p>
                    </div>

                    {/* data */}
                    <div className="ml-2 md:ml-20 lg:ml-20">
                        <button className="w-16 md:w-24 lg:w-24 bg-dataColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        onClick={() => history.push('/data')}>
                            <img alt="" src={data} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-4 md:ml-7 lg:ml-7 "> Data </p>
                    </div>

                    {/* cable */}
                    <div className="ml-2 md:ml-20 lg:ml-20">
                        <button className="w-16 md:w-24 lg:w-24 bg-cableColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        onClick={() => history.push('/cable')}>
                            <img alt="" src={cable} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-3 lg:ml-7 md:ml-4 "> Cable TV </p>
                    </div>

                    {/* electricity */}
                    <div className="ml-2 md:ml-20 lg:ml-20">
                        <button className="w-16 md:w-24 lg:w-24 bg-electricityColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        onClick={() => history.push('/electricity')}>
                            <img alt="" src={electricity} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-1 lg:ml-7 md:ml-4"> Electricity </p>
                    </div>
            </div>


            <div className="md:flex lg:flex -ml-8 lg:ml-96 md:ml-32">
                <img alt="" src={lock} className="md:w-8 lg:w-8 ml-36 md:ml-12 lg:ml-8"/>
                <p className="text-xs md:text-sm lg:text-sm font-normal mt-2 ml-16 md:ml-3 lg:ml-7 "> Securely Add Your Debit card details </p>
            </div>

            {/* button */}
                <button className="w-10/12 lg:w-5/12 bg-transparent border-2 font-light border-blue-900 md:text-sm text-xs text-black rounded-2xl h-16 md:h-12 lg:h-10 ml-6 lg:ml-80 md:ml-12" 
                onClick={() => history.push('/addcard')}>
                    Add card details
                </button>

                <div className="bg-brandBlue w-11/12 md:w-11/12 lg:w-7/12 ml-4 md:ml-6 lg:ml-52 rounded-t-xl h-8 flex ">
                    <img alt="" src={history} className="h-5 ml-72 mt-1"/>
                    <p className="text-sm font-light -ml-44 md:ml-0 lg:ml-7  mt-1 text-white"> History </p>
                </div>

                <div className="flex invisible md:visible lg:visible md:ml-10 lg:ml-60">
                    <p className="text-sm font-normal mt-1 text-gray-400"> Airtime </p>
                    <p className="text-sm font-normal ml-20  mt-1 text-gray-400"> Data </p>
                    <p className="text-sm font-normal ml-20  mt-1 text-gray-400"> Cable </p>
                    <p className="text-sm font-normal ml-20 mt-1 text-gray-400"> Electricity </p>
                    <p className="text-sm font-normal ml-20  mt-1 text-gray-400"> View all </p>
                </div>

                <div className="flex justify-center items-center flex-col ">
                    <img alt="" src={historyGray} className="h-10 -mt-8 md:mt-40 lg:mt-0"/>
                    <p className="visible md:invisible lg:invisible text-sm font-normal mt-1 text-gray-400"> No transaction yet </p>
                   <p className="text-sm font-normal  mt-4 text-black pt-8 md:pt-36 lg:pt-0"> Copyright PoriumPay 2021 </p>
                </div>
            
        </div>
      
    </div>
  </div>
  )
}

export default Homepage
