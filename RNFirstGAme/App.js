import { StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { useFonts } from "expo-font";

import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./utils/color";

export default function App() {
  const [inputNumber, setInputNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  function onConfirmInputHandler(number) {
    setInputNumber(number);
    setGameIsOver(false);
  }

  function onStartHandler() {
    setInputNumber(null);
    setGameIsOver(false);
  }

  function onGameOverHandler(numberOfRounds) {
    setGuessRounds(numberOfRounds);
    setGameIsOver(true);
  }

  function onStartNewGameHandler(numberOfRounds) {
    setInputNumber(null);
    setGuessRounds(0);
    setGameIsOver(false);
  }

  let screen = <StartGameScreen onConfirmInput={onConfirmInputHandler} />;

  if (inputNumber) {
    screen = (
      <GameScreen
        userNumber={inputNumber}
        onGoBack={onStartHandler}
        onGameOver={onGameOverHandler}
      />
    );
  }

  if (gameIsOver && inputNumber) {
    screen = (
      <GameOver
        userNumber={inputNumber}
        onStartNewGame={onStartNewGameHandler}
        roundsNumber={guessRounds}
      />
    );
  }
  return (
    <SafeAreaView style={styles.rootScreen}>
      <LinearGradient
        colors={[Colors.primary700, Colors.accent500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/background.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
