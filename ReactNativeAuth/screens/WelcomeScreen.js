import { StyleSheet, Text, View } from "react-native";

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authStore/auth-context";

function WelcomeScreen() {
  const [isFetched, setIsFetched] = useState("");

  const authCtx = useContext(AuthContext);
  const token = authCtx.token;

  useEffect(() => {
    async function getFetched() {
      const response = await axios.get(
        `https://react-native-api-498a9-default-rtdb.firebaseio.com/message.json?auth=${token}`,
      );
      setIsFetched(response.data);
    }
    getFetched();
  }, [token]);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{isFetched}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
