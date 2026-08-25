import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../utils/api";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../authStore/auth-context";

function SignupScreen() {
  const authCtx = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  async function signUpHandler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);

      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Invalid Input", "Cannot Signup due to invalid credentials");

      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Creating user...." />;
  }
  return <AuthContent onAuthenticate={signUpHandler} />;
}

export default SignupScreen;
