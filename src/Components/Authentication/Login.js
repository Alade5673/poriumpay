import React, { useEffect, useState } from "react";


function Login() {

    const [showModal, setShowModal] = React.useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        let email = e.target.elements.email?.value;
        let password = e.target.elements.password?.value;

        console.log(email, password);
    };

    // const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => setShowModal(true), 1000);
    //     return () => clearTimeout(timer);
    //   }, []);

    return (
        <div>
            <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-center p-5 border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-xl font-semibold ">
                  Login
                  </h3>
                  <h3 className="text-sm font-normal text-gray-400 ml-12">
                  Create Account?
                  </h3>

                </div>

                <form onSubmit={handleFormSubmit}>
                    {/* phone */}
                    <div className="ml-8 mr-8 mt-4">
                        <label htmlFor='password' className="text-sm font-normal mb-4">Phone</label>
                        <input
                            type='phone'
                            className={`w-full p-2 text-primary border rounded-xl outline-none text-sm transition duration-150 ease-in-out mb-4 border-blue-700`}
                            id='phone'
                            placeholder='Type in phone number'
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
                        />
                    </div>

                    {/* button */}
                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className="bg-brandBlue text-white w-44 h-12 active:bg-emerald-600 font-medium text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-12 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                        >
                            Verify
                        </button>
                    </div>
                </form>
                
              </div>
            </div>
          </div>      
        </>
      ) : null}
    
        </div>
    )
}

export default Login
