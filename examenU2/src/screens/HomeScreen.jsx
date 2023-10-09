import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Header } from "../components/Header";
import { AntDesign } from '@expo/vector-icons';


export const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Oculta el encabezado de esta pantalla
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.search}>
        <Text style={{ color: '#7c7e89', fontSize: 30 }}>Search</Text>
        <AntDesign name="search1" size={30} color="#7c7e89" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  search: {
    padding: 20,
    margin: 15,
    flexDirection: 'row',
    backgroundColor: '#252837',
    justifyContent: 'space-between',
    height: 80,
    width: 400,
    alignItems: 'center',
    borderRadius: 20,
  },
});
