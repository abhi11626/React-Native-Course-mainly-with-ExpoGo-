import { Text } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput";
import { useContext } from "react";
import { ExpenseContext } from "../store/ExpenseContext";

function AllExpenses() {
  const expenseCtx = useContext(ExpenseContext);

  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found"
    />
  );
}

export default AllExpenses;
