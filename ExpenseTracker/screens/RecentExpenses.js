import ExpensesOutput from "../components/ExpensesOutput";
import { useContext, useEffect, useState } from "react";
import { ExpenseContext } from "../store/ExpenseContext";
import { getDateMinusDays } from "../utils/date";
import { fetchExpense } from "../services/api";
import LoadingOverlay from "../UI/LoadingOverlay";
import ErrorOverlay from "../UI/LoadingOverlay";

function RecentExpenses() {
  const expenseCtx = useContext(ExpenseContext);

  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    async function getExpense() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpense();
        expenseCtx.setExpense(expenses);
      } catch (error) {
        setError("Could not fetch expenses.");
      }
      setIsFetching(false);
    }

    getExpense();
  }, []);

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

  if (isFetching) {
    return <LoadingOverlay />;
  }

  const today = new Date();

  const date7DaysAgo = getDateMinusDays(today, 7);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText="No expenses registered from the last 7 days"
    />
  );
}

export default RecentExpenses;
