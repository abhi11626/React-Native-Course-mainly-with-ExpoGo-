import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./utils/DrawerNav";
import FavouriteContextProvider from "./store/FavouriteContext";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </FavouriteContextProvider>
    </>
  );
}
