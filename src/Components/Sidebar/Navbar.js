/** @format */

import React, { useState } from "react"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { SidebarData } from "./SidebarData"
import "./Navbar.css"
import { IconContext } from "react-icons"
import watermark from "../../assests/waterMark.svg"
import name from "../../assests/logoName.svg"
import phone from "../../assests/phone.svg"

function Navbar() {
	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)

	const full_name = localStorage.getItem("full_name")

	return (
		<div className="w-full flex justify-center">
			<IconContext.Provider value={{ color: "#143784" }}>
				<div className="flex justify-center w-full items-center">
					<div className="flex bg-menuColor h-20 justify-between lg:w-7/12 w-full items-center px-4">
						<div className="flex items-center">
							<Link to="#" className="">
								<FaIcons.FaBars onClick={showSidebar} className="w-10 h-10" />
							</Link>
							<p className="hidden md:block lg:block w-28 pl-3">{full_name}</p>
						</div>
						<div className="flex items-baseline justify-center">
            <a href="https://www.poriumpay.com">
							<img alt="" src={watermark} className=" w-12" />
							<img alt="" src={name} className="w-8" />
            </a>
						</div>
						<div className="">
							<a href="https://www.poriumpay.com/contact-us/">
								<img
									alt=""
									src={phone}
									className="block md:hidden lg:hidden h-4"
								/>
							</a>
							<a href="https://www.poriumpay.com/contact-us/">
								<p className=" hidden md:block lg:block text-lg font-light ">
									Contact Us
								</p>
							</a>
						</div>
					</div>
				</div>

				<nav className={sidebar ? "nav-menu active z-50" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bars">
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
							)
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</div>
	)
}

export default Navbar
