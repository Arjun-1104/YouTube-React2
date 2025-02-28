import React ,{ useContext,createContext } from "react";

// Create a context for the open state
const OpenContext = createContext();

// Custom hook to use the open context
export const useOpen = () => {
    return useContext(OpenContext);
}

export const OpenProvider = ({children,open,inputText}) =>{
    return (
        <OpenContext.Provider value={open}>
            {children}
        </OpenContext.Provider>
    )
}