import { View, Dimensions, StyleSheet } from "react-native";
import { StyledText } from "../StyledText";
export const LoginHeader = () => {
    return(
        <View style={styles.header}>
        <StyledText
          text={"Sign in to your Account"}
          fontSize={44}
          color={"white"}
          fontWeight="bold"
          marginLeft={20}
        />
        <StyledText
          text={"Sign in to your Account"}
          fontSize={16}
          color={"white"}
          marginLeft={20}
        />
      </View>

    );
}

const { height, width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    header: {
      paddingTop: 50, 
      backgroundColor: "#0c1c2c",
      width: width,
      height: height / 3.5,
      justifyContent: "center",
    },
  });