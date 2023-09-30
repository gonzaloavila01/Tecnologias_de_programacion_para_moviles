import React, { useEffect, useState } from "react";
import { FlatList, View, Text, ActivityIndicator, StyleSheet, Image } from "react-native";
import { Card } from "../components/Card";

export const MainScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const res = await fetch('https://gravity-falls-api.vercel.app/api/characters');
        const data = await res.json();
        setCharacters(data);
        await delay(5000);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Card item={item} />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../../assets/GF.png')} />
      </View>
      <View style={styles.cardsContainer}>
        {isFetching ? (
          <View>
            <Text style={{ textAlign: 'center' }}>Cargando</Text>
            <ActivityIndicator size='large' color='#ff0000' />
          </View>
        ) : (
          <FlatList
            data={characters}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={styles.columnWrapper}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} // Clave única
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  logoContainer: {
    paddingTop:40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 70,
    width: 180,
  },
  cardsContainer: {
    paddingHorizontal: 10,
  },
  columnWrapper: {
    flex: 1,
    justifyContent: 'space-around',
    gap: 10,
    marginBottom: 5,
  },
});
