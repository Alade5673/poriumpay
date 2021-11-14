import { metaProperty } from '@babel/types'
import React from 'react'
import dstvLogo from '../../assests/dstv.png'
import gotvLogo from '../../assests/gotv.png'
import startimesLogo from '../../assests/starttimes.png'
import "../..//styles/tab.css";

const logoMap = {
    DSTV: dstvLogo,
    GOTV: gotvLogo,
    STARTIMES: startimesLogo,
}

export default function CableItem({transactionHistory, message}) {
    return (
        <div className="transactionContainer">
            <div className="logo">
                <img src={logoMap[transactionHistory.meta.network]}/>
            </div>
            <div className="amount">
                {'#'+transactionHistory.amount}
            </div>
            <div className="description">
                {transactionHistory.description}
            </div>
            <div className="created">
                {transactionHistory.createdAt}
            </div>
            <div className="button rounded-2xl bg-green-600 w-16 h-6">
                <button className="text-white pl-2">{message}</button>
            </div>
            
        </div>
    )
}
