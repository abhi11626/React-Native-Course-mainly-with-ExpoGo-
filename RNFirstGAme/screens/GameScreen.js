import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import Colors from "../utils/color";
import Ionicons from "@expo/vector-icons/Ionicons";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return rndNum;
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGoBack, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver, guessRounds]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't Lie", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNum = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess,
    );

    setCurrentGuess(newRndNum);
    setGuessRounds((prevRounds) => [newRndNum, ...prevRounds]);

    console.log("Direction:", direction);
    console.log("Current Guess:", currentGuess);
  }
  console.log("Guess Rounds:", guessRounds);
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>

      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{currentGuess}</Text>
      </View>

      <Text style={styles.instructionText}>Higher or Lower?</Text>

      <View style={styles.buttonsContainer}>
        <View style={styles.rowButtons}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            Lower
          </PrimaryButton>

          <PrimaryButton onPress={() => nextGuessHandler("greater")}>
            Higher
          </PrimaryButton>
        </View>

        <View style={styles.backButtonContainer}>
          <PrimaryButton onPress={onGoBack}>Change Number</PrimaryButton>
        </View>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <View style={styles.logItem}>
              <Text style={styles.logText}>
                #{guessRounds.length - itemData.index}
              </Text>

              <Text style={styles.logText}>{itemData.item}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    marginTop: 40,
  },

  numberContainer: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 12,
    padding: 24,
    marginVertical: 30,
    minWidth: 120,
    alignItems: "center",
  },

  numberText: {
    fontFamily: "open-sans-bold",
    fontSize: 36,
    color: Colors.accent500,
  },

  instructionText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "white",
  },

  buttonsContainer: {
    width: "80%",
  },

  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonsContainer: {
    width: "80%",
  },

  listContainer: {
    flex: 1,
    width: "80%",
    marginTop: 20,
  },

  rowButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  backButtonContainer: {
    marginTop: 16,
  },

  logItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginVertical: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,

    backgroundColor: Colors.accent500,
    borderRadius: 12,

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },

  logText: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    color: Colors.primary700,
  },
});
