import React, { useState } from "react";
import logo from "../Assets/ChatGPT Logo.svg";
import google from "../Assets/Google Logo.png";
import microsoft from "../Assets/Microsoft Logo.png";
import recaptcha from "../Assets/recaptcha logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [checked, setChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="flex items-center min-h-screen pt-11 flex-col">
      <div className="pb-20">
        <img className="h-10 w-10" src={logo} alt="Chat GPT" />
      </div>
      <div className="space-y-5 flex justify-center items-center flex-col ">
        <p className="text-4xl font-bold">Welcome back</p>
        <label className="relative">
          <input
            className="w-80 h-14 p-2 outline-none border border-[black] border-opacity-30 focus:border-[#0FA47F] rounded-md "
            type="email"
            onChange={handleOnChange}
          />
          <span
            className={`text-xl absolute top-3 left-0 px-2 input-text ${
              inputValue
                ? "text-[#0FA47F] bg-white transform -translate-x-1 -translate-y-7 scale-75"
                : ""
            }`}
          >
            Email address
          </span>
        </label>
        <div className="flex items-center justify-around border border-black border-opacity-30 p-4 rounded-md w-80">
          <div className="flex gap-3 justify-center items-center">
            <input
              className="h-5 w-5 border-4-solid"
              type="checkbox"
              name="checkbox"
              checked={checked}
              onChange={handleChange}
            />
            <p className="">I’m not a robot</p>
          </div>
          <div className="flex justify-center items-center flex-col">
            <img className="h-6 w-6" src={recaptcha} alt="" />
            <p className="text-[12px]">reCAPTCHA</p>
            <p className="text-[8px]"> Privacy - Terms</p>
          </div>
        </div>
        <Link to='../welcome' ><button className="bg-[#0FA47F] w-80 p-4 text-white font-semibold rounded-md">
          Continue
        </button></Link>
        <Link to='../login' ><p className="cursor-pointer">
          Don’t have an account? <span className="text-[#0FA47F]">Sign up</span>
        </p></Link>
        <div className="flex justify-center items-center">
          <div className="h-[1px] w-32 bg-black bg-opacity-30"></div>
          <p className="p-4 text-center">OR</p>
          <div className="h-[1px] w-32 bg-black bg-opacity-30 "></div>
        </div>
        <div className="flex border border-[black] border-opacity-30 rounded-md w-80 p-3 items-center cursor-pointer">
          <img className="h-6 w-6" src={google} alt="google" />
          <p className="px-3">Continue with Google</p>
        </div>
        <div className="flex border border-[black] border-opacity-30 rounded-md w-80 p-3 items-center cursor-pointer">
          <img className="h-6 w-6" src={microsoft} alt="microsoft" />
          <p className="px-3">Continue with Microsoft Account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
