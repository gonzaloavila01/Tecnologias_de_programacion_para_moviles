import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodsType = ({ food }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{food}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#black',
    width: 140,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
    marginRight: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: 'black',
  },
});

export default FoodsType;
