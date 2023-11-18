import React, { useState } from "react";
import plus from "../Assets/plus.png";
import discord from "../Assets/discord.png";
import light from "../Assets/contrast.png";
import update from "../Assets/enlarge.png";
import logout from "../Assets/logout.png";
import flash from "../Assets/Flash.png";
import limitation from "../Assets/Limitations.png";
import send from "../Assets/send.png";
import user from '../Assets/Avatar User.png';
import chatGptAvatar from '../Assets/Avatar ChatGPT.png';
import rating from '../Assets/Rating.png';
import clear from '../Assets/delete.png';
import pen from '../Assets/pen.png';
import message from '../Assets/message.png';
import { Link } from "react-router-dom";

const StartScreen = () => {
  const examples = [
    { description: "“Explain quantum computing in simple terms” →" },
    { description: "“Got any creative ideas for a 10 year old’s birthday?” →" },
    { description: "“How do I make an HTTP request in Javascript?” →" },
  ];

  const capabilities = [
    { description: "Remembers what user said earlier in the conversation" },
    { description: "Allows user to provide follow-up corrections" },
    { description: "Trained to decline inappropriate requests" },
  ];

  const limitations = [
    { description: "May occasionally generate incorrent information" },
    {
      description:
        "May occasionally produce harmful instructions or biased content",
    },
    { description: "Limited knowledge of world and events after 2021" },
  ];

  const [userInput, setUserInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = () => {
    if (userInput.trim() !== '') {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { type: 'user', message: userInput, image: user },
          { type: 'bot', message: `Bot: Hello! You said: ${userInput}`, image: chatGptAvatar, like: rating },
        ]);
        setUserInput('');
      }
    };


  const Chat = ({ chatHistory  }) => (
    <div className="w-full">
      {chatHistory.map((item, index) => (
        
        <div 
          key={index}
          className={`flex px-44 text-white 
           ${item.type === 'user' ? 'bg-[#343541]' : 'bg-[#444654]'} p-2  rounded`}
        ><img className="h-6 w-6 mr-5" src={item.image} alt="" />
          <div className="w-3/4">{item.message}</div>
          {item.type === "bot" && (<div className="right-20"><img className="h-5 w-12" src={item.like} alt="rating"/></div>)}
        </div>
      ))}
  </div>
);
  return (
    <div className="min-h-screen fixed w-full flex">
      <div className="w-1/6 bg-[#202123] min-h-screen p-2">
        <div className="h-4/6">
          <div className="border space-x-4 border-[#444654] rounded-lg  flex items-center  pl-4 py-2">
            <img className=" h-3 w-3" src={plus} alt="Plus" />
            <p className="text-white ">New Chat</p>
          </div>
          {chatHistory.length > 0 && (<div className="flex  bg-[#343540] h-12 items-center  my-4 rounded-lg space-x-3 p-2">
            <img className="h-4 w-4" src={message} alt="discord" />
            <p className="text-white truncate w-32 ">Example Conversation</p>
            <img className="h-4 w-4" src={pen} alt="discord" />
            <img className="h-4 w-4" src={clear} alt="discord" />
          </div>)}

        </div>
        <div className="h-full fixed  space-y-2 ">
          <div className="h-[1px] w-[211px] bg-[#444654] px-2"></div>
          {chatHistory.length > 0 && (<div className="flex items-center space-x-3 p-2">
            <img className="h-4 w-4" src={clear} alt="discord" />
            <p className="text-white">Clear Conversation</p>
          </div>)}

          <div className="flex items-center space-x-3 p-2">
            <img className="h-4 w-4" src={light} alt="discord" />
            <p className="text-white">Light Mode</p>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <img className="h-3 w-4" src={discord} alt="discord" />
            <p className="text-white">OpenAI Discord</p>
          </div>
          <div className="flex items-center space-x-3 p-2">
            <img className="h-4 w-4" src={update} alt="discord" />
            <p className="text-white">Updates & FAQ</p>
          </div>
          <Link to='../login' ><div className="flex cursor-pointer items-center space-x-3 p-2">
            <img className="h-4 w-4" src={logout} alt="discord" />
            <p className="text-white"> Log Out</p>
          </div></Link>
        </div>
      </div>
      <div className={`w-full bg-[#343541] min-h-screen overflow-y-auto mb-16 relative flex gap-10 ${chatHistory.length > 0? '' : 'justify-center' }  items-center flex-col`}>
      {chatHistory.length === 0 ? (
        <>
         <div>
         <p className="text-white text-3xl">ChatGPT</p>
       </div>
       <div className="flex gap-3">
         <div className="space-y-5 flex flex-col justify-center items-center">
           <img className="h-6 w-6" src={light} alt="light" />
           <p className="text-white text-xl">Examples</p>
           {examples.map((example, index) => (
             <div
               className="p-3 w-[250px] flex items-center justify-center rounded-lg bg-[#40414E]"
               key={index}
             >
               <p className="text-white text-center">{example.description}</p>
             </div>
           ))}
         </div>
         <div className="space-y-5 flex flex-col justify-center items-center">
           <img className="h-6 w-6" src={flash} alt="light" />
           <p className="text-white text-xl">Capabilities</p>
           {capabilities.map((capability, index) => (
             <div
               className="p-3 w-[250px] flex items-center justify-center rounded-lg bg-[#40414E]"
               key={index}
             >
               <p className="text-white text-center">
                 {capability.description}
               </p>
             </div>
           ))}
         </div>
         <div className="space-y-5 pt-6 flex flex-col justify-center items-center">
           <img className="h-6 w-6" src={limitation} alt="light" />
           <p className="text-white text-xl">Limitations</p>
           {limitations.map((limitation, index) => (
             <div
               className="p-3 w-[250px] flex items-center justify-center rounded-lg bg-[#40414E]"
               key={index}
             >
               <p className="text-white text-center">
                 {limitation.description}
               </p>
             </div>
           ))}
         </div>
       </div>
       </>
      ) : (
        <>
          <Chat chatHistory={chatHistory} />
        </>
      )}
      <div className=" fixed bottom-0 flex flex-col">
          <div className="flex justify-center bottom-div items-center">
            <input
              className="w-[900px] h-16 outline-none rounded-xl text-white pl-3 pr-16 bg-[#40414E]"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              type="text"
            ></input>
            <img
              className="absolute right-[125px] h-5 w-5 cursor-pointer"
              src={send}
              onClick={handleSendMessage}
              alt="send"
            />
          </div>
          <p className="text-[#9A9B9F] p-3">
            <span className="underline underline-offset-4">
              ChatGPT Jan 9 Version
            </span>
            . Free Research Preview. Our goal is to make AI systems more natural
            and safe to interact with. Your feedback will help us improve.
          </p>
        </div>
      </div>
      

    </div>
  );
};

export default StartScreen;
