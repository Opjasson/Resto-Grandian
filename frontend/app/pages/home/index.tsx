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
import { NavigationProp } from "@react-navigation/native";
import { DrawerContent } from "@/app/components";
import MenuDrawer from "react-native-side-drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

interface props {
    navigation: NavigationProp<any, any>;
}

const Home: React.FC<props> = ({ navigation }) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const [filter, setFilter] = useState<string>("makanan")

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
        <View style={{ flex: 1, backgroundColor: "#FBFBFB" }}>
            <ScrollView>
                {/* Top menu */}
                <View
                    style={{
                        flexDirection: "row",
                        marginTop: 30,
                        marginHorizontal: 30,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}>
                    <Ionicons
                        name="menu"
                        size={30}
                        color="black"
                        onPress={() => toggleOpen()}
                    />

                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={Location} />
                        <Text
                            style={{
                                fontWeight: "500",
                                fontSize: 12,
                                marginLeft: 5,
                            }}>
                            Tegal, Indonesia
                        </Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={() =>
                            status ? setStatus(false) : setStatus(true)
                        }>
                        <Image source={photo} />
                    </TouchableOpacity>
                </View>
                {/* End top menu */}
                <View style={{ marginHorizontal: 30, marginTop: 15 }}>
                    <Text style={{ fontWeight: "500", fontSize: 14 }}>
                        Good Morning, My Friends
                    </Text>
                </View>
                {/* Search tab */}
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "75%",
                        backgroundColor: "#1111",
                        marginHorizontal: "auto",
                        borderRadius: 30,
                        paddingHorizontal: 20,
                        marginTop: 20,
                    }}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 2,
                        }}>
                        <Image source={Search} />
                        <TextInput placeholder="Search Coffe ..." />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <Image source={Filter} />
                    </View>
                </View>
                {/* End Search */}

                {/* Categories */}
                <View style={{ marginLeft: 25, marginTop: 15 }}>
                    <View style={{ marginBottom: 15 }}>
                        <Text style={{ fontWeight: "500", marginLeft: 5 }}>
                            Categories
                        </Text>
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        {/* Menu */}
                        <TouchableOpacity
                            onPress={() => setFilter("makanan")}
                            activeOpacity={0.8}
                            style={{
                                justifyContent: "center",
                                flexDirection: "row",
                                backgroundColor:
                                    filter === "makanan" ? "#2f823a" : "white",
                                alignItems: "center",
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                borderRadius: 30,
                                gap: 5,
                                marginRight: 10,
                            }}>
                            <Ionicons
                                name="pizza-outline"
                                size={24}
                                color={filter === "makanan" ? "white" : "black"}
                            />
                            <Text
                                style={{
                                    color:
                                        filter === "makanan"
                                            ? "white"
                                            : "black",
                                }}>
                                Makanan
                            </Text>
                        </TouchableOpacity>

                        {/* End Menu */}

                        {/* Menu */}
                        <TouchableOpacity
                            onPress={() => setFilter("minuman")}
                            activeOpacity={0.8}
                            style={{
                                justifyContent: "center",
                                flexDirection: "row",
                                backgroundColor:
                                    filter === "minuman" ? "#2f823a" : "white",
                                alignItems: "center",
                                paddingHorizontal: 10,
                                paddingVertical: 10,
                                borderRadius: 30,
                                gap: 5,
                                marginRight: 10,
                                marginVertical: 5,
                                elevation: 1.5,
                                shadowColor: "black",
                            }}>
                            <SimpleLineIcons
                                name="cup"
                                size={23}
                                color={filter === "minuman" ? "white" : "black"}
                            />
                            <Text
                                style={{
                                    color:
                                        filter === "minuman"
                                            ? "white"
                                            : "black",
                                }}>
                                Minuman
                            </Text>
                        </TouchableOpacity>
                        {/* End menu */}
                    </View>
                </View>
                {/* End Categories */}

                {/* Product */}
                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}>
                        {/* Product */}

                        <TouchableOpacity
                            onPress={() => navigation.navigate("DetailProduct")}
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                        {/* End Product */}
                    </ScrollView>
                </View>
                {/* End Product */}

                {/* Special offer */}
                <View style={{ marginTop: 20, marginHorizontal: "auto" }}>
                    {/* Product */}
                    <Text style={{ fontWeight: "500" }}>Special Offer</Text>
                    <View style={{ flexDirection: "row" }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                    <View style={{ flexDirection: "row" }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                    <View style={{ flexDirection: "row" }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                                    <Text
                                        style={{ marginTop: 5, fontSize: 10 }}>
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
                    {/* End Product */}
                </View>
                {/* End Special Offer */}
            </ScrollView>

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

export default Home;
