import React from 'react'
import Navbar from '../Sidebar/Navbar'
import arrow from '../../assests/back_arrow.svg'
import forward_arrow from '../../assests/forward_arrow.svg'

function AddCard() {
    return (
        <div>
            <Navbar />
            
            <div className="flex ml-8 md:ml-40 lg:ml-40 mt-8">
              <img alt="" src={arrow} className="invisible md:invisible lg:invisible"/>
                <div className="flex ml-5 md:ml-20 lg:ml-96">
                    <p className="text-bodyText font-normal ml-3 text-l">Direct card payment</p>
                </div>
                
            </div>


            <div className="relative w-full md:w-9/12 lg:w-5/12 my-6 mx-auto max-w-3xl">
                <form >
                       
                        <div className="ml-16 md:ml-16 lg:ml-32 mr-8 mt-4">
                            <label htmlFor='password' className="text-sm font-normal mb-4">Enter Card Number</label>
                            <input
                                type='phone'
                                className={`w-10/12 p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                                id='phone'
                                placeholder='0000 0000 0000 0000'
                            />
                        </div>
                        
                        
                        <div className="ml-16 md:ml-16 lg:ml-32 mr-8 mt-4 flex">
                            <div> 
                                <div>
                                <label htmlFor='password' className="text-sm font-normal mb-4">Card expiry</label>
                                </div>
                                <input
                                    type='phone'
                                    className={`w-28 p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                                    id='phone'
                                    placeholder='      MM/YY'
                                />

                            </div>
                            <div className="ml-2 md:ml-44 lg:ml-20">
                                <div>
                                <label htmlFor='password' className="text-sm font-normal mb-4">CVV </label>
                                </div>
                                <input
                                    type='phone'
                                    className={`w-28 p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                                    id='phone'
                                    placeholder='         123'
                                />
                            </div>
                        </div>


                        <div class="flex ml-16 md:ml-16 lg:ml-32">
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox" />
                            <span class="ml-2 text-sm">Save Card</span>
                        </label>
                    </div>

                        {/* button */}
                        <div className='flex justify-center items-center mt-20 ml-4 md:ml-3 lg:ml-8'>
                            <button
                                className="bg-brandBlue text-white w-40 h-12 pl-16 active:bg-emerald-600 flex items-center font-light text-lg px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                                type="button"
                                // onClick={() => setShowLogOut(true) || setShowLogin(false)}
                            >
                                Save
                                {/* <img alt="" src={forward_arrow} className="h-4 w-4 mt-1 ml-8"/> */}
                            </button>
                        </div>

                    </form>

            </div>

            <div className="flex justify-center items-center flex-col pb-10 pt-20">
                   <p className="text-sm font-normal  mt-4 text-black"> Copyright PoriumPay 2021 </p>
            </div>
        </div>
    )
}

export default AddCard
