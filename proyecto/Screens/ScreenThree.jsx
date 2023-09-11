import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TextScreens from '../Components/TextScreens';
import Button from '../Components/Button';
import { THEME } from '../themes/Colors';
import { Ionicons } from '@expo/vector-icons';

export const ScreenThree = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Ionicons name="arrow-back" size={35} color={THEME.COLORS.BLACK} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Create new</Text>
        <Text style={styles.title}>account</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.dataContainer}>
        <TextScreens label="Full name" value="Enter your name" />
        <View style={styles.separator}></View>
        <TextScreens label="Email address" value="name@example.com" />
        <View style={styles.separator}></View>
        <TextScreens label="Create password" value="Enter your password" />
      </View>
      <View style={styles.buttonContainer}>
        <Button text="Sign Up!" backgroundColor={THEME.COLORS.ORANGE} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  textContainer: {
    paddingTop: 50,
    width: 300,
    marginBottom: 40,
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
  },
  icon: {
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
