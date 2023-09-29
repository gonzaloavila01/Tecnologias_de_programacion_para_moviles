
import { View, Text, StyleSheet} from "react-native";
import { THEME } from "../../theme/Colors";
import { Button } from "../components/Button";
import { Number } from "../components/Number";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { Octicons } from '@expo/vector-icons';

export const SecondScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            
            <View>
                <Header/>
            </View>

            <View style={styles.bodyContainer}>   
                <View style= {styles.ticketContainter}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
                        <Text style={styles.ticketTittle}>Ticket 1</Text>
                        <Octicons name="sync" size={24} color="grey"/>
                    </View>
                    <View style={{flexDirection: 'row', gap: 5}}>
                        <Number text='1' />
                        <Number text='7' />
                        <Number text='14' />
                        <Number text='16' />
                        <Number text='19' />
                    </View>

                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingVertical: 4, paddingHorizontal: 15}} >
                    <Card text='One Time bet' isEnabled/>
                    <Card text='Subscription' />
                </ScrollView>
                <Button text='Watch Results' buttonColor={THEME.COLORS.GREEN} textColor='white'/>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: THEME.COLORS.CREAM,
        paddingHorizontal: 0, 
        paddingVertical: 20,
        paddingTop: 50,
    },
    bodyContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        flex: 1,
    },
    ticketContainter:{
        backgroundColor: THEME.COLORS.GREEN,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,
        gap: 20,
    },
    ticketTittle:{
        fontSize: 20, 
        color: 'white',
        textAlign: 'left',
        marginBottom: 10,
    },
    description:{
        color: 'white',
        textAlign: 'center',
        maxWidth: 250,
        
    },
    
})