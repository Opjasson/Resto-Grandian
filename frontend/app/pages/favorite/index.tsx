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
import React from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

const Favorite = () => {
    return (
        <View style={{ marginTop: 20, marginHorizontal: "auto" }}>
            {/* Product */}
            <Text style={{ fontWeight: "500", fontSize: 20 }}>Favorite</Text>
            <ScrollView>
                <View style={{ flexDirection: "row", marginTop: 20 }}>
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
                {/* Product */}
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
        </View>
    );
};

export default Favorite;
