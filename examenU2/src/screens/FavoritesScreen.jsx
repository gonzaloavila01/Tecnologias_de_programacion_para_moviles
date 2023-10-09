import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const FavoritesScreen = ({navigation}) =>{
    React.useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false, // Oculta el encabezado de esta pantalla
        });
      }, [navigation]);

    return(
        <SafeAreaView>
            <Text>Hola</Text>
        </SafeAreaView>
    )
}