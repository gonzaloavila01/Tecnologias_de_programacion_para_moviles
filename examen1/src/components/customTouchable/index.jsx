import { TouchableHighlight, Text } from "react-native";

export const CustomTouchable = ({ borderRadius, contenido, onPress, fontSize, color, backgroundColor, padding, borderWidth, borderColor, underlayColor   }) => {
  return (
    <TouchableHighlight underlayColor={underlayColor} onPress={onPress} style={{ borderRadius, backgroundColor, padding, borderWidth, borderColor }}>
      <Text style={{fontSize, color}}>{contenido}</Text>
    </TouchableHighlight>
  );
};