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
	const [amount, setAmount] = useState(0)

	const [flutter, setFlutter] = React.useState(false)

	const [cableData, setCableData] = React.useState({
		decoder_number: "",
	})

	const handleCable = (e) => {
		e.preventDefault()

		const newData = { ...cableData }
		newData[e.target.id] = e.target.value
		setCableData(newData)
	}

	const handleChange = (event) => {
		setCableTv(event.target.value)
		setBillingList(
			bills.filter(
				(value) =>
					value.country.includes("NG") &&
					value.label_name.includes("SmartCard Number") &&
					value.name.toLowerCase().includes(event.target.value.toLowerCase())
			)
		)
		setBiller("")
	}

	const _handleBillerChange = (e) => {
		setBiller(e.target.value)
		setAmount(e.target.amount || 14500)
	}

	const handleSubmit = () => {
		localStorage.setItem("transaction_amount", amount)
		const transactionDetails = {
			transaction_type: "cable_tv",
			biller,
			amount: amount,
			customer: cableData.decoder_number,
			description: `recharged ${cableTv} on ${cableData.decoder_number}`,
		}
		localStorage.setItem(
			"transaction_details",
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

	const prevent = (e) => {
		e.preventDefault()
	}

	const _handleEnable = () => {
		if (cableTv !== "" && biller !== "" && cableData.decoder_number !== "") {
			return true
		}
		return false
	}
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
				<form onSubmit={prevent}>
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
							onChange={_handleBillerChange}
							value={biller}
						/>
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Enter amount
						</label>
						<input
							type="text"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="amount"
							readOnly
							placeholder="Type in amount"
							// required
							// onChange={(e) => handleCable(e)}
							value={amount}
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

					<FlutterWave
						handleSubmit={handleSubmit}
						buttonName="Continue"
						enabled={_handleEnable()}
					/>
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
