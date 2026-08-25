import { View, Text, TextInput, StyleSheet } from "react-native";
import { Colors } from "../constants/style";

function Input({ label, isValid, typeConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>
        {label}
      </Text>

      <TextInput
        style={[
          styles.input,
          typeConfig.multiline && styles.inputMultiline,
          !isValid && styles.invalidInput,
        ]}
        {...typeConfig}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },

  label: {
    color: Colors.primary100,
    marginBottom: 6,
    fontSize: 15,
    fontWeight: "600",
  },

  input: {
    backgroundColor: Colors.primary100,
    color: Colors.primary700,

    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary200,

    paddingHorizontal: 12,
    paddingVertical: 10,

    fontSize: 16,
  },

  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },

  invalidLabel: {
    color: Colors.error500,
  },

  invalidInput: {
    borderColor: Colors.error500,
    backgroundColor: Colors.error50,
  },
});
