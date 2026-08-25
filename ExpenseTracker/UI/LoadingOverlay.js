import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/style";

function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.accent500} />
      <Text style={styles.loadingText}>Fetching your expenses...</Text>
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary700,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  loadingText: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
});
