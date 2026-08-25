import { View, Text, StyleSheet, Pressable } from "react-native";

function GoalItem({ text, onDelete }) {
  return (
    <Pressable
      android_ripple={{ color: "yellow" }}
      onPress={onDelete}
      style={({ pressed }) => pressed && { opacity: 0.5 }}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#7c3aed",
    borderRadius: 12,
    marginVertical: 8,
    overflow: "hidden",
  },
  goalText: {
    color: "white",
    padding: 16,
    fontSize: 16,
  },
});

export default GoalItem;
