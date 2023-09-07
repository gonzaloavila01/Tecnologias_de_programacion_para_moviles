import { View, StyleSheet, Image, Text } from 'react-native';
import { BinanceLogo, BitcoinLogo, EthereumLogo } from '../../assets';
import { THEME } from '../../theme/colors';

export const CurrencyList=({name, conversion, value, dollars, img, color})=>{
    return(
        <View style={styles.container}>
            <View style={{backgroundColor:color, padding:10, borderRadius:50}}>
                <Image source={img} style={styles.image}/>
            </View>
            <View>
                <Text style={styles.titulo}>{name}</Text>
                <Text>{conversion}</Text>
            </View>
            <View>
                <Text style={styles.titulo}>{value}</Text>
                <Text>{dollars}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderRadius: 60,
      paddingVertical: 15,
      marginHorizontal:10,
    },
    image:{
        width: 30,
        height: 30,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 5,
    },
});