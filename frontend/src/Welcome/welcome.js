import React from 'react'
import logo from '../Assets/ChatGPT.png';
import { Link } from 'react-router-dom';
import Login from '../Login/login';

const Welcome = () => {
  return (
    <div className='bg-[#343541] min-h-screen w-full justify-center items-center flex flex-col gap-5'>
        <img className='h-10 w-10' src={logo} alt='Chat GPT'/>
        <p className='text-white'>Welcome to ChatGPT</p>
        <p className='text-white'>Log in with your OpenAI account to continue</p>
        <div className='space-x-2'>
           <Link to='../login'><button className='text-white bg-[#0FA47F] p-2 rounded-md'>Log in</button></Link> 
            <button className='text-white bg-[#0FA47F] p-2 rounded-md'>Sign up</button>
        </div>
    </div>
  )
}

export default Welcome;