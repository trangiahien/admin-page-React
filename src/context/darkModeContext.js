import { createContext, useContext, useReducer } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkMode: false
}

export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
    const [stase, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

    return (
        <DarkModeContext.Provider value={{ darkMode: stase.darkMode, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
}