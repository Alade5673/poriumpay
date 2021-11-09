import React, { useRef, useEffect, useState } from "react";
import watermark from "../../assests/waterMark.svg"
import name from '../../assests/logoName.svg'
import hamburger from '../../assests/hamburger.svg'
import airtime from '../../assests/airtime.svg'
import data from '../../assests/data.svg'
import cable from '../../assests/cable.svg'
import electricity from '../../assests/electricity.svg'
import lock from '../../assests/lock.svg'
import next from '../../assests/next_icon.svg'
import history from '../../assests/history.svg'
import historyGray from '../../assests/history_gray.svg'
import Login from "../Authentication/Login";
import {useHistory} from "react-router-dom"
import {useAuth} from '../../context/AuthContext'
import Navbar from "../Sidebar/Navbar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Welcome() {

  toast.configure()

  const signUp="https://api.poriumpay.com/api/v1/sign-up";
  const login="https://api.poriumpay.com/api/v1/sign-in";
  const forgotPassword="https://api.poriumpay.com/api/v1/forgot-password"

    const [showModal, setShowModal] = useState(false);

    const [showLogin, setShowLogin] = useState(false);

    const [showVerify, setShowVerify] = useState(false);

    const [showforgotOTP, setShowForgotOTP] = useState(false);

    const [showForgotPassword, setShowForgotPassword] = useState(false);
    
    const [showResetPassword, setShowResetPassword] = useState(false)

    const [showLogOut, setShowLogOut] = useState(false);

    const history = useHistory();

    const [eror, setError] = useState('');

    const [loading, setLoading] = useState(false);

    const [createData, setCreateData] = useState({
      full_name:"",
      email:"",
      password:""
    });

    const [verifyData, setVerifyData] = useState({
      first:"",
      second:"",
      third:"",
      four:"",
    });

    const [loginData, setLoginData] = useState({
      email:"",
      password:"",
    });

    const [forgotData, setForgotData] = useState({
      email:"",
    });

    const [forgotOTPData, setForgotOTPData] = useState({
      first:"",
      second:"",
      third:"",
      four:"",
    });

    const [resetData, setResetData] = useState({
      password:"",
      confirm_password:"",
    });


    const email = localStorage.getItem("recovery_email");
    const forgot_email = localStorage.getItem("forgot_email")

    useEffect(() => {
        const timer = setTimeout(() => setShowModal(true), 1000);
        return () => clearTimeout(timer);
      }, []);

      

      const handleCreatAccount =(e) => {
        e.preventDefault();
        axios
        .post(signUp, {
          email: createData.email,
          full_name: createData.full_name,
          password: createData.password,
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
          localStorage.setItem("recovery_email", createData.email);
          history.push(setShowVerify(true) || setShowModal(false));
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
          } else if (error.request) {
            toast.error(error.request, { autoClose: 3000 });
          } else {
            toast.error(error.message, { autoClose: 3000 });
          }
        });
      };

      const resendOTP =(e) => {
        e.preventDefault();
        axios
        .post("http://137.184.202.230/api/v1/resend-otp", {
          email: email,
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
          } else if (error.request) {
            toast.error(error.request, { autoClose: 3000 });
          } else {
            toast.error(error.message, { autoClose: 3000 });
          }
        });
      };

      const verifyOTP =(e) => {
        e.preventDefault();

        var otp = `${verifyData.first + verifyData.second + verifyData.third + verifyData.fourth}`
        axios
        .post("https://api.poriumpay.com/api/v1/verify-email", {
          otp_code: otp.toString(),
          email: email
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
          history.push(setShowLogin(true) || setShowVerify(false));
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
          } else if (error.request) {
            toast.error(error.request, { autoClose: 3000 });
          } else {
            toast.error(error.message, { autoClose: 3000 });
          }
        });
      };

      const Login =(e) => {
        e.preventDefault();
        axios
        .post(login, {
          email: loginData.email,
          password: loginData.password,
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
          localStorage.setItem("full_name", res.data.data.full_name);
          localStorage.setItem("user_email", res.data.data.email);
          history.push("/home" || setShowLogin(false));
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
            // history.push(setShowVerify(true) || setShowLogin(false));
          } else if (error.request) {
            // history.push(setShowVerify(true) || setShowLogin(false));
            console.log(error.request);
          } else {
            // history.push(setShowVerify(true) || setShowLogin(false));
            console.log("Error", error.message);
          }
        });
      };

      const ForgotPassword =(e) => {
        e.preventDefault();
        axios
        .post(forgotPassword, {
          email: forgotData.email,
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
          localStorage.setItem("forgot_email", forgotData.email);
          history.push(setShowForgotOTP(true) || setShowForgotPassword(false));
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
            // history.push(setShowVerify(true) || setShowLogin(false));
          } else if (error.request) {
            // history.push(setShowVerify(true) || setShowLogin(false));
            toast.error(error.request, { autoClose: 3000 });
          } else {
            // history.push(setShowVerify(true) || setShowLogin(false));
            toast.error(error.message, { autoClose: 3000 });
          }
        });
      };


      const forgotOTP =(e) => {
        e.preventDefault();

        var otp = `${forgotOTPData.first + forgotOTPData.second + forgotOTPData.third + forgotOTPData.fourth}`
        axios
        .post("https://api.poriumpay.com/api/v1/verify-otp", {
          otp_code: otp.toString(),
          email: forgot_email
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
          history.push(setShowResetPassword(true) || setShowForgotPassword(false));
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
          } else if (error.request) {
            toast.error(error.request, { autoClose: 3000 });
          } else {
            toast.error(error.message, { autoClose: 3000 });
          }
        });
      };


      const ResetPassword =(e) => {
        e.preventDefault();

        axios
        .post("https://api.poriumpay.com/api/v1/reset-password", {
          email: forgot_email,
          new_password: resetData.new_password,
          confirm_password: resetData.confirm_password
        })
        .then((res) => {
          setLoading(false);
          toast.success(res.data.message, { autoClose: 3000 });
          history.push(setShowLogin(true) || setShowResetPassword(false));
        })
        .catch(function (error) {
          if (error.response) {
            setLoading(false);
            toast.error(error.response.data.message, { autoClose: 3000 });
          } else if (error.request) {
            toast.error(error.request, { autoClose: 3000 });
          } else {
            toast.error(error.message, { autoClose: 3000 });
          }
        });
      };


    const handleSignuP = (e) => {
        e.preventDefault();

        const newData={...createData}
        newData[e.target.id] = e.target.value
        setCreateData(newData)

        console.log(newData)

    };

    const handleVerify = (e) => {
      e.preventDefault();

      const newData={...verifyData}
      newData[e.target.id] = e.target.value
      setVerifyData(newData)

      console.log(newData)

  };

  const handleLogin = (e) => {
    e.preventDefault();

    const newData={...loginData}
    newData[e.target.id] = e.target.value
    setLoginData(newData)

    console.log(newData)

};

