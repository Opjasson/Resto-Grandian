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
                onPress1={() => navigation.navigate("KelolaProduct")}
                onPress2={() => navigation.navigate("Home")}
                onPress3={() => navigation.navigate("history-transaksi")}
                onPress4={() => navigation.navigate("login")}
                onPress5={() => navigation.navigate("laporan")}
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
                    gap: 10,
                    marginTop: 20,
                    marginLeft: 15,
                }}>
                <Ionicons
                    name="menu"
                    size={30}
                    color="black"
                    onPress={() => toggleOpen()}
                />
                <Text style={{ fontWeight: "500", fontSize: 20 }}>
                    Favorite
                </Text>
            </View>
            <ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: 20,
                        justifyContent: "center",
                    }}>
                    <TouchableOpacity
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
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{ marginTop: 5 }}>
                                <Image source={HeartOff} />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                            <Text>Rp50.000</Text>
                            <Image source={Add} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
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
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{ marginTop: 5 }}>
                                <Image source={Heart} />
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}>
                            <Text>Rp50.000</Text>
                            <Image source={Add} />
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
