import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { StyledText } from './src/componentes/StyledText';

export default function App() { //Todo es un componente; La funcion se exporta por defecto; Cada componente debe iniciar con letra mayuscula o usar CamelCase
  // return(
  //   <View>
  //     jdvdvkmvkdmkd //Si queremos usar texto debemos poner la etiqueta text
  //   </View>
  // )
  return (
     <View style={styles.container}>
       <StyledText text='Personalizado' fontSize={40} fontWeight='bold'/>
       <StyledText text='Personalizado 2' fontSize={10} />
       <TouchableOpacity style={styles.button} onPress={() => console.log('Press')}>
        <Text>Button</Text>
       </TouchableOpacity>
       <StatusBar style="auto" />
     </View>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46ECF7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 3,
    padding: 5
  }
});
