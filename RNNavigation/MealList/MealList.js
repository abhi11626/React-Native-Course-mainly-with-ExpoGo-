import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "../component/MealItem";

function MealList({ items, navigation }) {
  function mealsHandler(itemData) {
    const mealItemProps = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
    };

    function pressMealHandler() {
      navigation.navigate("Meals", {
        screen: "MealDetailScreen",
        params: {
          mealId: itemData.item.id,
          mealTitle: itemData.item.title,
        },
      });
    }
    return <MealItem {...mealItemProps} onPress={pressMealHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={mealsHandler}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

export default MealList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f2f25",
  },

  list: {
    paddingVertical: 16,
    paddingBottom: 24,
  },
});
