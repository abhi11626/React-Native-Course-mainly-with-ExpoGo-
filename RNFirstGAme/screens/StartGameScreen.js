import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import { useState } from "react";

import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/color";
import Title from "../components/Title";

function StartGameScreen({ onConfirmInput }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetHandler() {
    setEnteredNumber("");
  }

  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number should be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }

    onConfirmInput(chosenNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Guess My Number</Title>

      <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Enter a Number</Text>

        <TextInput
          style={styles.numberInput}
          keyboardType="number-pad"
          maxLength={2}
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={inputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
          </View>

          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  inputContainer: {
    width: 320,
    maxWidth: "85%",
    padding: 24,
    alignItems: "center",

    backgroundColor: Colors.primary700,
    borderRadius: 16,

    elevation: 8,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },

  instructionText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: Colors.accent500,
    marginBottom: 12,
  },

  numberInput: {
    width: 80,
    height: 70,

    fontFamily: "open-sans-bold",
    fontSize: 36,

    color: Colors.accent500,
    textAlign: "center",

    borderBottomWidth: 2,
    borderBottomColor: Colors.accent500,

    marginVertical: 12,
  },

  buttonsContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 20,
  },

  buttonContainer: {
    flex: 1,
    marginHorizontal: 4,
  },
});
