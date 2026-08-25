import { Text, View, StyleSheet, Pressable, Platform } from "react-native";

import { Colors } from "../constants/style";
import { useNavigation } from "@react-navigation/native";
import { getFormattedDate } from "../utils/date";

function ExpensesItem({ id, description, amount, date }) {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  }
  return (
    <Pressable
      onPress={pressHandler}
      android_ripple={{ color: Colors.primary100 }}
      style={({ pressed }) =>
        pressed && Platform.OS === "ios" ? styles.pressed : null
      }
    >
      <View style={styles.expenseItem}>
        <View style={styles.leftContainer}>
          <Text style={styles.title}>{description}</Text>
          <Text style={styles.date}> {getFormattedDate(date)}</Text>
        </View>

        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpensesItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },

  expenseItem: {
    backgroundColor: Colors.primary500,
    borderRadius: 12,

    paddingVertical: 14,
    paddingHorizontal: 16,

    marginVertical: 8,
    marginHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
  },

  leftContainer: {
    flex: 1,
    marginRight: 12,
  },

  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  date: {
    color: Colors.primary100,
    marginTop: 4,
    fontSize: 13,
  },

  amountContainer: {
    minWidth: 90,
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  amount: {
    color: Colors.primary500,
    fontSize: 18,
    fontWeight: "bold",
  },
});
