import {
  Text,
  Image,
  ScrollView,
  View,
  StyleSheet,
  Pressable,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../component/MealDetail";
import { useContext, useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FavouriteContext } from "../store/FavouriteContext";

function MealsDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const mealTitle = route.params.mealTitle;

  const detailMeals = MEALS.find((meal) => meal.id === mealId);

  const favouriteCtx = useContext(FavouriteContext);

  const IsFavMeal = favouriteCtx.ids.includes(mealId);

  function favouriteHandler() {
    if (IsFavMeal) {
      favouriteCtx.removeFavourite(mealId);
    } else {
      favouriteCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealTitle,
      headerRight: () => (
        <Pressable
          onPress={favouriteHandler}
          style={({ pressed }) => [
            styles.headerButton,
            pressed && styles.pressed,
          ]}
        >
          <Ionicons
            name={IsFavMeal ? "star" : "star-outline"}
            size={24}
            color="white"
          />
        </Pressable>
      ),
    });
  }, [navigation, IsFavMeal, mealTitle]);

  return (
    <ScrollView style={styles.root}>
      <Image source={{ uri: detailMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{detailMeals.title}</Text>
      <MealDetail
        duration={detailMeals.duration}
        complexity={detailMeals.complexity}
        affordability={detailMeals.affordability}
        textStyle={{ color: "white" }}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ingredients</Text>
        {detailMeals.ingredients.map((ingredient) => (
          <View key={ingredient} style={styles.listItem}>
            <Text key={ingredient} style={styles.listText}>
              {ingredient}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Steps</Text>
        {detailMeals.steps.map((step) => (
          <View key={step} style={styles.listItem}>
            <Text key={step} style={styles.listText}>
              {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealsDetailScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },

  image: {
    width: "100%",
    height: 300,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginVertical: 12,
  },

  section: {
    marginHorizontal: 24,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    marginBottom: 12,
  },

  listItem: {
    backgroundColor: "#e2b497",
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },

  listText: {
    textAlign: "center",
    color: "#351401",
    fontSize: 16,
  },

  headerButton: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginRight: 8,
  },

  pressed: {
    opacity: 0.6,
  },
});
