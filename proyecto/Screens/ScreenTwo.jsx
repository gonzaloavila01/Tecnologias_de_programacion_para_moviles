import React from "react";
import { View, Text, StyleSheet } from "react-native";
import TextScreens from "../Components/TextScreens";
import Button from "../Components/Button";
import { THEME } from "../themes/Colors";
import SelectionButton from "../Components/SelectionButton";
import { Ionicons } from '@expo/vector-icons';

export const ScreenTwo = () => {
  return (
    <View style={styles.container}>
      <View  style={styles.icon}>
        <Ionicons name="arrow-back" size={35} color={THEME.COLORS.BLACK} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.title}>back!</Text>
        <View style={styles.line}>
          
        </View>
      </View>
      <View style={styles.dataContainer}>
        <TextScreens label="Email" value="name@example.com" />
        <View style={styles.separator}></View>
        <TextScreens label="Password" value="Enter your password" />
        <View style={styles.separator}></View>
        <SelectionButton label="Remember me" initialValue={false} />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Sign In!" backgroundColor={THEME.COLORS.ORANGE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40
  },
  textContainer: {
    paddingTop: 50,
    width: 300,
    marginBottom: 40,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
  },
  icon:{
    position: 'absolute', 
    top: 80,
    left: 60, 
  },
  line: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: THEME.COLORS.ORANGE,
    height: 8,
    width: 30,
    marginBottom: 10,
    borderRadius: 20,
  },
  dataContainer: {
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  separator: {
    marginBottom: 30, 
  },
  buttonContainer: {
    paddingTop: 60, 
  },
});
