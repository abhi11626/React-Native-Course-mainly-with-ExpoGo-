import { Pressable, Text, View, StyleSheet } from "react-native";

import { Colors } from "../constants/style";

function Button({ onPress, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.buttonOuterContainer,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.buttonInnerContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 10,
    overflow: "hidden",
    marginHorizontal: 8,
  },

  pressed: {
    opacity: 0.75,
  },

  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
