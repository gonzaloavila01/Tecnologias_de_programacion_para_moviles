import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { THEME } from '../theme/colors';
import { MaterialIcons } from '@expo/vector-icons';
import WhiteCard from '../components/Second/WhiteCard';


export const Second = () => {
    return(
        <View>
            <View style={styles.container}>
                <Ionicons name="chevron-back" size={30} color="white" />
                <Text style={styles.textHeader}>Withdraw Money</Text>
                <MaterialIcons name="star-outline" size={30} color="white" />
            </View>
            <View style={styles.exchange}>
                <Text style={styles.textExchange}>Exchange</Text>
            </View>
            <WhiteCard></WhiteCard>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        paddingTop: 80,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    exchange:{
        marginTop:60,
        marginHorizontal:15,
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20,
        overflow: 'hidden', 
        backgroundColor: THEME.COLORS.MELON, 
        height: 80,
        justifyContent:'center'
    },
    textHeader:{
        fontSize: 26,
        fontWeight: 'bold',
        color: THEME.COLORS.WHITE,
    },
    textExchange:{
        fontSize: 25,
        color: THEME.COLORS.BROWN,
        paddingLeft: 15,
        paddingBottom: 10,
    }
});

export default Second
