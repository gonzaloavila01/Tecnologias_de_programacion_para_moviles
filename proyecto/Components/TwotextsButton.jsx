import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../themes/Colors";

const TwoTextButton = (props) =>{
    const { text1, text2} = props;
        return(
        <TouchableOpacity style={styles.button}>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.buttonText1}>{text1}</Text>
                <Text style={styles.buttonText2}>{text2}</Text>
            </View>
        </TouchableOpacity>
      )
        }
    
    const styles = StyleSheet.create({
        button: {
            backgroundColor: THEME.COLORS.WHITE,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
            width: 300,
            height: 60,
            marginVertical: 10,
            borderColor: "grey",
            borderWidth: 0.2,
          },
          buttonText1: {
            color: "black",
            fontSize: 16,
            fontWeight: "600",
          },
          buttonText2: {
            color: "orange",
            fontSize: 16,
            fontWeight: "600",
          },
    });
    
    export default TwoTextButton;