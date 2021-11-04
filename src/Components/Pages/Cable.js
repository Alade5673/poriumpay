import React, {useState}from 'react'
import Navbar from '../Sidebar/Navbar'
import arrow from '../../assests/back_arrow.svg'
import cable_icon from '../../assests/cable_icon.svg'
import forward_arrow from '../../assests/forward_arrow.svg'
import dstv from '../../assests/dstv.png'
import gotv from '../../assests/gotv.png'
import startimes from '../../assests/starttimes.png'
import CustomSelect from '../select'
import FlutterWave from '../flutterwave'

function Cable() {

    const [cableTv, setCableTv] = React.useState('');

    const [flutter, setFlutter] = React.useState(false)

    const [cableData, setCableData] = React.useState({
        amount:"",
        decoder_number:""
      });

    const handleCable = (e) => {
        e.preventDefault();

        const newData={...cableData}
        newData[e.target.id] = e.target.value
        setCableData(newData)

        console.log(newData)

    };

    const handleChange = (event) => {
        setCableTv(event.target.value);
      };
      
      const handleSubmit = () => {
        console.log(cableTv)
        console.log(cableData)
        console.log(cableData.amount)
        console.log(cableData.decoder_number)


        localStorage.setItem("transaction_amount", cableData.amount);
        const transactionDetails ={
            type:'cable',
            meta:{
                cable:cableTv,
                decoder_number:cableData.decoder_number
                // phone_number: airtimeData.receiver_number,
                
            }
        }
        localStorage.setItem('transctiondetails', JSON.stringify(transactionDetails))
        setFlutter(true)
      }

      

    const cable =[
        {
            img:dstv,
            name:'DSTV'
        },
        {
          img:gotv,
          name:'GoTv'
      },
        {
            img:startimes,
            name:'StarTimes'
        },
    ]


    // const package =[
    //     {
    //         name:'DSTV Padi'
    //     },
        
    // ]
    return (
        <div>
            <Navbar />
            
            <div className="flex ml-8 md:ml-40 lg:ml-40 mt-8">
              <img alt="" src={arrow} className="invisible md:invisible lg:invisible"/>
                <div className="flex ml-5 md:ml-20 lg:ml-96">
                    <img alt="" src={cable_icon} className="h-6 ml-10"/>
                    <p className="text-bodyText font-normal ml-3 text-l">Cable TV</p>
                </div>
                
            </div>


            <div className="relative w-11/12 md:w-8/12 lg:w-5/12 my-6 mx-auto max-w-3xl">
                <form onSubmit={(e)=>e.preventDefault()}>
                        <div className="mr-8 ml-8">
                                <label htmlFor='text' className="text-sm font-normal mb-4">Select a TV Company</label>
                                <CustomSelect options={cable} onChange={handleChange}/>
                        </div>
                        
                        <div className="ml-8 mr-8 mt-4">
                            <label htmlFor='text' className="text-sm font-normal mb-4">Select a Package</label>
                            <input
                                type='text'
                                className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                                id='phone'
                                placeholder='Select data bundles'
                            />
                        </div>

                        
                        <div className="ml-8 mr-8 mt-4">
                            <label htmlFor='text' className="text-sm font-normal mb-4">Enter amount</label>
                            <input
                                type='number'
                                className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                                id='amount'
                                placeholder='Type in amount'
                                required
                                onChange={(e) => handleCable(e)}
                                value={cableData.amount}
                            />
                        </div>

                        <div className="ml-8 mr-8 mt-4">
                            <label htmlFor='text' className="text-sm font-normal mb-4">Decoder number</label>
                            <input
                                type='number'
                                className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                                id='decoder_number'
                                placeholder='Enter decoder number'
                                required
                                onChange={(e) => handleCable(e)}
                                value={cableData.decoder_number}
                            />
                        </div>

                        {/* button */}
                        <FlutterWave handleSubmit={handleSubmit} buttonName="Continue"/>
                        {/* <div className='flex justify-center items-center mt-6'>
                            <button
                                className="bg-brandBlue text-white w-60 h-12 pl-16 active:bg-emerald-600 flex items-center font-light text-lg px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Continue
                                <img alt="" src={forward_arrow} className="h-4 w-4 mt-1 ml-8"/>
                            </button>
                        </div> */}

                    </form>

            </div>

            <div className="flex justify-center items-center flex-col pb-10 pt-20">
                   <p className="text-sm font-normal  mt-4 text-black"> Copyright PoriumPay 2021 </p>
            </div>
        </div>
    )
}

export default Cable
