/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import Content from "../src/components/Content";


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState("light");

    const clickTheme = () => {
        setTheme((prev) => prev === "light" ? "dark" : "light");
    }

    return(
        <ThemeContext.provider value={{ theme, clickTheme}}>
            {children}
        </ThemeContext.provider> 
        <Content />   
    );

};


export default ThemeContext;