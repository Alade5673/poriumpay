/** @format */

import React, { useState } from "react"
import Navbar from "../Sidebar/Navbar"
import arrow from "../../assests/back_arrow.svg"
import cable_icon from "../../assests/cable_icon.svg"
import forward_arrow from "../../assests/forward_arrow.svg"
import dstv from "../../assests/dstv.png"
import gotv from "../../assests/gotv.png"
import startimes from "../../assests/starttimes.png"
import CustomSelect from "../select"
import FlutterWave from "../flutterwave"
import { bills } from "../../bills"

function Cable() {
	const [cableTv, setCableTv] = React.useState("")
	const [biller, setBiller] = React.useState("")
	const [billingList, setBillingList] = React.useState(null)

	const [flutter, setFlutter] = React.useState(false)

	const [cableData, setCableData] = React.useState({
		amount: "",
		decoder_number: "",
	})

	const handleCable = (e) => {
		e.preventDefault()

		const newData = { ...cableData }
		newData[e.target.id] = e.target.value
		setCableData(newData)

		console.log(newData)
	}

	const handleChange = (event) => {
		setCableTv(event.target.value)
		setBillingList(
			event.target.value.includes("DSTV")
				? [{ biller_name: "DSTV Premium" }]
				: bills.filter(
						(value) =>
							value.country.includes("NG") &&
							value.label_name.includes("SmartCard Number") &&
							value.name
								.toLowerCase()
								.includes(event.target.value.toLowerCase())
				  )
		)
		setBiller("")
	}

	const handleSubmit = () => {
		console.log(cableTv)
		console.log(cableData)
		console.log(cableData.amount)
		console.log(cableData.decoder_number)

		localStorage.setItem("transaction_amount", cableData.amount)
		const transactionDetails = {
			transaction_type: "cable_tv",
			biller,
			amount: cableData.amount,
			customer: cableData.decoder_number,
			description: `recharged ${cableTv} on ${cableData.decoder_number}`,
		}
		localStorage.setItem(
			"transctiondetails",
			JSON.stringify(transactionDetails)
		)
		setFlutter(true)
	}

	const cable = [
		{
			img: dstv,
			name: "DSTV",
		},
		{
			img: gotv,
			name: "GoTv",
		},
		{
			img: startimes,
			name: "StarTimes",
		},
	]

	return (
		<div>
			<Navbar />

			<div className="flex ml-8 md:ml-40 lg:ml-40 mt-8">
				<div className="flex ml-0 md:ml-20 lg:ml-96">
					<img alt="" src={cable_icon} className="h-6 ml-10" />
					<p className="text-bodyText font-normal ml-3 text-l">Cable TV</p>
				</div>
			</div>

			<div className="w-11/12 md:w-8/12 lg:w-5/12 ml-3 md:ml-28 lg:ml-96 mt-8">
				<form>
				<div className="mr-8 ml-8">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Select a TV Company
						</label>
						<CustomSelect options={cable} onChange={handleChange} />
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Select a Package
						</label>
						<CustomSelect
							options={billingList}
							onChange={(e) => setBiller(e.target.value)}
							value={biller}
						/>
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Enter amount
						</label>
						<input
							type="number"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="amount"
							placeholder="Type in amount"
							required
							onChange={(e) => handleCable(e)}
							value={cableData.amount}
						/>
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Decoder number
						</label>
						<input
							type="number"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="decoder_number"
							placeholder="Enter decoder number"
							required
							onChange={(e) => handleCable(e)}
							value={cableData.decoder_number}
						/>
					</div>

					<FlutterWave handleSubmit={handleSubmit} buttonName="Continue" />
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

export default Cable
