import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import { THEME } from "../../theme/colors";
import { IconButton } from "../Buttons/IconButton";

export default function HeatherMain(){
    return(
    <View style={styles.totalContainer}>
        <View style={styles.header}>
            <Text style={styles.texto}>Wallet</Text>
            <View style={styles.perfilImagenes}>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name='notifications' size={30} color={THEME.COLORS.BLACK} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconContainer}>
                    <Ionicons name='person-circle' size={30} color={THEME.COLORS.BLACK}/> 
                </TouchableOpacity>     
            </View>
        </View>
        <View style={styles.mainContainer}>
            <View>
                <Text style={styles.budgetText}>$28,000</Text>
                <View style={styles.walletConteiner}>
                    <Text style={styles.walletIdText} >Wallet ID: 4516516135431616</Text>
                    <TouchableOpacity>
                        <Feather name="copy" size={15} color={THEME.COLORS.YELLOW.LIGHT} /> 
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <IconButton name={"arrowdown"} size={30} color={THEME.COLORS.BLACK}/>
                <IconButton name={"arrowup"} size={30} color={THEME.COLORS.BLACK}/>
                <IconButton name={"retweet"} size={30} color={THEME.COLORS.BLACK}/>
                <IconButton name={"plus"} size={30} color={THEME.COLORS.BLACK}/>
            </View>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    totalContainer:{
        //width: 870,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: 50,
    },
    header: {
      width: 400,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between',
    },
    texto:{
        color: THEME.COLORS.ORANGE.LIGHT,
        fontSize: 20,
        fontWeight: 'bold',
    },
    perfilImagenes:{
      flexDirection: 'row',
    },
    iconContainer:{
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: THEME.COLORS.ORANGE.LIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    mainContainer:{
        height: 300,
        justifyContent: 'space-evenly',
        alignContent: 'center',
    },
    budgetText:{
        fontSize: 80,
        color: THEME.COLORS.YELLOW.LIGHT,
        textAlign:'center',
    },
    walletConteiner:{
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    walletIdText:{
        fontSize: 15,
        color: THEME.COLORS.YELLOW.LIGHT, 
        marginRight: 5,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 50,
        //width:300,
    }
  });