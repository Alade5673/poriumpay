/** @format */

import { metaProperty } from "@babel/types"
import React from "react"
import dstvLogo from "../../assests/dstv.png"
import gotvLogo from "../../assests/gotv.png"
import startimesLogo from "../../assests/starttimes.png"
import "../..//styles/tab.css"
import moment from "moment"

const logoMap = {
	DSTV: dstvLogo,
	GOTV: gotvLogo,
	STARTIMES: startimesLogo,
}

export default function CableItem({
	transactionHistory,
	message,
	isElectricity,
}) {
	return (
		<div className="flex items-center justify-between lg:text-sm text-xs mb-4">
			{!isElectricity && (
				<div className="logo">
					<img src={logoMap[transactionHistory.meta.network]} alt="" />
				</div>
			)}
			<div className="amount">{"#" + transactionHistory.amount}</div>
			<div className="description w-1/3">{transactionHistory.description}</div>
			<div className="created lg:block hidden">
				{moment(transactionHistory.createdAt).format("DD-MM-YY hh:mm")}
			</div>
			<div className="button rounded-2xl bg-green-600 w-16 h-6">
				<button className="text-white pl-2">{message}</button>
			</div>
		</div>
	)
}
