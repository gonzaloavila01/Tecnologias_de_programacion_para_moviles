import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Circle from "../Buttons/Circle";
import { Ionicons, Feather } from '@expo/vector-icons';

const Card2 = () => {
    return (
        <View style={styles.gridContainer}>
            <View style={styles.row}>
                <Circle>
                    <Text style={styles.text}> 1 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 2 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 3 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 4 </Text>
                </Circle>
            </View>
            <View style={styles.row}>
                <Circle>
                    <Text style={styles.text}> 5 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 6 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 7 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 8 </Text>
                </Circle>
            </View>
            <View style={styles.row}>
                <Circle>
                    <Ionicons name="reload" size={24} color="black" />
                </Circle>
                <Circle>
                    <Text style={styles.text}> 9 </Text>
                </Circle>
                <Circle>
                    <Text style={styles.text}> 0 </Text>
                </Circle>
                <Circle>
                    <Feather name="x" size={24} color="black" />
                </Circle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    gridContainer: {
        paddingTop: 40,
        flexDirection: 'column', 
    },
    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 5, 
        paddingHorizontal: 30, 
    },
    text: {
        fontSize: 30,
    },
});

export default Card2;
