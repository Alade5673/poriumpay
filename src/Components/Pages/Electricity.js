/** @format */

import React from "react"
import Navbar from "../Sidebar/Navbar"
import arrow from "../../assests/back_arrow.svg"
import electricity_icon from "../../assests/electricity_icon.svg"
import forward_arrow from "../../assests/forward_arrow.svg"
import phed from "../../assests/phed.png"
import aedc from "../../assests/aedc.png"
import ikedc from "../../assests/ikedc.png"
import ekedc from "../../assests/ekedc.png"
import CustomSelect from "../select"
import FlutterWave from "../flutterwave"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { bills } from "../../bills"

function Electricity() {
	toast.configure()

	const [meter, setMeter] = React.useState("")
	const [meterType, setMeterType] = React.useState("")
	const [flutter, setFlutter] = React.useState(false)

	const full_name = localStorage.getItem("full_name")
	const email = localStorage.getItem("email")

	const [meterData, setMeterData] = React.useState({
		amount: "",
		meter_number: "",
	})

	const handleMeter = (e) => {
		e.preventDefault()

		const newData = { ...meterData }
		newData[e.target.id] = e.target.value
		setMeterData(newData)
	}

	const handleChange = (event) => {
		setMeter(event.target.value)
	}

	const handleMeterType = (event) => {
		setMeterType(event.target.value)
	}

	const handleSubmit = () => {
		localStorage.setItem("transaction_amount", meterData.amount)
		const transactionDetails = {
			transaction_type: "electricity",
			biller: meter,
			amount: meterData.amount,
			customer: meterData.meter_number,
			description: `power top up for meter ${meterData.meter_number}`,
		}
		localStorage.setItem(
			"transaction_details",
			JSON.stringify(transactionDetails)
		)
		setFlutter(true)
	}

	const meterPackage = [
		{
			name: "Prepaid",
		},
		{
			name: "Post Paid",
		},
	]

	const prevent = (e) => {
		e.preventDefault()
	}

	const _handleEnable = () => {
		if (
			meter !== "" &&
			meterData.amount !== "" &&
			meterData.meter_number !== "" &&
			meterType !== ""
		) {
			return true
		}
		return false
	}
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
					<img alt="" src={electricity_icon} className="h-6 ml-10" />
					<p className="text-bodyText font-normal ml-3 text-l">Electricity</p>
				</div>
			</div>

			<div className="w-11/12 md:w-8/12 lg:w-5/12 ml-3 md:ml-28 lg:ml-96 mt-8">
				<form onSubmit={prevent}>
					<div className="mr-8 ml-8">
						<label htmlFor="password" className="text-sm font-normal mb-4">
							Select a meter Company
						</label>
						<CustomSelect
							options={bills.filter(
								(value) =>
									value.label_name.includes("Meter Number") &&
									value.country.includes("NG")
							)}
							onChange={handleChange}
						/>
					</div>

					<div className="mr-8 ml-8">
						<label htmlFor="password" className="text-sm font-normal mb-4">
							Meter Type
						</label>
						<CustomSelect options={meterPackage} onChange={handleMeterType} />
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="password" className="text-sm font-normal mb-4">
							Enter amount
						</label>
						<input
							type="number"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="amount"
							placeholder="Type in amount"
							required
							onChange={(e) => handleMeter(e)}
							value={meterData.amount}
						/>
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="password" className="text-sm font-normal mb-4">
							Enter meter number
						</label>
						<input
							type="number"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="meter_number"
							placeholder="Enter meter number"
							required
							onChange={(e) => handleMeter(e)}
							value={meterData.meter_number}
						/>
					</div>

					<FlutterWave handleSubmit={handleSubmit} enabled={_handleEnable()} />
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

export default Electricity
