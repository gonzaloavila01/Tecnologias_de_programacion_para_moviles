import React from "react";
import { Text, View, StyleSheet, Image} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from "../../theme/Colors";

export const Card = ({ imagen, tag, name, precio }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={imagen} />
            </View>
            <View style={styles.textos}>
                <Text style={styles.tag}>{tag}</Text>
                <Text style={styles.name}>{name}</Text>

                <View style={styles.priceContainer}>
                    <MaterialIcons name="monetization-on" size={20} color={THEME.COLORS.YELLOW} />
                    <Text style={styles.precio}>{precio}</Text>
                </View>
            </View>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    cardContainer: {
      height: 350,
      width: 200,
      borderRadius: 20,
      backgroundColor: THEME.COLORS.DARK,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      padding: 30,
    },
    imageContainer: {
      width: 150,
      height: 150,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 20
    },
    textos:{
        justifyContent: 'flex-end',
        gap: 5,
        marginTop: 20
    },
    tag:{
        color: 'gray'
    },
    name:{
        fontWeight: 'bold',
        fontSize: 20
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
    },
  });