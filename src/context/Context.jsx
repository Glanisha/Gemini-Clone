import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPropmt, setPrevPropmt] = useState([]);
  const [showResult, setShowresult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setresultData] = useState("");

  const onSent = async (prompt) => {
    setresultData("");
    setLoading(true);
    setShowresult(true);
    setRecentPrompt(input);
    const response = await run(input);
    setresultData(response);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPropmt,
    setPrevPropmt,
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    showResult,
    setShowresult,
    loading,
    setLoading,
    resultData,
    setresultData,
    onSent,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
