import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function CharacterScreen() {
    const[input, setInput] = useState('')
    const[input2, setInput2] = useState('')

    // Se ejecuta cada que se actualice un estado, en el arreglo se especifica que useState son los que sí llaman a este
    useEffect(() => {
        console.log('Valor del input 1: '+input)
        setInterval(()=> {
            console.log()
        }, 1000)

        // addEventListener('scroll', () => console.log(0))

    // Esto se muestra cuando se desmonta 
        return () => {
            console.log('Dismounting')
            clearInterval()
            // removeEventListener('scroll')
        }

    }, [input])

  return (
    <View>
        <TextInput
            onChangeText={(value) => setInput(value)}
            style={{borderWidth:1, fontSize: 20, padding:20}}
        />
        <Text>{input}</Text>
        <Text>****************************************************</Text>
        <TextInput
            onChangeText={(value) => setInput2(value)}
            style={{borderWidth:1, fontSize: 20, padding:20}}
        />
        <Text>{input2}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});