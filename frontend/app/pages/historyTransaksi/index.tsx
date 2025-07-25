import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContent } from "@/app/components";
import MenuDrawer from "react-native-side-drawer";

const data = [
    {
        id: "1",
        date: "01-01-2000",
        title: "Robi",
        location: "088hsbx",
        names: ["Василий Упкин", "Евгений Петров"],
        price: "158 000",
    },
    {
        id: "2",
        date: "01-01-2000",
        title: "Dalban",
        location: "088hsbx",
        names: ["Евгений Петров", "Михаил Гончаров"],
        price: "78 600",
    },
    {
        id: "3",
        date: "01-01-2000",
        title: "Albert",
        location: "088hsbx",
        names: ["Евгений Петров", "Михаил Гончаров"],
        price: "78 600",
    },
];

const Card = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.rowBetween}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.type}>
                Status <AntDesign name="checkcircle" size={16} color="green" />
            </Text>
        </View>
        <View style={styles.titleRow}>
            <View style={styles.verticalLine} />
            <View style={styles.content}>
                <Text style={styles.title}>Pelanggan : {item.title}</Text>
                <Text style={styles.location}>Id Pesanan : {item.location}</Text>
                {item.names.map((name, idx) => (
                    <Text key={idx} style={styles.name}>
                        {name} x 2
                    </Text>
                ))}
            </View>
        </View>
        <View style={styles.rowBetween}>
            <TouchableOpacity>
                <Text style={styles.showLess}>Total Nominal :</Text>
            </TouchableOpacity>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
);

interface props {
    navigation: NavigationProp<any, any>;
}

const HistoryPesanan: React.FC<props> = ({ navigation }) => {
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
                onPress3={() => navigation.navigate("history-transaksi")}
                onPress4={() => navigation.navigate("login")}
                onPress5={() => navigation.navigate("KelolaProduct")}
                onPress6={() => navigation.navigate("laporan")}
            />
        );
    };
    return (
        <View style={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 20,
                    marginHorizontal: 30,
                    gap: 10,
                    alignItems: "center",
                }}>
                <Ionicons
                    name="menu"
                    size={30}
                    color="black"
                    onPress={() => toggleOpen()}
                />
                <Text style={{ fontWeight: "500", fontSize: 20 }}>
                    History Penjualan
                </Text>
            </View>
            <FlatList
                contentContainerStyle={{ paddingBottom: 100 }}
                data={data}
                renderItem={({ item }) => <Card item={item} />}
                keyExtractor={(item) => item.id}
            />

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

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f4f4f4" },
    card: {
        backgroundColor: "#fff",
        marginHorizontal: 16,
        marginVertical: 8,
        borderRadius: 12,
        padding: 16,
        elevation: 2,
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    date: {
        fontSize: 13,
        color: "#333",
    },
    type: {
        fontSize: 13,
        color: "#666",
    },
    titleRow: {
        flexDirection: "row",
        marginTop: 8,
    },
    verticalLine: {
        width: 5,
        borderRadius: 3,
        backgroundColor: "red",
        marginRight: 10,
    },
    content: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
    },
    location: {
        fontSize: 14,
        color: "#555",
        marginTop: 2,
    },
    name: {
        fontSize: 13,
        color: "#333",
        marginTop: 2,
    },
    showLess: {
        fontSize: 13,
        color: "#888",
        marginTop: 8,
    },
    price: {
        fontWeight: "bold",
        fontSize: 16,
        marginTop: 8,
    },
    fab: {
        position: "absolute",
        bottom: 30,
        alignSelf: "center",
        backgroundColor: "#FDCB00",
        padding: 18,
        borderRadius: 50,
        elevation: 5,
    },
});

export default HistoryPesanan;
