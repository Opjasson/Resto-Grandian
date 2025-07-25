import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const CartItem = () => (
    <View style={styles.card}>
        <Image
            source={{
                uri: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
            }}
            style={styles.image}
        />
        <View style={styles.cardContent}>
            <View style={styles.rowBetween}>
                <View>
                    <Text style={styles.productTitle}>Coffee</Text>
                    <Text style={styles.productSubtitle}>With Sugar</Text>
                </View>
                <Text style={styles.price}>Rp 50.000</Text>
            </View>

            <Text style={styles.detailText}>
                Cap Size: <Text style={styles.boldText}>Small</Text>
            </Text>
            <Text style={styles.detailText}>
                Level Sugar: <Text style={styles.boldText}>No Sugar</Text>
            </Text>

            <View style={styles.quantityRow}>
                <Text style={styles.quantity}>2</Text>
                <TouchableOpacity style={styles.plusButton}>
                    <AntDesign name="plus" size={18} color="#fff" />
                </TouchableOpacity>
            </View>
        </View>

        <TouchableOpacity style={styles.likeButton}>
            <AntDesign name="hearto" size={18} color="#D33" />
        </TouchableOpacity>
    </View>
);

const Cart = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.cartTitle}>Cart</Text>

            <CartItem />
            <CartItem />

            {/* Summary */}
            <View style={styles.summary}>
                <View style={styles.summaryRow}>
                    <Text>Subtotal</Text>
                    <Text>Rp 100.000</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text>Discount</Text>
                    <Text>Rp 25.000</Text>
                </View>
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalLabel}>Rp 75.000</Text>
                </View>
            </View>

            {/* Payment */}
            <Text style={styles.paymentLabel}>Payment</Text>
            <View style={styles.paymentMethods}>
                <Image
                    source={{
                        uri: "https://img.icons8.com/color/48/000000/visa.png",
                    }}
                    style={styles.paymentIcon}
                />
                <Image
                    source={{
                        uri: "https://img.icons8.com/color/48/000000/paypal.png",
                    }}
                    style={styles.paymentIcon}
                />
            </View>

            {/* Buy Button */}
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyText}>Buy</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#fff",
        paddingBottom: 80,
    },
    cartTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fdfdfd",
        borderRadius: 16,
        marginBottom: 16,
        padding: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
    },
    cardContent: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "space-between",
    },
    rowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    productTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    productSubtitle: {
        fontSize: 12,
        color: "#666",
    },
    price: {
        fontWeight: "bold",
        color: "#000",
    },
    detailText: {
        fontSize: 12,
        marginTop: 4,
    },
    boldText: {
        fontWeight: "bold",
    },
    quantityRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        gap: 12,
    },
    quantity: {
        fontSize: 16,
        fontWeight: "bold",
    },
    plusButton: {
        backgroundColor: "#1E5128",
        padding: 6,
        borderRadius: 20,
    },
    likeButton: {
        position: "absolute",
        top: 8,
        right: 8,
    },
    summary: {
        marginTop: 16,
    },
    summaryRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 4,
    },
    totalLabel: {
        fontWeight: "bold",
        fontSize: 16,
    },
    paymentLabel: {
        marginTop: 20,
        fontSize: 16,
        fontWeight: "bold",
    },
    paymentMethods: {
        flexDirection: "row",
        marginTop: 10,
        gap: 16,
    },
    paymentIcon: {
        width: 50,
        height: 30,
        resizeMode: "contain",
    },
    buyButton: {
        backgroundColor: "#1E5128",
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
    },
    buyText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default Cart;
