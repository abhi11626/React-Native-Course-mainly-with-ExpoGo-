import MealStack from "./MealStack";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Favourites from "../component/Favourites";

function DrawerNavigator() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: "#3f2f25",
        },
        drawerActiveTintColor: "#ddb52f",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Meals"
        component={MealStack}
        options={{
          drawerLabel: "All Categories",
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />

      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
