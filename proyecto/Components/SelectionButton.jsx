import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from "react-native";
import { THEME } from '../themes/Colors';


const SelectionButton = ({ label, initialValue, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);

  const toggleSwitch = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    if (onToggle) {
      onToggle(newState);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: "#767577", true: THEME.COLORS.GRAY }}
        thumbColor={isEnabled ? "#00cc00" : THEME.COLORS.GREEN} 
        ios_backgroundColor={THEME.COLORS.GRAY}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: 300,
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 5,
  },
});

export default SelectionButton;
