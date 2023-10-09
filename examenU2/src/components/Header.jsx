import React from 'react'
import { StyleSheet, View, Text, Image} from 'react-native'



export const Header = () => {
  const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        width: '100%'
    },
    image:{
        width: 55,
        height: 55,
        borderRadius: 50,
      },
});

  return (
    <View style={styles.container}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 24}}>SnapSync</Text>
        <Image style={styles.image} source={require('../../assets/memoji.png')}/>
    </View>
  )
}

