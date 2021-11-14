import { metaProperty } from '@babel/types'
import React from 'react'
import mtnLogo from '../../assests/mtn.png'
import airtelLogo from '../../assests/airtel.png'
import gloLogo from '../../assests/glo.png'
import etisalatLogo from '../../assests/etisalat.png'
import successs from '../../assests/success_arrow.png'
import failed from '../../assests/failed_arrow.png'
import "../..//styles/tab.css";

const logoMap = {
    MTN: mtnLogo,
    GLO: gloLogo,
    AIRTEL: airtelLogo,
    ETISALAT: etisalatLogo
}

export default function AirtimeItem({transactionHistory, message}) {

    // console.console.log(message);

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
