import { createContext, useState } from "react";
import run from"../config/gemini"

export const context = createContext()

const ContextProvider = (props) => {


    const [input, setInput]= useState("")
    const [recentPrompt , setRecentPrompt]= useState("")
    const[prevPrompt, setPrevPrompt]= useState("[]")
    const[showResult,setShowResult]= useState("false")
    const[loading, setLoading]= useState("")
    const[resultData, setResultData]= useState("")
    const onSent = async (prompt) =>
    {
        await run (prompt)
    }
   
   

    const contextValue ={
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

    }
    return(
        <ContextProvider value={contextValue}>{props.children}</ContextProvider> 
    )
}
export default ContextProvider