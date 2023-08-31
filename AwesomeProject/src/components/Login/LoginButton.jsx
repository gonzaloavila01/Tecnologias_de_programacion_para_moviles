import React from "react";
import { Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { THEME } from "../../theme/colors";

const LoginButton = (props) => (
    <TouchableOpacity style={styles.iconButton}>
      <Image style={styles.image} source={props.imageSource}/>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )

const styles = StyleSheet.create({
  iconButton: {
    height: 40,
    width: 160,
    padding: 5,
    flexDirection: "row",
    borderBlockColor: THEME.COLORS.GRAY,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
});

export default LoginButton;