import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { THEME } from "../../theme/colors";
import { MenuButton } from "../Buttons/MenuButton";
import { FolderButton } from "../Buttons/FolderButton";
import { CURRENCYS } from "../../currency";
import { CurrencyList } from "../FlatListStyles/CurrencyList";


export default function ContentMain(){
    return(
        <View style={styles.totalContainer}>
            
            <View style={styles.folder}>
                <FolderButton text={'My Assets'} backgroundColor={THEME.COLORS.WHITE} color={THEME.COLORS.BLACK}/>
                <FolderButton text={'My Transactions'} backgroundColor={THEME.COLORS.ORANGE1.DARK} color={THEME.COLORS.ORANGE1.LIGHT}/>
            </View>

            <View style={styles.card}>
                <FlatList data={CURRENCYS} style={styles.list} 
                    renderItem={({item: {name, conversion, value, dollars, img, color}, index})=>
                        <CurrencyList name={name} conversion={conversion} value={value} dollars={dollars} img={img} index={index} color={color}/>
                    }
                    ItemSeparatorComponent={<View /*style={styles.separador}*/></View>}
                    keyExtractor={({id}) => id}
                />
                <View style={styles.menu}>
                    <MenuButton name={'home'} size={40} color={THEME.COLORS.BLACK} text={'Home'}/>
                    <MenuButton name={'package'} size={40} color={THEME.COLORS.BLACK} text={'Wallet'}/>
                    <MenuButton name={'pie-chart'} size={40} color={THEME.COLORS.BLACK} text={'Charts'}/>
                    <MenuButton name={'settings'} size={40} color={THEME.COLORS.BLACK} text={'Settings'}/>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    totalContainer: {
      //backgroundColor: THEME.COLORS.WHITE,
      borderRadius:20,
    },
    folder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    card: {
        backgroundColor: THEME.COLORS.WHITE,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        borderTopRightRadius:20,
    },
    list:{
        marginVertical: 10,
        height:300,
        borderBottomColor: '#D1D1D1',
        borderBottomWidth:1,
        paddingVertical: 10,
    },
    menu:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginVertical: 15,
    },
  });