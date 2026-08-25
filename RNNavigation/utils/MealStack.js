import StartScreen from "../screens/StartScreen";
import MealsOverview from "../screens/MealsOverView";
import MealsDetailScreen from "../screens/MealDetailScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";

function MealsStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        contentStyle: {
          backgroundColor: "#3f2f25",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={StartScreen}
        options={({ navigation }) => ({
          title: "All Categories",

          headerLeft: () => (
            <Pressable
              onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            >
              <Ionicons name="menu" size={24} color="white" />
            </Pressable>
          ),
        })}
      />

      <Stack.Screen name="MealsOverview" component={MealsOverview} />

      <Stack.Screen name="MealDetailScreen" component={MealsDetailScreen} />
    </Stack.Navigator>
  );
}

export default MealsStack;
