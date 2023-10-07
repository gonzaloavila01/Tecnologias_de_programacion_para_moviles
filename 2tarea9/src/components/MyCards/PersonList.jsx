import React, { useContext } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import Person from './Person';
import { Contactos } from '../Constants/Contacts';
import { Feather } from '@expo/vector-icons';
import { AppContext } from '../../context/AppContext';

export default function PersonList() {
    const { themes } = useContext(AppContext);

    const styles = StyleSheet.create({
        container: {
            backgroundColor: themes.FIRST,
            padding: 20,
            borderRadius: 40,
            height: 300,
            width: 400,
            marginTop: 20,
        },
        addButton: {
            alignItems: 'center',
            justifyContent: 'center',
            height: 100,
            width: 80,
            borderRadius: 30,
            marginHorizontal: 2.5,
            backgroundColor: '#EAF984',
        },
        personContainer: {
            marginBottom: 10,
            flexDirection: 'row', // Alineación horizontal de elementos en Person
            alignItems: 'center', // Alineación vertical de elementos en Person
        },
    });

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                <Text style={{ fontSize: 20, color: themes.TEXT1 }}>My contacts</Text>
                <Feather name="search" size={24} color={themes.TEXT1} />
            </View>
            <FlatList
                data={Contactos}
                renderItem={({ item: { name, image, account } }) => (
                    <View style={styles.personContainer}>
                        <Person name={name} image={image} account={account} />
                    </View>
                )}
                keyExtractor={(item) => item.id}
                style={{ height: 300 }}
                contentContainerStyle={{
                    justifyContent: 'center', // Centrar verticalmente los elementos
                    alignItems: 'center',
                }}
            />
        </View>
    );
}
