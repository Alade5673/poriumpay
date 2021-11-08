/** @format */

import React from "react"
import Navbar from "../Sidebar/Navbar"
import arrow from "../../assests/back_arrow.svg"
import data_icon from "../../assests/data_icon.svg"
import forward_arrow from "../../assests/forward_arrow.svg"
import mtn from "../../assests/mtn.png"
import glo from "../../assests/glo.png"
import airtel from "../../assests/airtel.png"
import etisalat from "../../assests/etisalat.png"
import CustomSelect from "../select"
import FlutterWave from "../flutterwave"
import { bills } from "../../bills"

function Data() {
	const [network, setNetwork] = React.useState("")
	const [bundleData, setBundleData] = React.useState("")
	const [bundles, setBundles] = React.useState(null)

	const [flutter, setFlutter] = React.useState(false)

	const handleNetwork = (event) => {
		setNetwork(event.target.value)
		const bill_list = bills.filter((value) =>
			value.name.includes(event.target.value)
		)
		setBundles(bill_list)
		setBundleData("")
	}

	const handleBundle = (event) => {
		setBundleData(event.target.value)
	}

	const [dataData, setDataData] = React.useState({
		receiver_number: "",
	})

	const handleData = (e) => {
		e.preventDefault()

		const newData = { ...dataData }
		newData[e.target.id] = e.target.value
		setDataData(newData)

		console.log(newData)
	}

	const handleSubmit = () => {
		console.log(network)
		console.log(bundleData)
		console.log(dataData.receiver_number)

		const transactionDetails = {
			transaction_type: "data",
			biller: bundleData,
			amount: 0,
			customer: dataData.receiver_number,
			description: `${network} data bundle  on ${dataData.receiver_number}`,
		}
		localStorage.setItem(
			"transctiondetails",
			JSON.stringify(transactionDetails)
		);
		localStorage.setItem("phoneNumber", dataData.receiver_number)
		setFlutter(true)
	}

	const networkSelect = [
		{
			img: mtn,
			name: "MTN",
		},
		{
			img: glo,
			name: "GLO",
		},
		{
			img: airtel,
			name: "AIRTEL",
		},
		{
			img: etisalat,
			name: "ETISALAT",
		},
	]

	return (
		<div>
			<Navbar />
			<div className="flex ml-8 md:ml-40 lg:ml-40 mt-8">
				<div className="flex ml-5 md:ml-20 lg:ml-96">
					<img alt="" src={data_icon} className="h-6 ml-10" />
					<p className="text-bodyText font-normal ml-3 text-l">Buy Data</p>
				</div>
			</div>

			<div className="w-11/12 md:w-8/12 lg:w-5/12 ml-3 md:ml-12 lg:ml-96 mt-8">
				<form>
					<div className="mr-8 ml-8">
							<label htmlFor="text" className="text-sm font-normal mb-4">
								Select Network
							</label>
							<CustomSelect options={networkSelect} onChange={handleNetwork} />
					</div>

					<div className="mr-8 ml-8">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Select Data Bundles
						</label>
						<CustomSelect
							options={bundles}
							value={bundleData}
							onChange={handleBundle}
						/>
					</div>

					<div className="ml-8 mr-8 mt-4">
						<label htmlFor="text" className="text-sm font-normal mb-4">
							Enter receivers number
						</label>
						<input
							type="number"
							className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
							id="receiver_number"
							placeholder="Type in receivers number"
							required
							onChange={(e) => handleData(e)}
							value={dataData.receiver_number}
						/>
					</div>

					<FlutterWave handleSubmit={handleSubmit} buttonName="Send Data" />
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

export default Data
