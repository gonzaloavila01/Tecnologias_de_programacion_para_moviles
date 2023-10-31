import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Constants from "expo-constants";
import { Button } from "./Number";
import { useReducer } from "react";

const CALCULATOR_TYPES = {
  SELECT_NUMBER: "SELECT_NUMBER",
  SELECT_OPERATOR: "SELECT_OPERATOR",
  CALCULATE: "CALCULATE",
  CLEAR: "CLEAR", 
};

const initialState = {
  displayNumber: "0",
  operator: "",
  previousNumber: "0",
  currentNumber: "0",
};

function reducer(state, action) {
  switch (action.type) {
    case CALCULATOR_TYPES.SELECT_NUMBER:
      const newCurrentNumber = state.currentNumber === "0" ? action.payload : state.currentNumber + action.payload;
      return {
        ...state,
        currentNumber: newCurrentNumber,
        displayNumber: newCurrentNumber,
      };
    case CALCULATOR_TYPES.SELECT_OPERATOR:
      return {
        ...state,
        operator: action.payload,
        previousNumber: state.currentNumber,
        currentNumber: "0",
      };
    case CALCULATOR_TYPES.CALCULATE:
      let result = 0;
      switch (state.operator) {
        case "*":
          result = parseFloat(state.previousNumber) * parseFloat(state.currentNumber);
          break;
        case "-":
          result = parseFloat(state.previousNumber) - parseFloat(state.currentNumber);
          break;
        case "+":
          result = parseFloat(state.previousNumber) + parseFloat(state.currentNumber);
          break;
        case "/":
          result = parseFloat(state.previousNumber) / parseFloat(state.currentNumber);
          break;
        default:
          break;
      }
      return {
        ...state,
        displayNumber: result.toString(),
        currentNumber: result.toString(),
      };
    case CALCULATOR_TYPES.CLEAR:
      return {
        ...state,
        displayNumber: "0", 
        currentNumber: "0",
      };
    default:
      return state;
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSelectNumber = (number) => {
    dispatch({ type: CALCULATOR_TYPES.SELECT_NUMBER, payload: number });
  };

  const handleSelectOperator = (operator) => {
    dispatch({ type: CALCULATOR_TYPES.SELECT_OPERATOR, payload: operator });
  };

  const handleCalculate = () => {
    dispatch({ type: CALCULATOR_TYPES.CALCULATE });
  };

  const handleClear = () => {
    dispatch({ type: CALCULATOR_TYPES.CLEAR });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{state.displayNumber}</Text>
      <View style={styles.row}>
        <Button text={"7"} rol={"number"} onPress={() => handleSelectNumber("7")} />
        <Button text={"8"} rol={"number"} onPress={() => handleSelectNumber("8")} />
        <Button text={"9"} rol={"number"} onPress={() => handleSelectNumber("9")} />
        <Button text={"+"} rol={"operator"} onPress={() => handleSelectOperator("+")} />
      </View>
      <View style={styles.row}>
        <Button text={"4"} rol={"number"} onPress={() => handleSelectNumber("4")} />
        <Button text={"5"} rol={"number"} onPress={() => handleSelectNumber("5")} />
        <Button text={"6"} rol={"number"} onPress={() => handleSelectNumber("6")} />
        <Button text={"-"} rol={"operator"} onPress={() => handleSelectOperator("-")} />
      </View>
      <View style={styles.row}>
        <Button text={"1"} rol={"number"} onPress={() => handleSelectNumber("1")} />
        <Button text={"2"} rol={"number"} onPress={() => handleSelectNumber("2")} />
        <Button text={"3"} rol={"number"} onPress={() => handleSelectNumber("3")} />
        <Button text={"*"} rol={"operator"} onPress={() => handleSelectOperator("*")} />
      </View>
      <View style={styles.row}>
        <Button text={"C"} rol={"operator"} onPress={handleClear} /> 
        <Button text={"0"} rol={"number"} onPress={() => handleSelectNumber("0")} />
        <Button text={"/"} rol={"operator"} onPress={() => handleSelectOperator("/")} />
        <Button text={"="} rol={"operator"} onPress={handleCalculate} />
      </View>
      <StatusBar style="light" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 50
  },
  row: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  text: {
    paddingEnd: 30,
    alignSelf: 'flex-end',
    fontSize: 80,
    color: 'white',
    fontWeight: "400",
  },
});
