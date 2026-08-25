import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../MealList/MealList";
import { View, StyleSheet } from "react-native";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;
  const catTitle = route.params.categoryTitle;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      title: catTitle,
    });
  }, [navigation, catTitle]);

  return (
    <View style={styles.root}>
      <MealList items={displayedMeals} navigation={navigation} />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },
});
