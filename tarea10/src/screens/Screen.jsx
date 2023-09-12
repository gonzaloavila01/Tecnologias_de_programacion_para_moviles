import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from "react-native"
import Constants from 'expo-constants';
import { Card } from "../components/Card/Card";
import {AntDesign, Entypo} from '@expo/vector-icons';
import { TagCard } from "../components/TagCard/TagCard";
import { MenuBottom } from "../components/MenuBottom/Menu";
import { THEME } from "../theme/Colors";
import { Products, IMAGE } from "../constants/Products";


export const Screen = () => {
    return(
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <View>
                    <Text style={styles.textHeader}>Discover</Text>
                    <Text style={{ fontSize: 20,}}>your products</Text>
                </View>
                <Image style={styles.headerImage} source={IMAGE}/>
            </View>

            <View style={styles.searchContainer}>
                <View style={styles.search}>
                    <AntDesign name="search1" color={'black'} size={24}/>
                    <TextInput placeholder="Buscar"/>
                </View>
                <TouchableOpacity>
                    <View style={styles.iconContainer}>
                        <Entypo name="sound-mix" size={30} color="black" />
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TagCard tag='Miniso'/>
                <TagCard tag='Neurso'/>
            </ScrollView>

            <Text style={styles.textHeader}>Popular product</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
                {Products.map(({id, imagen, tag, name, precio}) => 
                <View key={id} style={{marginRight: 20}}>
                    <Card imagen={imagen} tag={tag} name={name} precio={precio}/>
                </View>)}

            </ScrollView>
            <MenuBottom/>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Constants.statusBarHeight+10,
        backgroundColor: THEME.COLORS.GRAY.LIGHT,
        justifyContent: 'flex-start',
        justifyContent: 'flex-start',
        width: '100%',
        flex: 1,
        padding: 20,
        gap: 10
    },
    headerContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    headerImage:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight:30
    },
    searchContainer:{
        marginTop: 30,
        flexDirection: 'row',
        alignItems: "center",
        gap: 10
    },
    search: {
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: THEME.COLORS.WHITE,
        height: 50,
        width: 260,
        borderRadius: 20,
        padding: 10,
        gap: 10
    },

    titleText:{
        marginTop: 5,
        marginBottom:5,
        fontSize: 30,
        fontWeight: '900',
    },
    cardContainer:{
        height: 60,
        width: 60,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    iconContainer: {
        marginLeft: 40,
        width: 50, 
        height: 50, 
        borderRadius: 10, 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: THEME.COLORS.YELLOW,
      },
});