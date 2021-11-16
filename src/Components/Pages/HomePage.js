/** @format */

import React, { useEffect, useState } from "react"
import watermark from "../../assests/waterMark.svg"
import name from "../../assests/logoName.svg"
import hamburger from "../../assests/hamburger.svg"
import airtime from "../../assests/airtime.svg"
import data from "../../assests/data.svg"
import cable from "../../assests/cable.svg"
import electricity from "../../assests/electricity.svg"
import hist from "../../assests/history.svg"
import history from "../../assests/history.svg"
import lock from "../../assests/lock.svg"
import next from "../../assests/next_icon.svg"
import historyGray from "../../assests/history_gray.svg"
import Login from "../Authentication/Login"
import { useHistory } from "react-router-dom"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from "react-router-dom"
import { SidebarData } from "../Sidebar/SidebarData"
import "../Sidebar/Navbar.css"
import { IconContext } from "react-icons"
import Navbar from "../Sidebar/Navbar"
// import disableScroll from 'disable-scroll';
import "../../styles/tab.css"
import axios from "axios"
import AirtimeItem from "../Pages/AirtimeItem"
import CableItem from "./CableItem"
import moment from "moment"
// import "../../body.css"

function Homepage() {
	// disableScroll.on(); // prevent scrolling

	// disableScroll.off();

	const history = useHistory()

	const [sidebar, setSidebar] = useState(false)

	const showSidebar = () => setSidebar(!sidebar)

	const [toggleState, setToggleState] = useState(0)

	const [transactionHistory, setTransactionHistory] = useState([])

	const [message, setMessage] = useState()

	const transactionTypeMap = {
		1: "airtime",
		2: "data",
		3: "cable",
		4: "electricity",
	}

	useEffect(() => {
		handleTransactionHistory()
	}, [toggleState])

	useEffect(() => console.log(window.innerWidth), [window.innerWidth])

	useEffect(() => {}, [transactionHistory])

	const toggleTab = (index) => {
		setToggleState(index)
		// handleTransactionHistory();
	}

	const populateAll = () => {
		return transactionHistory.sort((a,b)=>new Date(b.createdAt)- new Date(a.createdAt)).map((item) => (
			<AirtimeItem transactionHistory={item} message={message} />
		))
	}

	const populateCable = () => {
		return transactionHistory.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).map((item) => (
			<CableItem transactionHistory={item} message={message} />
		))
	}

	console.log(message)

	const handleTransactionHistory = (e) => {
		// e.preventDefault();

		const headers = {
			Authorization: `Bearer ${localStorage.getItem("authToken")}`,
		}

		axios
			.get("https://api.poriumpay.com/api/v1/get-transaction", { headers })
			.then((res) => {
				setMessage(res.data.message)
				if (toggleState) {
					let transactionType = transactionTypeMap[toggleState]

					setTransactionHistory(
						res.data.data.filter(
							(item) => item.transaction_type === transactionType
						)
					)
				} else {
					setTransactionHistory(res.data.data)
				}

				//    const biller_type = res.data.data[0].biller
				// console.log(res.data.data[0].biller)

				//   setLoading(false);
				//   toast.success(res.data.message, { autoClose: 3000 });
				//   console.log(res.data.data.biller);
			})
	}

	return (
		<div>
			<Navbar />
			<div className="w-full  flex justify-center  items-center">
				<div className="flex bg-cardColor shadow-sm pt-32 flex-col w-10/12 md:w-10/12 lg:w-7/12 justify-center items-center  space-y-8">
					<div className="flex space-x-8 lg:space-x-20">
						{/* airtime */}
						<div className="">
							<button
								className="w-16 md:w-24 lg:w-24 bg-airtimeColor flex items-center justify-center md:text-sm text-xs text-white rounded-2xl h-12 "
								onClick={() => history.push("/airtime")}
							>
								<img alt="" src={airtime} className="w-6 " />
							</button>
							<p className="text-sm font-light mt-3 ml-2 md:ml-7 lg:ml-7 ">
								{" "}
								Airtime{" "}
							</p>
						</div>

						{/* data */}
						<div className="">
							<button
								className="w-16 md:w-24 lg:w-24 bg-dataColor flex items-center justify-center md:text-sm text-xs text-white rounded-2xl h-12 "
								onClick={() => history.push("/data")}
							>
								<img alt="" src={data} className="w-6" />
							</button>
							<p className="text-sm font-light mt-3 ml-4 md:ml-7 lg:ml-7 ">
								{" "}
								Data{" "}
							</p>
						</div>

						{/* cable */}
						<div className="">
							<button
								className="w-16 md:w-24 lg:w-24 bg-cableColor flex items-center justify-center md:text-sm text-xs text-white rounded-2xl h-12 "
								onClick={() => history.push("/cable")}
							>
								<img alt="" src={cable} className="w-6" />
							</button>
							<p className="text-sm font-light mt-3 ml-3 lg:ml-7 md:ml-4 ">
								{" "}
								Cable TV{" "}
							</p>
						</div>

						{/* electricity */}
						<div className="">
							<button
								className="w-16 md:w-24 lg:w-24 bg-electricityColor flex items-center justify-center md:text-sm text-xs text-white rounded-2xl h-12 "
								onClick={() => history.push("/electricity")}
							>
								<img alt="" src={electricity} className="w-6" />
							</button>
							<p className="text-sm font-light mt-3 ml-1 lg:ml-7 md:ml-4">
								{" "}
								Electricity{" "}
							</p>
						</div>
					</div>

					<div className="flex-col items-center flex pt-12">
						<img alt="" src={lock} className="md:w-8 lg:w-8 " />
						<p className=" text-xs md:text-sm lg:text-sm font-normal mt-2  ">
							{" "}
							Securely Add Your Debit card details{" "}
						</p>
					</div>

					{/* button */}
					{/* <button className="w-10/12 lg:w-5/12 bg-transparent border-2 font-light border-blue-900 md:text-sm text-xs text-black rounded-2xl h-16 md:h-12 lg:h-10 ml-8 lg:ml-80 md:ml-12" >
                    Add card details
                </button> */}

					<div className="bg-brandBlue w-11/12 md:w-11/12 lg:w-7/12 justify-center space-x-2 rounded-t-xl h-8 flex ">
						<img alt="" src={hist} className="h-5 mt-1" />
						<p className="text-sm font-light  mt-1 text-white"> History </p>
					</div>

					<div className="container ">
						<div className=" hidden md:flex lg:flex">
							<button
								className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
								onClick={() => toggleTab(1)}
							>
								Airtime
							</button>
							<button
								className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
								onClick={() => toggleTab(2)}
							>
								Data
							</button>
							<button
								className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
								onClick={() => toggleTab(3)}
							>
								Cable
							</button>
							<button
								className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
								onClick={() => toggleTab(4)}
							>
								Electricity
							</button>
							<button
								className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
								onClick={() => toggleTab(0)}
							>
								View All
							</button>
						</div>

						<div className="content-tabs">
							<div
								className={
									toggleState === 1 ? "content  active-content" : "content"
								}
							>
								<p>{populateAll()}</p>
							</div>

							<div
								className={
									toggleState === 2 ? "content  active-content" : "content"
								}
							>
								<p>{populateAll()}</p>
							</div>

							<div
								className={
									toggleState === 3 ? "content  active-content" : "content"
								}
							>
								<p>{populateCable}</p>
							</div>

							<div
								className={
									toggleState === 4 ? "content  active-content" : "content"
								}
							>
								<p>{populateAll}</p>
							</div>

							<div
								className={
									toggleState === 0 ? "content  active-content" : "content"
								}
							>
								<p>{populateAll()}</p>
							</div>
						</div>
					</div>

					<div className="flex items-center flex-col ">
						{/* <img alt="" src={historyGray} className="h-10 -mt-8 md:mt-40 lg:mt-0"/>
                    <p className="visible md:invisible lg:invisible text-sm font-normal mt-1 text-gray-400"> No transaction yet </p> */}
						<p className="text-sm font-normal  mt-20 text-black ">
							{" "}
							Copyright PoriumPay 2021{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Homepage
