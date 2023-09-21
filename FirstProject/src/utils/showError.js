import { Alert } from "react-native";

// Función para mostrar mensajes de error
export const handleShowError = (error) => {
    Alert.alert('Error', error, [{ text: 'Aceptar' }]);
  };