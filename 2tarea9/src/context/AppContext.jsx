import React, { useState, createContext } from 'react'
import { THEME } from '../theme/colors'

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {

    const[themes, setTheme] = useState(THEME.MODES.DARK)

    const toggleTheme = () => {
        setTheme((prevTheme) =>
        prevTheme === THEME.MODES.DARK ? THEME.MODES.BRIGHT : THEME.MODES.DARK)
    }

    return(
        <AppContext.Provider value={{ themes, toggleTheme }}>
        {children}
      </AppContext.Provider>
    )
}