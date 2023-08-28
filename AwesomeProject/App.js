import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableHighlight, Alert } from 'react-native';
import { StyledText } from './src/components/StyledText';
import { CustomText } from './src/components/CustomText';
import { CustomTouchable } from './src/components/CustomTouchable';
import Login from './src/screens/Login';

export default function App() { //Todo es un componente; La funcion se exporta por defecto; Cada componente debe iniciar con letra mayuscula o usar CamelCase
  // return(
  //   <View>
  //     jdvdvkmvkdmkd //Si queremos usar texto debemos poner la etiqueta text
  //   </View>
  // )
  
  return (
    <View style={styles.container }>
      {/* <TouchableHighlight  style={styles.button} onPress={()=> console.log('Press')}>
        <Text style={styles.text}>Hola!</Text>
      </TouchableHighlight >
      <StatusBar style="dark" />
      <CustomTouchable underlayColor='blue' borderColor='lightblue' borderWidth={3} backgroundColor='white' padding={10} color='brown' fontSize={30} borderRadius={20} contenido='Boton' onPress={() => Alert.alert("Boton presionado")}></CustomTouchable>
      <CustomText text='Mi texto' fontSize={52} fontFamily='Cochin' color='red' fontWeight='light' fontStyle='normal' textAlign='center' letterSpacing={3} lineHeight={80} textDecorationLine='line-through'></CustomText> */}
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3DCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'green',
    fontSize: 40
  },
  button:{
    borderWeight: 2,
    padding: 5
  },
  input:{
    borderWidth: 1,
    width: 200,
    height: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
    color: 'red',
    backgroundColor: 'aliceblue'
  }
});