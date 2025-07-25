import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart, DetailProduct, Favorite, Home, Profile, SplashScreen } from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonTabs } from "../components/moleculs";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




const MainApp = () => {
  return (
      <Tab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <ButtonTabs {...props} />}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorite" component={Favorite} />
          <Tab.Screen name="Cart" component={Cart} />
          <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}



const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown : false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
            <Stack.Screen name="MainApp" component={MainApp} />
        </Stack.Navigator>
    );
};

export default Router;
