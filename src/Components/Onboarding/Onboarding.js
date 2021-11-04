import React from 'react'
import watermark from "../../assests/waterMark.svg"
import name from '../../assests/logoName.svg'
import {useHistory} from "react-router-dom"

function Onboarding() {

    const history = useHistory();

    return (
        <div className="w-full h-screen flex justify-center items-center">
        <div className="flex bg-cardColor shadow-sm flex-col justify-center h-full w-10/12 items-center  space-y-8">
            <div className="flex justify-center items-baseline">
                <img alt="" src={watermark} />
                <img alt="" src={name} className="w-28"/>
            </div>
            <p className="text-bodyText font-normal">Its great to have you here</p>
            <p className="w-9/12 text-xs text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra lectus lorem in. Cursus nisl commodo, vitae pellentesque. Dictum sed ut faucibus ultrices. Orci et in tincidunt vel laoreet commodo.</p>
            <button className="w-36 bg-brandBlue md:text-sm text-xs text-white rounded-full h-8" 
            onClick={() => history.push('/welcome')}>
            Go to homepage
            </button>
        </div>
        </div>
    )
}

export default Onboarding
