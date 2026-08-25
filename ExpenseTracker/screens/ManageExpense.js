import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { Colors } from "../constants/style";
import { useContext, useLayoutEffect, useState } from "react";
import IconButton from "../UI/IconButton";
import LoadingOverlay from "../UI/LoadingOverlay";
import { ExpenseContext } from "../store/ExpenseContext";
import ExpenseForm from "../ManageExpense/ExpenseForm";
import { deleteExpense, storeExpenses, updateExpense } from "../services/api";

function ManageExpense({ route, navigation }) {
  const expenseCtx = useContext(ExpenseContext);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState();

  const expId = route.params?.expenseId;
  const isEdited = !!expId;

  const selectedExpnese = expenseCtx.expenses.find(
    (expense) => expense.id === expId,
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdited ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdited]);

  async function deleteHandler() {
    setIsSubmitted(true);
    try {
      await deleteExpense(expId);
      expenseCtx.deleteExpense(expId);
      navigation.goBack();
    } catch (error) {
      setError("Could not update expense.");
    }
    setIsSubmitted(false);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  async function confirmHandler(expenseData) {
    setIsSubmitted(true);

    try {
      if (isEdited) {
        await updateExpense(expId, expenseData);
        expenseCtx.updateExpense(expId, expenseData);
      } else {
        const id = await storeExpenses(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      }
      navigation.goBack();
    } catch (error) {
      setError("Could not save expense.");
    }
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

  if (isSubmitted) {
    return <LoadingOverlay />;
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <ExpenseForm
          onCancel={cancelHandler}
          onSubmit={confirmHandler}
          submittedButtonLabel={isEdited ? "Update" : "Add"}
          defaultValues={selectedExpnese}
        />
        {/* <View style={styles.formContainer}></View> */}

        {isEdited && (
          <View style={styles.deleteContainer}>
            <View style={styles.deleteButton}>
              <IconButton
                icon="trash"
                size={28}
                color={Colors.error500} // or Colors.accent500 if you don't have error colors yet
                onPress={deleteHandler}
              />
            </View>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary700,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  // formContainer: {
  //   flex: 1,
  //   marginTop: 24,
  // },

  deleteContainer: {
    marginTop: 32,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.primary200,
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: Colors.error50,
    borderRadius: 30,
    padding: 10,
  },
});
