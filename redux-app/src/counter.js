import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const incrementValue = () => dispatch(increment())
  const decrementValue = () => dispatch(decrement())
  return (
      <View style={styles.container}>
        <Text style={{fontSize:30, fontWeight: 'bold'}}>Counter value: {count}</Text>
        <TouchableOpacity  onPress={incrementValue}>
          <Text style={{fontSize:30}}>Increment by one</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={decrementValue}>
          <Text style={{fontSize:30}}>Decrement by one</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
    </View>
  );
}