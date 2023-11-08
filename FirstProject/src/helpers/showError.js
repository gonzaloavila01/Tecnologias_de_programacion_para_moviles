import { Alert } from "react-native"

export const handleshowErrorr =(error)=>
Alert.alert('Error', error, [{text: 'Aceptar'}])