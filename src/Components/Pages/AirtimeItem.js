/** @format */

import { metaProperty } from "@babel/types"
import React from "react"
import mtnLogo from "../../assests/mtn.png"
import airtelLogo from "../../assests/airtel.png"
import gloLogo from "../../assests/glo.png"
import etisalatLogo from "../../assests/etisalat.png"
import successs from "../../assests/success_arrow.png"
import failed from "../../assests/failed_arrow.png"
import "../..//styles/tab.css"
import moment from "moment"

const logoMap = {
	MTN: mtnLogo,
	GLO: gloLogo,
	AIRTEL: airtelLogo,
	ETISALAT: etisalatLogo,
}

export default function AirtimeItem({ transactionHistory, message }) {
	console.log(transactionHistory)

	return (
		<div className="flex items-center justify-between lg:text-sm text-xs mb-4">
			<div className="logo">
				<img
					src={
						logoMap[transactionHistory?.meta?.network] ||
						logoMap[transactionHistory?.meta?.network?.split(" ")[0]]
					}
					alt=""
					className="w-8"
				/>
			</div>
			<div className="amount">{"N" + transactionHistory.amount}</div>
			<div className="description w-1/3">{transactionHistory.description}</div>
			<div className="created lg:block hidden">
				{moment(transactionHistory.createdAt).format("DD-MM-YY hh:mm")}
			</div>
			<div className="button rounded-2xl bg-green-600 w-16 h-6">
				<button className="text-white text-center w-full pt-1">
					{message}
				</button>
			</div>
			{/* <div>
                if ({message} === success) {
                    <div className="success">
                        <img src={successs}/>
                    </div>
                } else {
                    <div className="failed">
                        <img src={failed}/>
                    </div>
                }
            </div> */}
		</div>
	)
}
