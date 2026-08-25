import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PlaceItem({ place, onSelect }) {
  return (
    <Pressable
      onPress={() => onSelect(place.id)}
      android_ripple={{ color: "#ccc" }}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
}

export default PlaceItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 4, // Android Shadow
    shadowColor: "#000", // iOS Shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  pressed: {
    opacity: 0.7,
  },

  image: {
    width: 110,
    height: 110,
  },

  infoContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
  },

  address: {
    fontSize: 14,
    color: "#666",
    lineHeight: 20,
  },
});
