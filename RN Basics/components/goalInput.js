import { View, TextInput, Button, StyleSheet, Modal } from "react-native";
import { useState } from "react";

function GoalInput({ onAddGoal, visible, onCancel }) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    

    onAddGoal(goalText);
    setGoalText("");
    onCancel();
  }

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Your Course Goal..."
            placeholderTextColor="#888"
            style={styles.textInput}
            onChangeText={goalInputHandler}
            value={goalText}
          />

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add" onPress={addGoalHandler} />
            </View>

            <View style={styles.button}>
              <Button title="Cancel" onPress={onCancel} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#312e81",
    justifyContent: "center",
    alignItems: "center",
  },

  inputContainer: {
    width: "85%",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#4338ca",
    borderRadius: 16,
  },

  textInput: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#c4b5fd",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 16,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: 110,
    marginHorizontal: 8,
  },
});

export default GoalInput;
