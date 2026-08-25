import {
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetail from "./MealDetail";

function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  steps,
  ingredients,
  onPress,
}) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" ? styles.pressed : null
        }
      >
        <View>
          <Image source={{ uri: imageUrl }} style={styles.image} />

          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>

            <MealDetail
              duration={duration}
              complexity={complexity}
              affordability={affordability}
            />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 15,
    backgroundColor: "#fff",
    overflow: "hidden",

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },

  pressed: {
    opacity: 0.75,
  },

  image: {
    width: "100%",
    height: 220,
  },

  content: {
    padding: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  detailText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
});
