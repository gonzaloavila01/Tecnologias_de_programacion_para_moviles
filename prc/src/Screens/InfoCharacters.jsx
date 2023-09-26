import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import {
  AntDesign,
  Foundation,
  FontAwesome,
} from "@expo/vector-icons";

export const InfoCaracters = ({ navigation, route }) => {
  const { item } = route.params;

  const [episode, setEpisode] = useState(JSON);

  // Las funciones Async van fuera del useEffect
  const getApiData = async () => {
    try {
      const response = await fetch(item.episode[0]);
      const data = await response.json();
      setEpisode(data);
    } catch (error) {
      console.log("Error", error.toString());
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const StatusCheck = (status) => {
    if (status === "Alive")
      return <FontAwesome name="heartbeat" size={18} color="#3FFF79" />;
    else if (status === "Dead")
      return <Foundation name="skull" size={24} color="#FF5D5D" />;
    else return <FontAwesome name="question" size={20} color="#9e9e9e" />;
  };

  const GenderCheck = (gender) => {
    if (gender === "Male")
      return <FontAwesome name="male" size={20} color="blue" />;
    else if (gender === "Female")
      return <FontAwesome name="female" size={20} color="pink" />;
    else return <AntDesign name="questioncircleo" size={25} color="#9e9e9e" />;
  };

  const typeCheck = (type) => {
    if (type !== "")
      return (
        <View>
          <Text style={styles.labelText}>Type:</Text>
          <Text style={styles.generalText}>{item.type}</Text>
        </View>
      );
  };

  return (
    <View style={styles.container}>
        <Text style={[styles.generalText, styles.NameText]}>{item.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <Image source={{ uri: item.image }} style={styles.imageStyle} />
        <View style={{ flex: 1, paddingLeft: 20 }}>
          <Text style={styles.labelText}>General Info:</Text>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={styles.generalText}>{["Gender: ", item.gender]}</Text>
            {GenderCheck(item.gender)}
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={styles.generalText}>{["Status: ", item.status]}</Text>
            {StatusCheck(item.status)}
          </View>
          <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
            <Text style={styles.generalText}>{["Specie: ", item.species]}</Text>
          </View>
        </View>
      </View>
      {typeCheck(item.type)}
      <View>
        <Text style={styles.labelText}>Origin:</Text>
        <Text style={styles.generalText}>{item.origin.name}</Text>
      </View>
      <View>
        <Text style={styles.labelText}>Last known Location:</Text>
        <Text style={styles.generalText}>{item.location.name}</Text>
      </View>
      <View>
        <Text style={styles.labelText}>First seen in:</Text>
        <Text style={styles.generalText}>{episode.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    gap: 20,
    backgroundColor: "#272b33",
  },
  infoConteiner: {
    gap: 5,
    maxWidth: 200,
  },
  generalText: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
  },
  labelText: {
    fontSize: 20,
    color: "#858587",
    paddingBottom: 5,
    textAlign: "left",
  },
  NameText: {
    fontSize: 30,
    maxWidth: 300,
    textAlign: "center",
    fontWeight: "600",
  },
  imageStyle: {
    width: 150,
    height: 150,
  },
});
