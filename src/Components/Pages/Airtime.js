/** @format */

import React from "react"
import Navbar from "../Sidebar/Navbar"
import arrow from "../../assests/back_arrow.svg"
import airtime_icon from "../../assests/airtime_icon.svg"
import forward_arrow from "../../assests/forward_arrow.svg"
import historyGray from "../../assests/history_gray.svg"
import mtn from "../../assests/mtn.png"
import glo from "../../assests/glo.png"
import airtel from "../../assests/airtel.png"
import etisalat from "../../assests/etisalat.png"
import CustomSelect from "../select"
import FlutterWave from "../flutterwave"
import bills from "../../bills"

function Airtime() {
	const [network, setNetwork] = React.useState("")

	const [flutter, setFlutter] = React.useState(false)

	const [airtimeData, setAirtimeData] = React.useState({
		receiver_number: "",
		amount: "",
	})

	const handleAirtime = (e) => {
		e.preventDefault()

		const newData = { ...airtimeData }
		newData[e.target.id] = e.target.value
		setAirtimeData(newData)
	}

	const handleChange = (event) => {
		setNetwork(event.target.value)
		console.log(event.target.biller)
	}

	const handleSubmit = () => {
		localStorage.setItem("transaction_amount", airtimeData.amount)
		const customer = `+234${Number(airtimeData.receiver_number)}`
		const transactionDetails = {
			transaction_type: "airtime",
			biller: "AIRTIME",
			amount: airtimeData.amount,
			customer,
			description: `airtime purchase for ${customer}`,
		}
		localStorage.setItem(
			"transctiondetails",
			JSON.stringify(transactionDetails)
		)
		setFlutter(true)

		// console.log(network)
	}

	const airtime = [
		{
			img: mtn,
			name: "MTN Airtime VTU",
			biller: "AIRTIME",
		},
		{
			img: glo,
			name: "GLO Airtime VTU",
			biller: "AIRTIME",
		},
		{
			img: airtel,
			name: "Airtel Airtime VTU",
			biller: "AIRTIME",
		},
		{
			img: etisalat,
			name: "Etisalat Airtime VTUel",
			biller: "AIRTIME",
		},
	]

	return (
		<div>
			<Navbar />
			<div className="flex ml-8 md:ml-40 lg:ml-40 mt-8">
				<img
					alt=""
					src={arrow}
					className="invisible md:invisible lg:invisible"
				/>
				<div className="flex ml-5 md:ml-20 lg:ml-96">
					<img alt="" src={airtime_icon} className="h-6 ml-10" />
					<p className="text-bodyText font-normal ml-3 text-l">Buy airtime</p>
				</div>
			</div>

			<div className="relative w-11/12 md:w-8/12 lg:w-5/12 my-6 mx-auto max-w-3xl">
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="mr-8 ml-8">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Select Network
						</label>
						<CustomSelect options={airtime} onChange={handleChange} />
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Enter Receivers Number
						</label>
						<input
							type="phone"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="receiver_number"
							placeholder="Type in receivers number"
							required
							onChange={(e) => handleAirtime(e)}
							value={airtimeData.receiver_number}
						/>
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Enter Amount
						</label>
						<input
							type="number"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="amount"
							placeholder="Type in amount"
							required
							onChange={(e) => handleAirtime(e)}
							value={airtimeData.amount}
						/>
					</div>

					{/* button */}
					<FlutterWave handleSubmit={handleSubmit} buttonName="Send Airtime" />
				</form>
			</div>

			<div className="flex justify-center items-center flex-col pb-10 pt-20">
				<p className="text-sm font-normal  mt-4 text-black">
					{" "}
					Copyright PoriumPay 2021{" "}
				</p>
			</div>
		</div>
	)
}

export default Airtime
