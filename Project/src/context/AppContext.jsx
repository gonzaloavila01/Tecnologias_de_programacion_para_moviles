import { createContext, useState } from "react";

  const person = {
    Id: 1,
    name: 'Beto',
    lastname: 'Morales',
    age: '23',
    country: 'Mexico',
    city: 'Morelia',
    school: 'ITM',
    isActive: false
  }

export const AppContext = createContext(person)

export const AppContextProvider = ({children}) => {

    const [Persona, setPersona] = useState(person)

    const handleIsActive = () =>{
        setPersona({
            ...Persona,
            isActive: !Persona.isActive
        })   
    }

    const values ={
        Persona,
        handleIsActive
    }

  return (
    <AppContext.Provider value={values}>
        {children}
    </AppContext.Provider>
  )
}