const handleForgotPassword = (e) => {
  e.preventDefault();

  const newData={...forgotData}
  newData[e.target.id] = e.target.value
  setForgotData(newData)

  console.log(newData)

};

const handleForgotOTP = (e) => {
  e.preventDefault();

  const newData={...forgotOTPData}
  newData[e.target.id] = e.target.value
  setForgotOTPData(newData)

  console.log(newData)

};


const handleReset = (e) => {
  e.preventDefault();

  const newData={...resetData}
  newData[e.target.id] = e.target.value
  setResetData(newData)

  console.log(newData)

};



 return (
   <div>
     <Navbar/>
    <div className="w-full h-screen flex justify-center md:justify-center lg:mt-32 mt-10 md:mt-32">
        <div className="flex bg-cardColor shadow-sm flex-col  h-full w-10/12  space-y-8">

        <div className="flex">
                    {/* airtime */}
                    <div className=" -ml-4 lg:ml-52 md:ml-4">
                        <button className="w-16 md:w-24 lg:w-24 bg-airtimeColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        // onClick={() => history.push('/airtime')}
                        >
                            <img alt="" src={airtime} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-2 md:ml-7 lg:ml-7 "> Airtime </p>
                    </div>

                    {/* data */}
                    <div className="ml-2 md:ml-20 lg:ml-20">
                        <button className="w-16 md:w-24 lg:w-24 bg-dataColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        // onClick={() => history.push('/data')}
                        >
                            <img alt="" src={data} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-4 md:ml-7 lg:ml-7 "> Data </p>
                    </div>

                    {/* cable */}
                    <div className="ml-2 md:ml-20 lg:ml-20">
                        <button className="w-16 md:w-24 lg:w-24 bg-cableColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        // onClick={() => history.push('/cable')}
                        >
                            <img alt="" src={cable} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-3 lg:ml-7 md:ml-4 "> Cable TV </p>
                    </div>

                    {/* electricity */}
                    <div className="ml-2 md:ml-20 lg:ml-20">
                        <button className="w-16 md:w-24 lg:w-24 bg-electricityColor md:text-sm text-xs text-white rounded-2xl h-12 " 
                        // onClick={() => history.push('/electricity')}
                        >
                            <img alt="" src={electricity} className="w-6 ml-5 lg:ml-8"/>
                        </button>
                        <p className="text-sm font-light mt-3 ml-1 lg:ml-7 md:ml-4"> Electricity </p>
                    </div>
            </div>


            <div className="md:flex lg:flex -ml-8 lg:ml-96 md:ml-32">
                <img alt="" src={lock} className="md:w-8 lg:w-8 ml-36 md:ml-12 lg:ml-8"/>
                <p className=" text-xs md:text-sm lg:text-sm font-normal mt-2 ml-16 md:ml-3 lg:ml-7 "> Securely Add Your Debit card details </p>
            </div>

            {/* button */}
                <button className="w-10/12 lg:w-5/12 bg-transparent border-2 font-light border-blue-900 md:text-sm text-xs text-black rounded-2xl h-16 md:h-12 lg:h-10 ml-6 lg:ml-80 md:ml-12" >
                    Add card details
                </button>

                <div className="bg-brandBlue w-11/12 md:w-11/12 lg:w-7/12 ml-4 md:ml-6 lg:ml-52 rounded-t-xl h-8 flex ">
                    <img alt="" src={history} className="h-5 ml-72 mt-1"/>
                    <p className="text-sm font-light -ml-44 md:ml-0 lg:ml-7  mt-1 text-white"> History </p>
                </div>

                <div className="flex invisible md:visible lg:visible md:ml-10 lg:ml-60">
                    <p className="text-sm font-normal mt-1 text-gray-400"> Airtime </p>
                    <p className="text-sm font-normal ml-20  mt-1 text-gray-400"> Data </p>
                    <p className="text-sm font-normal ml-20  mt-1 text-gray-400"> Cable </p>
                    <p className="text-sm font-normal ml-20 mt-1 text-gray-400"> Electricity </p>
                    <p className="text-sm font-normal ml-20  mt-1 text-gray-400"> View all </p>
                </div>

                <div className="flex justify-center items-center flex-col ">
                    <img alt="" src={historyGray} className="h-10 -mt-8 md:mt-40 lg:mt-0"/>
                    <p className="visible md:invisible lg:invisible text-sm font-normal mt-1 text-gray-400"> No transaction yet </p>
                   <p className="text-sm font-normal  mt-4 text-black pt-8 md:pt-36 lg:pt-0"> Copyright PoriumPay 2021 </p>
                </div>
            
        </div>




        {/* create account */}
        <div>
        {showModal ? (
        < div className="bg-opacity-40">
          <div
            className="justify-center -ml-28 -md:ml-40 lg:ml-0 lg:items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none w-full bg-black bg-opacity-40"
          >
            <div className="relative w-6/12 lg:w-5/12 md:w-8/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex  pl-12 md:pl-48 lg:pl-48 p-5 border-solid border-blueGray-200 rounded-t">
                  <h3 className=" text-sm md:text-xl lg:text-xl font-semibold ">
                    Create Account
                  </h3>
                  <h3 className="text-sm font-normal text-gray-400 ml-16 md:ml-28 lg:ml-28 mt-1" onClick={() => setShowLogin(true) || setShowModal(false)}>
                    Login
                  </h3>

                </div>

                <form onSubmit={(e)=> handleCreatAccount(e)}>
                    {/* name */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='name' className="text-sm font-normal mb-4">Full name (Last name first)</label>
                        <input
                            type='name'
                            className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='full_name'
                            placeholder='Type in full name'
                            required
                            onChange={(e) => handleSignuP(e)}
                            value={createData.full_name}
                        />
                    </div>

                    {/* email */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='phone' className="text-sm font-normal mb-4">Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='email'
                            placeholder='Type in your email address'
                            required
                            onChange={(e) => handleSignuP(e)}
                            value={createData.email}
                        />
                    </div>

                    {/* password */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='password'
                            placeholder='Enter secure password'
                            required
                            onChange={(e) => handleSignuP(e)}
                            value={createData.password}
                        />
                    </div>

                    {/* button */}
                    
                    <div className='flex justify-center items-center mt-6'>
                        <button
                        onClick={handleCreatAccount}
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            disabled={loading}
                        >
                            Create
                            <img alt="" src={next} className="h-4 w-4 mt-1 ml-8"/>
                        </button>
                    </div>
                </form>
                
              </div>
            </div>
          </div>      
        </div>
      ) : null}
      </div>


      {/* login */}
      {showLogin ? (
        <>
          <div
            className="justify-center -ml-56 -md:ml-20 lg:ml-0 -mt-96 md:mt-0 lg:mt-0  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40"
          >
            <div className="relative w-4/12 lg:w-5/12 md:w-5/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 pl-0 md:pl-20 lg:pl-64 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-sm md:text-xl lg:text-xl font-semibold ml-16 md:ml-0 lg:ml-0">
                  Login
                  </h3>
                  <h3 className="text-xs md:text-sm lg:text-sm font-normal text-gray-400 ml-10 md:ml-20 lg:ml-24 mt-1" onClick={() => setShowModal(true) || setShowLogin(false)}>
                  Create Account?
                  </h3>

                </div>

                <form >
                    {/* phone */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">Email</label>
                        <input
                            type='text'
                            className={`w-11/12 md:w-full lg:w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='email'
                            placeholder='Type in email address'
                            required
                            onChange={(e) => handleLogin(e)}
                            value={loginData.email}
                        />
                    </div>

                    {/* password */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">Password</label>
                        <input
                            type='password'
                            className={`w-11/12 md:w-full lg:w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='password'
                            placeholder='Enter secure password'
                            required
                            onChange={(e) => handleLogin(e)}
                            value={loginData.password}
                        />
                    </div>

                    {/* checkbox */}
                    <div class="flex ml-9">
                        <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox" />
                            <span class="ml-2 text-xs md:text-sm lg:text-sm">Remember me</span>
                            <span className="text-gray-400 font-light text-sm ml-16 md:ml-52 lg:ml-56"
                            onClick={() => setShowForgotPassword(true) || setShowLogin(false)}
                            >Forgot password?</span>
                        </label>
                    </div>

                    {/* button */}
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={Login}
                        >
                            Login
                            <img alt="" src={next} className="h-4 w-4 mt-1 ml-8"/>
                        </button>
                    </div>

                </form>
                
              </div>
            </div>
          </div>      
        </>
      ) : null}



      {/* verify */}
      {showVerify ? (
        <>
          <div
            className="justify-center -ml-40 -md:ml-40 lg:ml-0 -mt-96 -md:mt-40 lg:mt-0 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40"
          >
            <div className="relative w-6/12 lg:w-5/12 md:w-5/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 pl-24 md:pl-48 lg:pl-48 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-bold ">
                  Verify Your Account
                  </h3>

                </div>

              <form onSubmit={(e)=> verifyOTP(e)}>
                <div class="rounded text-center">
                    {/* <h1 class="text-2xl font-bold">OTP Verification</h1> */}
                    <div class="flex flex-col mt-4"> <span>Enter OTP Sent to your email</span></div>
                  
                    <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5"> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" required
                            onChange={(e) => handleVerify(e)}
                            value={verifyData.first}/> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" 
                      onChange={(e) => handleVerify(e)}
                      value={verifyData.second}/> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" 
                      onChange={(e) => handleVerify(e)}
                      value={verifyData.third}/> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" 
                      onChange={(e) => handleVerify(e)}
                      value={verifyData.fourth}/> 
                    </div>
                    <div class="flex justify-center text-center mt-5"> <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                      <span onClick={resendOTP} class="font-normal text-gray-400">Resend</span><i class='bx bx-caret-right ml-1'></i></a> 
                    </div>
                  

                </div>

                {/* button */}
                <div className='flex justify-center items-center mt-12'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={verifyOTP}
                        >
                            Verify
                            <img alt="" src={next} className="h-4 w-4 mt-1 ml-8"/>
                        </button>
                </div>
              </form>
              </div>
            </div>
          </div>      
        </>
      ) : null}



      {/* forgotPassword */}
      {showForgotPassword ? (
        <>
          <div
            className="justify-center -ml-44 md:ml-0 lg:ml-0 -mt-96 md:mt-0 lg:mt-0  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40"
          >
            <div className="relative w-6/12 lg:w-5/12 md:w-8/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 pl-10 md:pl-40 lg:pl-48 border-solid border-blueGray-200 rounded-t">
                  <h3 className=" text-sm md:text-md lg:text-xl font-semibold ml-16 md:ml-0 lg:ml-0">
                  Forgot Password
                  </h3>
                  <h3 className="text-sm font-normal text-gray-400 ml-12 md:ml-20 lg:ml-24 mt-1" onClick={() => setShowLogin(true) || setShowForgotPassword(false)}>
                  Login
                  </h3>

                </div>

                <form >
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">Email</label>
                        <input
                            type='text'
                            className={`w-11/12 md:w-full lg:w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='email'
                            placeholder='Type in email address'
                            required
                            onChange={(e) => handleForgotPassword(e)}
                            value={forgotData.email}
                        />
                    </div>

                    {/* button */}
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={ForgotPassword}
                        >
                            Continue
                            <img alt="" src={next} className="h-4 w-4 mt-1 ml-3 md:ml-3 lg:ml-3"/>
                        </button>
                    </div>

                </form>
                
              </div>
            </div>
          </div>      
        </>
      ) : null}



      {/* verify */}
      {showforgotOTP? (
        <>
          <div
            className="justify-center -ml-44 md:ml-0 lg:ml-0 -mt-96 md:mt-0 lg:mt-0 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40"
          >
            <div className="relative w-6/12 lg:w-5/12 md:w-8/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 pl-24 md:pl-48 lg:pl-48 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-bold ">
                  Verify Your Email
                  </h3>

                </div>

              <form onSubmit={(e)=> forgotOTP(e)}>
                <div class="rounded text-center">
                    {/* <h1 class="text-2xl font-bold">OTP Verification</h1> */}
                    <div class="flex flex-col mt-4"> <span>Enter OTP Sent to your email</span></div>
                  
                    <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5"> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="first" maxlength="1" required
                            onChange={(e) => handleForgotOTP(e)}
                            value={forgotOTPData.first}/> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="second" maxlength="1" 
                      onChange={(e) => handleForgotOTP(e)}
                      value={forgotOTPData.second}/> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="third" maxlength="1" 
                      onChange={(e) => handleForgotOTP(e)}
                      value={forgotOTPData.third}/> 
                      <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" id="fourth" maxlength="1" 
                      onChange={(e) => handleForgotOTP(e)}
                      value={forgotOTPData.fourth}/> 
                    </div>
                    <div class="flex justify-center text-center mt-5"> <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer">
                      <span onClick={resendOTP} class="font-normal text-gray-400">Resend</span><i class='bx bx-caret-right ml-1'></i></a> 
                    </div>
                  

                </div>

                {/* button */}
                <div className='flex justify-center items-center mt-12'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={forgotOTP}
                        >
                            Verify
                            <img alt="" src={next} className="h-4 w-4 mt-1 ml-8"/>
                        </button>
                </div>
              </form>
              </div>
            </div>
          </div>      
        </>
      ) : null}



      {/* ResetPassword */}
      {showResetPassword ? (
        <>
          <div
            className="justify-center -ml-44 md:ml-0 lg:ml-0 -mt-96 md:mt-0 lg:mt-0  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40"
          >
            <div className="relative w-6/12 lg:w-5/12 md:w-8/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 pl-8 md:pl-44 lg:pl-48 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold ml-16 md:ml-0 lg:ml-0">
                  Reset Password
                  </h3>
                </div>

                <form >
                    {/* phone */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">New Password</label>
                        <input
                            type='password'
                            className={`w-11/12 md:w-full lg:w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='new_password'
                            placeholder='New Password'
                            required
                            onChange={(e) => handleReset(e)}
                            value={resetData.new_password}
                        />
                    </div>

                    {/* password */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">Confirm Password</label>
                        <input
                            type='password'
                            className={`w-11/12 md:w-full lg:w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='confirm_password'
                            placeholder='Confirm Password'
                            required
                            onChange={(e) => handleReset(e)}
                            value={resetData.confirm_password}
                        />
                    </div>

                    {/* button */}
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={ResetPassword}
                        >
                            Reset
                            <img alt="" src={next} className="h-4 w-4 mt-1 ml-8"/>
                        </button>
                    </div>

                </form>
                
              </div>
            </div>
          </div>      
        </>
      ) : null}




      {/* logout */}
      {showLogOut ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-40"
          >
            <div className="relative w-5/12 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex p-5 pl-48 border-solid border-blueGray-200 rounded-t ml-10">
                  <h3 className="text-l font-semiBold ">
                  Logout?
                  </h3>

                </div>


                <div class="rounded text-center">
                    {/* <h1 class="text-2xl font-bold">OTP Verification</h1> */}
                    <div class="flex flex-col mt-4"> <span className="font-bold">Leaving us already?</span></div>
                </div>

                {/* button */}
                <div className='flex justify-center items-center mt-12'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowLogOut(false)}
                        >
                            Cancel
                        </button>

                        <button
                            className=" text-brandBlue ml-4 w-44 h-12 pl-16 active:bg-emerald-600 flex items-center font-medium text-sm px-6 py-3 rounded-full border-brandBlue shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => history.push('/home')}>
                            Continue
                        </button>
                    </div>
                
              </div>
            </div>
          </div>      
        </>
      ) : null}
    </div>
  </div>
  )
}

export default Welcome
