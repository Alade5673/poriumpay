import React from 'react'
import Navbar from '../Sidebar/Navbar'
import arrow from '../../assests/back_arrow.svg'
import success_icon from '../../assests/success_icon.svg'
import {useHistory} from "react-router-dom"

function SuccessfulTransaction() {

    const history = useHistory();
    
    return (
        <div>
            <Navbar />
            
            <div className="flex justify-center items-center mt-32">
              <img alt="" src={success_icon} />
            </div>
            <p className="flex justify-center items-center text-sm font-normal  mt-8 text-black"> Payment Succesful </p>

            <div className='flex justify-center items-center mt-20 ml-8'>
                <button
                    className="bg-brandBlue text-white w-36 h-12 pl-12 active:bg-emerald-600 flex items-center font-light text-lg px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => history.push('/home')}
                    >
                                Home
                            </button>
                        </div>

            
            <div className="flex justify-center items-center flex-col pb-10">
                   <p className="text-sm font-normal text-black"> Copyright PoriumPay 2021 </p>
            </div>
        </div>
    )
}

export default SuccessfulTransaction
