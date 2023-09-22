import { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList} from "react-native";

export const CharactersScreen = () =>{

    const [input, setInput] = useState('')
    const [input2, setInput2] = useState('')

    /*useEffect(() => {
        console.log("Valor input 1", input)

        /*return () =>{ // * La función de return se activa cuando se desmonta un componente
            console.log('unmounted') 
        }

    }, [input])*/// * Con el arreglo vacío se ejecuta solamente cuando el componente se monta
                // Si se pasas parametros en el arreglo, el useEffect se utiliza cada que se actualiza dicho parámetro
    
    const [characters, setCharacters] = useState([])

    // Las funciones Async van fuera del useEffect
    const getApiData = async () =>{
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data)
            //console.log(data.results[0].name)
        } catch (error) {
            console.log('Salio mal', error)
        }
    }

    useEffect(() =>{
        getApiData()
    },[])

    return(
        <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
            <Text style={{fontSize: 40, fontWeight: '600'}}>Characters</Text>
            <FlatList
                data={characters}
                renderItem={({item}) => {
                    return(
                        <View>
                            <Text style={{fontSize: 20}}>{item.id}</Text>
                            <Text style={{fontSize: 20}}>{item.name}</Text>
                            <Text style={{fontSize: 20}}>{item.gender}</Text>
                        </View>
                    )
                }}
            />
        </View>
    )
}