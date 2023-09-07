import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { THEME } from "../../theme/colors";
import { AntDesign } from '@expo/vector-icons';
import Card2 from "./Card2";

const WhiteCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.card1}>
        <View style={styles.leftContainer}>
          <Text style={styles.cardText}>Current Wallet Balance</Text>
          <Text style={{
            paddingTop:10,
            fontSize: 35,
            fontWeight: 'bold',
          }}>
            $23,867
          </Text>
          <View style={styles.line} /> 
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.iconBackground}>
            <AntDesign name="plus" size={24} color={THEME.COLORS.ORANGE}/>
          </View>
        </View>
      </View>
      <View style={styles.card2}>
        <Text style={styles.cardText}>Withdraw Amount</Text>
        <Text>
          <Text style={{
            color: THEME.COLORS.ORANGE,
            fontSize:50,
            fontWeight: 'bold',
          }}>
            $19,29.
          </Text>
          <Text style={{
            color: THEME.COLORS.MELON,
            fontSize: 50,
            fontWeight: 'bold',
          }}>00</Text>
        </Text>
      </View>
      <Card2 />
      <View style={styles.bottom}>
        <View style={styles.icon1Background}>
          <AntDesign name="arrowright" size={24} color={THEME.COLORS.ORANGE} />
        </View>
        <Text style={styles.textBottom}>Swipe to Withdraw</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: -15,
    marginHorizontal: 3,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: THEME.COLORS.WHITE,
    height: 685,
  },
  card1: {
    paddingTop: 30,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {
    flex: 1,
  },
  rightContainer: {
    marginLeft: 10,
  },
  cardText: {
    fontSize: 20,
    color: THEME.COLORS.GRAY,
  },
  iconBackground: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: THEME.COLORS.CREMA,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    paddingTop: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    margin: 30,
    height: 80,
    paddingHorizontal: 10,
    backgroundColor: THEME.COLORS.ORANGE,
    borderRadius: 40,
    alignItems: 'center',
  },
  icon1Background: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBottom: {
    fontSize: 18,
    color: THEME.COLORS.WHITE,
    marginLeft: 50,
  },
  line: {
    borderBottomWidth: 0.2,
    borderBottomColor: THEME.COLORS.GRAY, 
    marginTop: 30, 
  },
});

export default WhiteCard;
