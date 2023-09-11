import { StyleSheet, Text, View } from 'react-native';
import { ScreenOne } from './Screens/ScreenOne';
import { ScreenTwo } from './Screens/ScreenTwo';
import { ScreenThree } from './Screens/ScreenThree'

  export default function App() {
    return (
      <View style={styles.container}>
        {/* <ScreenOne></ScreenOne> */}
        <ScreenTwo></ScreenTwo> 
        {/* <ScreenThree></ScreenThree> */}
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
