import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList} from "react-native";
import { Characters } from "../Card/Characters";

export const CharactersScreen = ({navigation}) =>{

    const [characters, setCharacters] = useState([])

    const getApiData = async () =>{
        try {
            const response = await fetch('https://rickandmortyapi.com/api/character')
            const data = await response.json()
            setCharacters(data.results)
            //console.log(data.results[0].name)
        } catch (error) {
            console.log('Salio mal', error)
        }
    }

    useEffect(() =>{
        getApiData()
    },[])

    return(
        <View style={styles.container}>
            <FlatList 
                data={characters}
                renderItem={({item}) => {
                    return(
                        <Characters item={item} navigation={navigation}/>
                    )
                }}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#272b33',
        paddingHorizontal: 10, 
        paddingVertical: 20,
    },
    tittle: {
        paddingTop: 20,
        fontSize: 40, 
        fontWeight: '600',
        color: 'white',
        marginBottom: 30,
    }
})