import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

     const [isSignInForm, setInSignInForm ] = useState(true)


  const toggleSignInForm = () => {
  
    setInSignInForm(!isSignInForm)

  }


  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/df6621a3-890c-4ca0-b698-90bd5152f3d1/20a59be7-7062-4991-bca0-805e9a7f2716/IN-en-20240107-trifectadaily-perspective_alpha_website_large.jpg"
          alt="Background"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-75 my-36 mx-auto right-0 left-0 text-white flex flex-col items-center rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Signup"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 m-4 w-full  bg-gray-700 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-4 w-full  bg-gray-700 "
        />
        <input
          type="text"
          placeholder="Password"
          className=" p-4 m-4 w-full  bg-gray-700 "
        />
        <button className="py-4 px-4 m-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Signup"}
        </button>
        <p className="py-4 cursor: cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;


