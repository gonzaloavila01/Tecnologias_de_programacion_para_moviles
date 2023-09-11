import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../Components/Button";
import { THEME } from "../themes/Colors";
import TwoTextButton from "../Components/TwotextsButton";

export const ScreenOne = () =>{
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.subtitle}>Sign in or create a new account</Text>
        <Image
          source={require('../assets/globo-aerostatico.png')}
          style={styles.image}
        />
        <Button text="Go to Sign In" backgroundColor={THEME.COLORS.ORANGE}/>
        <TwoTextButton
          text1="Not account yet?"
          text2=" Sign up"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.WHITE,
    paddingVertical: 40
  },
  title: {
    fontSize: 50,
    fontWeight: "700",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "200",
    color: THEME.COLORS.GRAY,
  },
  image: {
    width: 350,
    height: 350,
    marginVertical: 40,
  }
});
