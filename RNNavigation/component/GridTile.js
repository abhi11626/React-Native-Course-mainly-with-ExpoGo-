import { View, Pressable, Text, StyleSheet, Platform } from "react-native";

function GridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && Platform.OS === "ios" && styles.pressed,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default GridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,

    borderRadius: 12,

    // Android Shadow
    elevation: 6,

    // iOS Shadow
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 8,
    shadowOffset: {
      width: 2,
      height: 2,
    },

    backgroundColor: "white",
    overflow: "hidden",
  },

  button: {
    flex: 1,
  },

  pressed: {
    opacity: 0.7,
  },

  innerContainer: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});
