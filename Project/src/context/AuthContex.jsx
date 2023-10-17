import { createContext, useEffect, useState } from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext =  createContext()

export const AuthContextProvider =({children})=>{
    const [user, setUser] = useState('')

    useEffect(() => {
        const getUser= async () => {
            try {
                const currentUser =  await AsyncStorage.getItem('user')
                console.log(currentUser)
                
                if(currentUser){
                    setUser(currentUser)
                }

            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])
    
    const handleLogin = async (username, password)=>{
        if(username==='Beto' && password ==='123'){
            setUser(username)
            await AsyncStorage.setItem('user', username)
            return true
        }
        return false
    }
    const handleLogout = async() =>{
        await AsyncStorage.removeItem('user')
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