import { FlatList, View, Text, StyleSheet } from "react-native";
import ExpensesItem from "./ExpensesItem";

function ExpensesList({ expenses }) {
  function expenseItemHandler(itemData) {
    return <ExpensesItem {...itemData.item} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={expenseItemHandler}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
