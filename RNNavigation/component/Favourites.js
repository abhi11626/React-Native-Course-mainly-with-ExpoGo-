import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import MealList from "../MealList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavouriteContext } from "../store/FavouriteContext";

function Favourites({ navigation }) {
  const favouriteCtx = useContext(FavouriteContext);

  const favMeals = MEALS.filter((meal) => favouriteCtx.ids.includes(meal.id));

  if (favMeals.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>
          There is no favourite meal added yet.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MealList items={favMeals} navigation={navigation} />
    </View>
  );
}

export default Favourites;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },

  emptyContainer: {
    flex: 1,
    backgroundColor: "#3f2f25",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
  },

  emptyText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
