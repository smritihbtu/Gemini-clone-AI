import React, { useContext } from 'react'
import { IoMdCompass } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import { FaLaptopCode, FaMicrophone, FaReact } from 'react-icons/fa6';
import { DiJavascript } from 'react-icons/di';
import { MdInsertPhoto } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';
import { context } from '../context/context';


const MainContent = () => {
    const{
        input,
        setInput,
        recentPrompt,
        setRecentPrompt,
        prevPrompt,
        setPrevPrompt,
        showResult,
        loading,
        resultData,
        onSent,

    } = useContext(context)
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
        <div className="flex items-center justify-between text-xl p-5 text-slate-700">
            <p>Gemini</p>
            <FaUserAlt />
        </div>
        <div className="max-w-[900px] mx-auto">
            <div className="my-12 text-[56px] text-slate-500 font-semibold p-5">
                <p>
                    <span className="bg-gradient-to-r from-[#4b900f] to-[#ff5546] bg-clip-text text-transparent">Hello, Smriti</span>
                </p>
                <p className="text-gray-400">
                    How can I help you today?
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                <div className="h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                    <p className="text-slate-700 text-lg">
                        Time-complexity of Searching
                        <FaLaptopCode className=" text-slate-950 text-xl p- absolute bottom-2 right-2" />
                    </p>
                </div>

                
                <div className="h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                    <p className="text-slate-700 text-lg">
                        What is loop in JavaScript?Explain
                        <DiJavascript className=" text-slate-950 text-xl p- absolute bottom-2 right-2" />
                    </p>
                </div>

                
                <div className="h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                    <p className="text-slate-700 text-lg">
                        Suggest 10lines Behavioural Attitude?
                        <IoMdCompass className=" text-slate-950 text-xl p- absolute bottom-2 right-2" />
                    </p>
                </div>

                
                <div className="h-[200px] p-4 bg-gray-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                    <p className="text-slate-700 text-lg">
                        Lifecycle of React-Native and Version latest
                        <FaReact className=" text-slate-950 text-xl p- absolute bottom-2 right-2" />
                    </p>
                </div>
            </div>
            <div className="absolute bottom-0 w-full max-w-[920px] px-5 mx-auto">
                <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
                    <input 
                    type="text"
                    placeholder="Enter a prompt here...."
                    className="flex-1 bg-transparent border-none outline-none p-2 text-lg" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}/>

                    <div className="flex gap-4 items-center">
                    <MdInsertPhoto className="text-2xl cursor-pointer" />
                    <FaMicrophone className="text-2xl cursor-pointer" />
                    <IoSend 
                    onClick={()=>onSent(input)}
                    className="text-2xl cursor-pointer" />
                    </div>
                </div>
                <p className="text-sm my-4 mx-auto text-center font-[500] text-slate-600">
                    Gemini may display inaccurate info, including about people, so doule-check its responses.
                </p>
            </div>
        </div>
    </div>
  )
}

export default MainContent