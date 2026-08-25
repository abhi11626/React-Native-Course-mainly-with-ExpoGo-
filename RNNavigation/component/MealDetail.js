import { View, Text, StyleSheet } from "react-native";

function MealDetail({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailText, textStyle]}>{duration}m</Text>

      <Text style={[styles.detailText, textStyle]}>
        {complexity.toUpperCase()}
      </Text>

      <Text style={[styles.detailText, textStyle]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}
export default MealDetail;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },

  detailText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
