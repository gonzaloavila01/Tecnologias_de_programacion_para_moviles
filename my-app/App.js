import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, TouchableOpacity, Text, View, TextInput } from 'react-native';


// Los hooks empiezan con la palabra use

export default function App() {

  // const [state, setState] = useState(1)

  // console.log(state, '***STATE 0***')
  // console.log(setState, '***STATE 1***')

// function sumValue(value){
//   setState(state + value)
// }

  const [inputValue, setInputValue] = useState('')

  return (
    <SafeAreaView>
      {/* <Text style={{fontSize:40}}>{JSON.stringify(state)}</Text>
      <TouchableOpacity onPress={() => sumValue(5)} style={{borderWidth: 1}}>
        <Text>Change Value</Text>
      </TouchableOpacity> */}
      <TextInput 
        value={inputValue} 
        onChangeText={(value) => setInputValue(value)}
        style={{borderWidth: 1, paddingHorizontal: 10, fontSize: 20}}/>
        <Text style={{fontSize: 50}}>{inputValue}</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

