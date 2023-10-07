import { createContext, useState } from "react";

export const AuthContext =  createContext()

export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState('')

    const handleLogin = (username, password)=>{
        if(username==='Gonzalo' && password ==='123'){
            setUser(username)
        return true
        }
        return false
    }
    const handleLogout = () =>{
        setUser('')
    }

    const values= [
        user, 
        handleLogin, 
        handleLogout
    ]
    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}