import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function storeExpenses(expenseData) {
  const response = await axios.post(API_URL + "/expenses.json", expenseData);

  const id = response.data.name;
  return id;
}

export async function fetchExpense() {
  const response = await axios.get(API_URL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };

    expenses.push(expenseObj);
  }

  return expenses;
}

export async function updateExpense(id, expenseData) {
  const response = await axios.patch(
    API_URL + `/expenses/${id}.json`,
    expenseData,
  );
  return response.data;
}

export async function deleteExpense(id) {
  const response = await axios.delete(API_URL + `/expenses/${id}.json`);
  return response.data;
}
