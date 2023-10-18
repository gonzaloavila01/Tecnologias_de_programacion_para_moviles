import {StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';



export default function SignUpScreen({route}) {
  const {canGoBack, goBack} = useNavigation()



  return (
      <View style={styles.container}> 


        <TouchableOpacity style={{width: '85%'}} onPress={() => goBack()}>
            <AntDesign name="arrowleft" size={24} color="gray" />
        </TouchableOpacity>


        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold', fontSize: 25, color: '#253861'}}>Sign Up</Text>
        </View>

        <View style={{ flexDirection: 'row', width: '80%'}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={{color: '#20B0B0', textDecorationLine: 'underline'}}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>Name</Text>
          <TextInput
            placeholder='Enter your name'
            style={styles.input}
          />
        </View>

        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>Email</Text>
          <TextInput
            placeholder='Enter your email'
            style={styles.input}
          />
        </View>

        <View style={{width: '80%'}}>
          <Text style={{fontWeight: 'bold'}}>Password</Text>
          <TextInput
            placeholder='Enter your password'
            style={styles.input}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.login}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', width: '80%', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Text>By signing up, you are agreeing to our </Text>
          <TouchableOpacity>
            <Text style={{color: '#20B0B0', textDecorationLine: 'underline'}}>Terms of Service</Text>
          </TouchableOpacity>
          <Text> and </Text>
          <TouchableOpacity>
            <Text style={{color: '#20B0B0', textDecorationLine: 'underline'}}>Privace Policy.</Text>
          </TouchableOpacity>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '80%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60
  },
  image: {
    height: 300,
    width: '100%',
    overflow: 'hidden', 
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  input: {
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 15,
    height: 50, 
    width: '100%',
    borderColor: 'gray'
  },
  login: {
    backgroundColor: '#20B0B0',
    borderRadius: 50,
    paddingHorizontal: 120,
    paddingVertical: 15
    },
});