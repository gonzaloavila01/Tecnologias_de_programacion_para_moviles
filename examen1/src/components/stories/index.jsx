import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { IMAGE } from '../../constants'; // Asegúrate de que la importación de la imagen sea correcta

export const Stories = () => {
  return (
    <View>
      <Text>Stories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.content}>
          <ImageBackground source={IMAGE} style={styles.backgroundImage}>
            <AntDesign name="plus" size={60} color="black" />
          </ImageBackground>
          <Image style={styles.image} source={IMAGE} />
          <Image style={styles.image} source={IMAGE} />
          <Image style={styles.image} source={IMAGE} />
          <Image style={styles.image} source={IMAGE} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 30,
  },
  content: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backgroundImage: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 30,
  },
});
