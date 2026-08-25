import { View, Text, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { Colors } from "../constants/style";
import Input from "./Input";
import Button from "../UI/Button";

function ExpenseForm({
  onCancel,
  onSubmit,
  submittedButtonLabel,
  defaultValues,
}) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? defaultValues.date.toISOString().slice(0, 10) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangeHandler(inputIdentifier, enteredValues) {
    setInputs((curInput) => {
      return {
        ...curInput,
        [inputIdentifier]: { value: enteredValues, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = !isNaN(expenseData.date.getTime());
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      // return Alert.alert("Invalid Input", "Please type a valid input");
      setInputs((curInput) => {
        return {
          amount: { value: curInput.amount.value, isValid: amountIsValid },
          date: { value: curInput.date.value, isValid: dateIsValid },
          description: {
            value: curInput.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  }

  const formIsvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <>
      <View>
        <Text>Your Expense</Text>
        <Input
          label="Amount"
          isValid={inputs.amount.isValid}
          typeConfig={{
            keyboardType: "decimal-pad",
            onChangeText: (enteredValues) => {
              inputChangeHandler("amount", enteredValues);
            },
            value: inputs.amount.value,
          }}
        />

        <Input
          label="Date"
          isValid={inputs.date.isValid}
          typeConfig={{
            placeholder: "YYYY-MM-DD",
            onChangeText: (enteredValues) => {
              inputChangeHandler("date", enteredValues);
            },
            value: inputs.date.value,
          }}
        />

        <Input
          label="Description"
          isValid={inputs.description.isValid}
          typeConfig={{
            multiline: true,
            onChangeText: (enteredValues) => {
              inputChangeHandler("description", enteredValues);
            },

            value: inputs.description.value,
          }}
        />
      </View>
      {formIsvalid && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>
            Please enter valid values for the highlighted fields.
          </Text>
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <Button onPress={onCancel}>Cancel</Button>
        <Button onPress={submitHandler}>{submittedButtonLabel}</Button>
      </View>
    </>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  errorContainer: {
    marginTop: 12,
    marginBottom: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.error50,
  },

  errorText: {
    color: Colors.error500,
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
});
