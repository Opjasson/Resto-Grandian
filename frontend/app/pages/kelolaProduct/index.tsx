import { coffe, photo } from "../../inventory/images";
import {
    Location,
    Notification,
    Search,
    Filter,
    Cup,
    Cup2,
    Heart,
    Add,
    HeartOff,
} from "../../inventory/icons";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { DrawerContent } from "@/app/components";
import MenuDrawer from "react-native-side-drawer";
import { NavigationProp } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Feather from "@expo/vector-icons/Feather";

interface props {
    navigation: NavigationProp<any, any>;
}

const KelolaProduct: React.FC<props> = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(true);

    const toggleOpen = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    const sideBarContent = () => {
        return (
            <DrawerContent
                toggleOpen={toggleOpen}
                onPress1={() => navigation.navigate("Cart")}
                onPress2={() => navigation.navigate("Home")}
                onPress3={() => navigation.navigate("HistoryPesanan")}
                onPress4={() => navigation.navigate("login")}
                onPress5={() => navigation.navigate("KelolaProduct")}
                onPress6={() => navigation.navigate("laporan")}
            />
        );
    };
    return (
        <View>
            {/* Product */}
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 20,
                    marginHorizontal: 30,
                    gap : 10,
                    alignItems: "center",
                }}>
                <Ionicons
                    name="menu"
                    size={30}
                    color="black"
                    onPress={() => toggleOpen()}
                />
                <Text style={{ fontWeight: "500", fontSize: 20 }}>
                    Kelola Product
                </Text>
            </View>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    backgroundColor: "#2f823a",
                    alignItems: "center",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                    borderRadius: 30,
                    gap: 5,
                    marginRight: 10,
                }}
                onPress={() => navigation.navigate("TambahProduct")}>
                <Feather name="plus-circle" size={24} color="white" />
                <Text style={{ color: "white" }}>Tambah Product</Text>
            </TouchableOpacity>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: 20,
                        justifyContent: "center",
                    }}>
                    <TouchableOpacity
                    onPress={() => navigation.navigate("UbahProduct")}
                        activeOpacity={0.7}
                        style={{
                            backgroundColor: "white",
                            borderRadius: 20,
                            paddingHorizontal: 5,
                            paddingVertical: 5,
                            elevation: 5,
                            shadowColor: "black",
                            marginRight: 8,
                            margin: 8,
                        }}>
                        <Image
                            source={coffe}
                            style={{ width: 144, borderRadius: 20 }}
                        />
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                marginTop: 10,
                            }}>
                            <View>
                                <Text
                                    style={{
                                        fontWeight: "500",
                                        fontSize: 14,
                                    }}>
                                    Cappuchino
                                </Text>
                                <Text style={{ marginTop: 5, fontSize: 10 }}>
                                    With Sugar
                                </Text>
                            </View>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                            <Text>Rp50.000</Text>
                            <MaterialIcons
                                name="delete"
                                size={24}
                                color="black"
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            {/* End Product */}

            <MenuDrawer
                open={open}
                position={"left"}
                drawerContent={sideBarContent()}
                drawerPercentage={70}
                animationTime={250}
                overlay={true}
                opacity={0.4}></MenuDrawer>
        </View>
    );
};

export default KelolaProduct;
