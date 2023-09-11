import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = (props) =>{
    const { text, backgroundColor,} = props;
        return(
        <TouchableOpacity style={[styles.button, { backgroundColor }]}>
          <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
      )
        }
    
    const styles = StyleSheet.create({
      button: {
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        width: 300,
        height: 60,
        marginVertical: 10,
      },
      buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
      },
    });
    
    export default Button;