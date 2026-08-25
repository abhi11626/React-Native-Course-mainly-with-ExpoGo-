import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/Title";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../utils/color";
import { useState } from "react";

function GameOver({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.png")} style={styles.image} />
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
      </View>

      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },

  resultContainer: {
    marginVertical: 24,
    padding: 20,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.08)",
    width: "90%",
  },

  resultText: {
    fontFamily: "open-sans",
    fontSize: 18,
    color: "white",
    textAlign: "center",
    lineHeight: 28,
  },

  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    fontSize: 20,
  },

  imageContainer: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: "hidden",
    marginVertical: 24,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
