import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { THEME } from "../../theme/colors";

const Circle = ({ children }) => {
  return <TouchableOpacity style={styles.button}>{children}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: THEME.COLORS.WHITE,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 0.2,
    borderColor: THEME.COLORS.GRAY,
  },
});

export default Circle;