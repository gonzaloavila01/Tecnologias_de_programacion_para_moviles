import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Person = ({ name, lastName, index }) => {
  return (
    <View style={styles.container}>
      {index === 0 && (
        <View style={styles.container1}>
          <Text style={styles.encabezado}>Nombre</Text>
          <Text style={styles.encabezado}>Apellido</Text>
        </View>
      )}
      <View style={styles.container2}>
        <Text style={[styles.datos, index === 0 && styles.primerDato]}>{name} </Text>
        <Text style={[styles.datos, index === 0 && styles.primerDato]}>{lastName} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  container1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 2,
    borderColor: "#0605E1",
    paddingBottom: 2,
  },
  container2: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 2,
    justifyContent: "space-between",
  },
  encabezado: {
    fontSize: 25,
    color: "#000000",
    fontWeight: "bold",
  },
  datos: {
    fontSize: 20,
    color: "#0605E1",
    fontWeight: "bold",
  },
  primerDato: {
    marginTop: 5, 
  },
});

export default Person;
