import AuthContent from "../components/Auth/AuthContent";
import { useContext, useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { loginUser } from "../utils/api";
import { Alert } from "react-native";
import { AuthContext } from "../authStore/auth-context";

function LoginScreen() {
  const authCtx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);

  async function loginHandler({ email, password }) {
    setIsLoading(true);
    try {
      const token = await loginUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Invalid Input",
        "Please check the valid credentials before logging.",
      );
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <LoadingOverlay message="Logging In...." />;
  }
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
