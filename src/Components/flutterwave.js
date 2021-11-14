/** @format */

import React from "react"
import forward_arrow from "../assests/forward_arrow.svg"
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3"
import axios from "axios"

const FlutterWave = ({ handleSubmit, buttonName, enabled }) => {
	const [confirm, setConfirm] = React.useState(false)
	const full_name = localStorage.getItem("full_name")
	const email = localStorage.getItem("user_email")

	const live_key = {
		public: "FLWPUBK-9d7443ebae91f01d676eda8a8edcf424-X",
	}

	const test_key = {
		public: "FLWPUBK_TEST-fd10e76ce98e0f66db8969a0aee569ec-X",
	}
	const config = {
		public_key: live_key.public,
		tx_ref: Date.now(),
		amount: localStorage.getItem("transaction_amount"),
		phonenumber: localStorage.getItem("phoneNumber"),
		currency: "NGN",
		payment_options: "card,mobilemoney,ussd",
		customer: {
			email: email,
			name: full_name,
		},
		customizations: {
			title: "Bill Payment",
			description: "Bill Payment",
		},
	}

	const _handleSubmit = () => {
		handleSubmit()
		setConfirm(true)
	}

	const fwConfig = {
		...config,
		text: "Pay Now!",
		callback: async (response) => {
			const headers = {
				'Authorization': `Bearer ${localStorage.getItem("authToken")}`,
			}
			setConfirm(false)
			console.log(response)
			const request = await axios({method:"POST",
				url:"https://api.poriumpay.com/api/v1/pay-bills",
				data:JSON.parse(localStorage.getItem("transaction_details")),
				headers,
			})
			console.log(request)
			closePaymentModal() // this will close the modal programmatically
		},
		onClose: () => {
			closePaymentModal()
			setConfirm(false)
		},
	}
	return (
		<div className="flex justify-center items-center mt-6">
			{confirm ? (
				<FlutterWaveButton
					{...fwConfig}
					className="bg-brandBlue text-white w-44 md:w-60 lg:w-56 h-12 pl-16 text-xs md:text-sm lg:text-lg active:bg-emerald-600 flex items-center font-light px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
				/>
			) : (
				<button
					className="bg-brandBlue text-white w-60 h-12 pl-16 active:bg-emerald-600 flex items-center font-light text-lg px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
					type="button"
					onClick={_handleSubmit}
					disabled={!enabled}
				>
					{buttonName || "Continue"}
					<img alt="" src={forward_arrow} className="h-4 w-4 mt-1 ml-8" />
				</button>
			)}
		</div>
	)
}

export default FlutterWave
