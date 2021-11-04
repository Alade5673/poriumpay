/** @format */

import React from "react"
import forward_arrow from "../assests/forward_arrow.svg"
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3"
import axios from "axios"

const FlutterWave = ({ handleSubmit, buttonName }) => {
	const [confirm, setConfirm] = React.useState(false)
	const full_name = localStorage.getItem("full_name")
	const email = localStorage.getItem("user_email")

	const test_key = {
		public: "FLWPUBK-9d7443ebae91f01d676eda8a8edcf424-X",
		secret: "FLWSECK-0b4ef8f2725261fa6903724a4a79c8bc-X",
	}
	const config = {
		public_key: test_key.public,
		tx_ref: Date.now(),
		amount: localStorage.getItem("transaction_amount"),
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
	console.log(email)

	const _handleSubmit = () => {
		handleSubmit()
		setConfirm(true)
	}

	const fwConfig = {
		...config,
		text: "Pay with Flutterwave!",
		callback: async (response) => {
			setConfirm(false)
			console.log(response)
			await axios.post(
				"http://137.184.202.230/api/v1/pay-bills",
				JSON.parse(localStorage.getItem("transactionDetails"))
			)
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
				<FlutterWaveButton {...fwConfig} />
			) : (
				<button
					className="bg-brandBlue text-white w-60 h-12 pl-16 active:bg-emerald-600 flex items-center font-light text-lg px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
					type="button"
					onClick={_handleSubmit}
				>
					{buttonName || "Continue"}
					<img alt="" src={forward_arrow} className="h-4 w-4 mt-1 ml-8" />
				</button>
			)}
		</div>
	)
}

export default FlutterWave
