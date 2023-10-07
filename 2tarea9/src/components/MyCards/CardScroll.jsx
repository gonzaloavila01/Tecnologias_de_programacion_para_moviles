import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Card from './Card';
import { Cards } from '../Constants/Cards';


export default function CardScroll({money, account, color, textColor}) {
  const { themes } = useContext(AppContext);

  const styles = StyleSheet.create({
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: 80,
        borderRadius: 30,
        marginHorizontal: 2.5,
        backgroundColor: themes.SECOND
        },
    });

  return (
      <ScrollView horizontal={true}>
        <TouchableOpacity style={styles.addButton}>
            <Text style={{fontSize: 30, color: themes.TEXT2}}>+</Text>
        </TouchableOpacity>
        {Cards.map((card, index) => (
            <Card
              key={index}
              textColor={card.textColor}
              money={card.money}
              account={card.account}
              color={card.color}
            />
          ))}
      </ScrollView>
  );
}

