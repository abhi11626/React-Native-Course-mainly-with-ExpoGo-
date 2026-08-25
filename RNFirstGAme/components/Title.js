import { Text, StyleSheet } from "react-native";
import Colors from "../utils/color";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;
const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 28,

    color: "white",
    textAlign: "center",

    borderWidth: 3,
    borderColor: Colors.accent500,
    borderRadius: 12,

    paddingVertical: 12,
    paddingHorizontal: 24,

    marginBottom: 36,
    overflow: "hidden",
  },
});
