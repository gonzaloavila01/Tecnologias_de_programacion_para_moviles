import React from "react";
import { ImageBackground, View, StyleSheet, Text } from "react-native";

export const Card = ({ item }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: item.image }} style={styles.image}>
        <View style={styles.textHolder}>
          <Text style={styles.nameText}>{item.name}</Text>
          {/* <Text style={{fontSize:10}}>{item.quote}</Text> */}
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 180,
    height: 200,
    justifyContent: "flex-end",
  },
  textHolder: {
    backgroundColor: "#e28743",
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  nameText: {
    color: "black",
    fontWeight: '600',
    fontSize: 16,
    textAlign: "center",
  },
});
