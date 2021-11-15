/** @format */

import React, { useState, useEffect } from "react"
import up from "../assests/up-arrow.png"
import down from "../assests/arrow-down.png"

const CustomSelect = ({ options, onChange, value }) => {
	const [open, setOpen] = useState(false)
	const [selected, setSelected] = useState({
		img: null,
		name: "select",
		biller: null,
	})

	const _handleSelect = ({ img, name, biller, biller_name, amount }) => {
		setSelected({ img, name, biller: biller_name })
		setOpen(false)
		if (typeof onChange === "function") {
			onChange({ target: { value: biller_name || name, biller, amount } })
		}
	}

	useEffect(() => {
		setSelected({ img: null, name: value || "select", biller: null })
	}, [value])
	return (
		<div>
			<div
				onClick={() => setOpen(!open)}
				className={`w-full flex items-center justify-between p-2 pr-4 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
			>
				<div className="flex items-center space-x-4">
					{selected?.img && <img alt="" src={selected?.img} className="w-4" />}
					<p>{selected?.biller || selected.name}</p>
				</div>
				<img src={open ? up : down} alt="" className="w-4" />
			</div>
			{open && (
				<div
					onMouseLeave={() => setOpen(false)}
					className="pl-2 py-4 pr-4 absolute bg-white ml-3 lg:w-1/3 w-8/12 shadow-sm max-h-52 overflow-y-auto"
				>
					{options?.map((value, index) => (
						<div
							key={index}
							className="flex items-center space-x-4 pb-2 mb-2 border-b border-gray-100"
							onClick={() => _handleSelect({ ...value })}
						>
							{value?.img && <img alt="" src={value?.img} className="w-4" />}
							<p>{value?.biller_name || value.name}</p>
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default CustomSelect
