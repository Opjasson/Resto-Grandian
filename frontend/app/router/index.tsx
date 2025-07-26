import React from "react";
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    Cart,
    DetailProduct,
    KelolaProduct,
    Home,
    Profile,
    SplashScreen,
    TambahProduct,
    UbahProduct,
    HistoryPesanan,
    LoginPage,
} from "../pages";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ButtonTabs } from "../components/moleculs";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="KelolaProduct" component={KelolaProduct} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="DetailProduct" component={DetailProduct} />
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Tambah Product",
                }}
                name="TambahProduct"
                component={TambahProduct}
            />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Ubah Product",
                }}
                name="UbahProduct"
                component={UbahProduct}
            />
            <Stack.Screen name="HistoryPesanan" component={HistoryPesanan} />
        </Stack.Navigator>
    );
};

export default Router;
