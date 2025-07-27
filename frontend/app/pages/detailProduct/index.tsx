import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
} from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";
import { NavigationProp, RouteProp } from "@react-navigation/native";

interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const DetailProduct: React.FC<props> = ({ navigation, route }) => {
    const sendData = route.params?.data;
    const sendTransId = route.params?.idTrans;
    const sendIdUser = route.params?.idUser;

    console.log(sendData);
    console.log(sendTransId);
    console.log(sendIdUser);

    const addCart = async () => {
        try {
            await fetch(`http://192.168.239.220:5000/cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    qty: 1,
                    productId: sendData.id,
                    userId: sendIdUser,
                    transaksiId: sendTransId,
                }),
            });
            navigation.navigate("Cart")
        } catch (error) {
            alert("ada error nih");
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header Image */}
            <View style={styles.imageContainer}>
                <Image src={sendData.img_product} style={styles.image} />
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="arrowleft" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

            {/* Content */}
            <View style={styles.content}>
                <View style={styles.titleRow}>
                    <View>
                        <Text style={styles.title}>
                            {sendData.nama_product}
                        </Text>
                        <Text style={styles.subtitle}>
                            {sendData.kategori_product}
                        </Text>
                    </View>
                </View>

                <Text style={styles.sectionTitle}>About</Text>
                <Text style={styles.aboutText}>{sendData.deskripsi}</Text>

                <View style={styles.cartRow}>
                    <TouchableOpacity style={styles.cartButton} onPress={addCart}>
                        <Text style={styles.cartText}>Add to cart</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>
                        Rp. {sendData.harga_product.toLocaleString()}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { backgroundColor: "#fff", flex: 1 },
    imageContainer: { position: "relative" },
    image: {
        width: "100%",
        height: 250,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    backButton: {
        position: "absolute",
        top: 40,
        left: 20,
        backgroundColor: "#00000070",
        padding: 8,
        borderRadius: 20,
    },
    heartButton: {
        position: "absolute",
        top: 40,
        right: 20,
        backgroundColor: "#00000070",
        padding: 8,
        borderRadius: 20,
    },
    content: { padding: 20 },
    titleRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    title: { fontSize: 22, fontWeight: "bold", color: "#222" },
    subtitle: { fontSize: 14, color: "#777" },
    rating: {
        flexDirection: "row",
        backgroundColor: "#C4963A",
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        alignItems: "center",
    },
    ratingText: {
        color: "#fff",
        marginLeft: 4,
        fontWeight: "600",
    },
    sectionTitle: {
        marginTop: 20,
        fontWeight: "bold",
        fontSize: 16,
        color: "#222",
        borderBottomWidth: 2,
        borderColor: "#C4963A",
    },
    optionRow: {
        flexDirection: "row",
        gap: 10,
        marginTop: 10,
    },
    optionButton: {
        borderWidth: 1,
        borderColor: "#aaa",
        paddingVertical: 6,
        paddingHorizontal: 14,
        borderRadius: 20,
    },
    optionText: {
        color: "#444",
        fontSize: 14,
    },
    selectedOption: {
        backgroundColor: "#1E5128",
        borderColor: "#1E5128",
    },
    selectedSugar: {
        backgroundColor: "#1E5128",
        borderColor: "#1E5128",
    },
    selectedText: {
        color: "#fff",
    },
    aboutText: {
        marginTop: 10,
        color: "#555",
        fontSize: 14,
        lineHeight: 20,
    },
    cartRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        alignItems: "center",
    },
    cartButton: {
        backgroundColor: "#1E5128",
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        flex: 1,
        marginRight: 10,
        alignItems: "center",
    },
    cartText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#222",
    },
});

export default DetailProduct;
