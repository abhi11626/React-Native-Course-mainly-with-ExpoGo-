import {
  StyleSheet,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/goalItem";
import GoalInput from "./components/goalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <View style={styles.startContainer}>
          <Image
            source={require("./assets/image/goal.png")}
            style={styles.image}
          />

          <Button title="Add New Goal" onPress={startAddGoalHandler} />
        </View>

        <GoalInput
          visible={isModalVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem
                text={itemData.item.text}
                onDelete={() => deleteGoalHandler(itemData.item.id)}
              />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#1e1b4b",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  startContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },

  goalsContainer: {
    flex: 1,
  },
});
