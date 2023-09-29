
import { View, Text, StyleSheet, Image} from "react-native";
import { THEME } from "../../theme/Colors";
import { Button } from "../components/Button";

export const MainScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <View style= {{justifyContent: 'center', alignItems:'center'}}>
                <Text style={styles.title}>Play and Win!</Text>
                <Text style={styles.subtitle}>Game for anyone who likes to try luck at guessing numbers</Text>
            </View>
            <Image source={require('../../assets/Loteria.png')} style={styles.image}/>
            <Button text='Get Started' buttonColor={THEME.COLORS.ORANGE} textColor='white' onPress={() => navigation.navigate('Second')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: THEME.COLORS.GREEN,
        paddingHorizontal: 10, 
        paddingVertical: 20
    },
    title: {
        fontFamily: 'System',
        fontSize: 50, 
        fontWeight: '700',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle:{
        fontWeight: '500',
        color: '#71a592',
        textAlign: 'center',
        maxWidth: 260,
        fontSize: 17,
        
    },
    image:{
        height: 460,
        width: 400,
    },
})