import React, { useState, useEffect} from "react";
import { Button, Modal, Text, View, StyleSheet, Switch, ActivityIndicator, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
//import { useState } from "react";

export const HomeScreen = ({}) =>{

    const navigation = useNavigation()
    const [inputValue, setInputValue] = useState('')
    const [characters, setCharacters] = useState([])
    const [filteredCharacters, setFilteredCharacters] = useState([])

    // useEffect ( ()=> {
    //     navigation.setOptions({
    //         title: 'Home from Component', 
    //         headerSearchBarOptions: {
    //             placeHolder: 'hello',
    //         }
    //     })
    // },  [navigation])

    useEffect( () => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character')
                const data =  await res.json()
                setCharacters(data.results)
                setFilteredCharacters(data.results)
            } catch (error) {
                console.log(error)
            }
        }

    fetchData()
    },[])

    const filterData = (value) => {
        if (value){
            const filteredData = characters.filter(characters => characters.name.includes(value))
            setFilteredCharacters(filteredData)
        }else{
            setFilteredCharacters(characters)
        }
    }

    return(
        <View style={[styles.modal]}>
            <TextInput 
                value={inputValue}
                onChangeText={(e) => {setInputValue(e), filterData(e)}}
                style = {{paddingHorizontal:10, borderWidth: 1, borderColor: 'black', color:'black', paddingVertical:10 }}
            />
            {filteredCharacters.map((character) =>{
                return(
                    <View key={character.id}>
                        <Text>Name: {character.name}</Text>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    modal:{
        flex: 1,
    }, 
})