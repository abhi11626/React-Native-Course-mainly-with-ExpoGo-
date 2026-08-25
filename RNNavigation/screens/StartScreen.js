import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import GridTile from "../component/GridTile";

function StartScreen({ navigation }) {
  function renderItemHandler(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverview", {
        categoryId: itemData.item.id,
        categoryTitle: itemData.item.title,
      });
    }

    return (
      <GridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItemHandler}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
}

export default StartScreen;
