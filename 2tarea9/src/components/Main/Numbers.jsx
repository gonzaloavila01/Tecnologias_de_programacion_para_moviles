import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ButtonNumber } from './ButtonNumber'

export const Numbers = () => {
    
    const styles= StyleSheet.create({
        container:{
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5
        },
        rows:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 5
        }
    });
    
  return (
    <View style={styles.container}>
        <View style={styles.rows}>
            <ButtonNumber number='1'/>
            <ButtonNumber number='2'/>
            <ButtonNumber number='3'/>
        </View>
        <View style={styles.rows}>
            <ButtonNumber number='4'/>
            <ButtonNumber number='5'/>
            <ButtonNumber number='6'/>
        </View>
        <View style={styles.rows}>
            <ButtonNumber number='7'/>
            <ButtonNumber number='8'/>
            <ButtonNumber number='9'/>
        </View>
        <View style={styles.rows}>
            <ButtonNumber number='<'/>
            <ButtonNumber number='0'/>
            <ButtonNumber number='.'/>
        </View>
    </View>
  )
}

