import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const Theme = ({ children }) => {

    const [theme, setTheme] = useState("primary")

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>{/* { theme: theme, setTheme: setTheme } */}
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme