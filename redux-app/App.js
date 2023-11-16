import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Provider} from 'react-redux';
import { store } from './src/store';
import Counter from './src/counter';

export default function App() {
  // const dispatch = useDispatch()

  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
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
