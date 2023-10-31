import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [counter, setCounter] = useState(0)
  const [newcounter, setNewCounter] = useState(0)

  // const multiplyCounter = () =>{
  //   console.log('counter')
  //   return counter * 2
  // }

  const multiplyCounter =  useMemo(() =>{ //useCallback memoriza una función
    console.log('counter')
    return counter * 2
  }, [counter])

  const sayHello = () =>{
    console.log('SAY HELLO')
  }
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:80}}>{counter}</Text> */}
      <TouchableOpacity>
          <Text style={{fontSize:80}}>Multiply counter : {multiplyCounter} </Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={{borderWidth: 1, borderRadius:10, padding:10}}
        onPress={()=> multiplyCounter()}>
          <Text style={{fontSize:30}}>Multiply</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={{borderWidth: 1, borderRadius:10, padding:10}}
        onPress={()=> setCounter(counter + 1)}>
          <Text style={{fontSize:30}}>Increment by 1</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
