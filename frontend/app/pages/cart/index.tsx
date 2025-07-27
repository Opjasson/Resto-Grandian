import React, { useEffect, useState, useMemo } from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
    TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { GopayLogo } from "@/app/inventory/icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerContent } from "@/app/components";
import MenuDrawer from "react-native-side-drawer";
import { NavigationProp } from "@react-navigation/native";

interface props {
    navigation: NavigationProp<any, any>;
}

const Cart: React.FC<props> = ({ navigation }) => {
    const [id, setId] = useState<number>();
    const [idLogin, setIdLogin] = useState<number>();
    const [user, setUser] = useState<string>();
    const [username, setUsername] = useState<string>();
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const [dataTransaksi, setDataTransaksi] = useState<
        {
            id: number;
            namaPelanggan: string;
            status: boolean;
            keranjangs: [
                {
                    id: string;
                    qty: number;
                    productId: number;
                    transaksiId: number;
                }
            ];
        }[]
    >([]);
    const [products, setProducts] = useState<
        {
            id: number;
            nama_product: string;
            deskripsi: string;
            harga_product: number;
            img_product: string;
            kategori_product: string;
            promo: string;
        }[]
    >([]);

    const [dataShow, setDataShow] = useState<
        {
            id: number;
            nama_product: string;
            deskripsi: string;
            harga_product: number;
            img_product: string;
            kategori_product: string;
            promo: string;
        }[]
    >([]);
    const [loading, setLoading] = useState(true); // opsional

    const toggleOpen = () => {
        if (open === false) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    };

    // get product -----------------------
    const getProducts = async () => {
        const response = await fetch("http://192.168.239.220:5000/product");
        const data = await response.json();
        setProducts(data);
        console.log("product", data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    // end get product --------------------

    // Get Data Login --------------------------
    const getUserId = async () => {
        const response = await fetch("http://192.168.239.220:5000/login");
        const data = await response.json();
        setIdLogin(Object.values(data)[0]?.id);
        setId(Object.values(data)[0]?.userId);
    };

    useEffect(() => {
        getUserId();
    }, []);

    const getAkunLoggin = async () => {
        const response = await fetch(`http://192.168.239.220:5000/user/${id}`);
        const user = await response.json();
        // console.log("login",user);
        setUser(user.role);
        setUsername(user.username);
    };

    getAkunLoggin();
    // end data login ---------------------

    // data transaksi ----------------------

    useEffect(() => {
        const getTransaksi = async () => {
            const response = await fetch(
                "http://192.168.239.220:5000/transaksi"
            );
            const transaksiS = await response.json();
            setDataTransaksi(transaksiS.response);
            setLoading(false);
        };
        getTransaksi();
    }, []); // hanya sekali saat mount

    useEffect(() => {
        if (dataTransaksi.length === 0) return;

        const transaksiNamaPelangganUser = dataTransaksi.filter(
            (item) => item.namaPelanggan === username
        );
        const transaksiStatusUser = transaksiNamaPelangganUser.filter(
            (item) => item.status === null
        );

        if (transaksiStatusUser.length === 0) return;

        const productMap = Object.fromEntries(products.map((p) => [p.id, p]));

        const hasilKeranjang = transaksiStatusUser[0]?.keranjangs.map(
            (item) => {
                const product = productMap[item.productId];
                return {
                    id: item.id,
                    nama_product: product?.nama_product,
                    img_product: product?.img_product,
                    kategori: product?.kategori_product,
                    harga: product?.harga_product,
                    qty: item.qty,
                };
            }
        );

        setDataShow(hasilKeranjang || []);
    }, [dataTransaksi, products, username]);

    // end data transaksi ---------------------

    // hitung total harga
    // Hitung total harga: harga * qty lalu jumlahkan
    const ubahQty = (id, increment) => {
        const update = dataShow.map((item) => {
            if (item.id === id) {
                const newQty = item.qty + increment;
                return { ...item, qty: newQty > 0 ? newQty : 1 };
            }
            return item;
        });
        setDataShow(update);
    };

    const totalHarga = useMemo(() => {
        return dataShow.reduce(
            (total, item) => total + item.harga * item.qty,
            0
        );
    }, [dataShow]);
    
    const buyHandle = async () => {
        
    }

    // end hitung total -----------------------

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
        <ScrollView contentContainerStyle={styles.container}>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 30,
                    marginBottom: 20,
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
                    Keranjang Belanja
                </Text>
            </View>

            {dataShow.map((item, index) => (
                <View style={styles.card} key={index}>
                    <Image src={item.img_product} style={styles.image} />
                    <View style={styles.cardContent}>
                        <View style={styles.rowBetween}>
                            <View>
                                <Text style={styles.productTitle}>
                                    {item.nama_product}
                                </Text>
                                <Text style={styles.productSubtitle}>
                                    {item.kategori}
                                </Text>
                            </View>
                            <Text style={styles.price}>
                                Rp {item.harga.toLocaleString()}
                            </Text>
                        </View>

                        <View style={styles.quantityRow}>
                            <Text style={styles.quantity}>{item.qty}</Text>

                            <TouchableOpacity style={styles.plusButton} onPress={() => ubahQty(item.id, -1)}>
                                <AntDesign
                                    name="minus"
                                    size={18}
                                    color="#fff"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.plusButton} onPress={() => ubahQty(item.id, 1)}>
                                <AntDesign name="plus" size={18} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            ))}

            {/* Summary */}
            <View style={styles.summary}>
                <TextInput
                    style={styles.textArea}
                    placeholder="Catatan Tambahan"
                    // onChangeText={(text) => setDeskripsi(text)}
                    multiline={true}
                    numberOfLines={4}
                />
                <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalLabel}>
                        Rp {totalHarga?.toLocaleString()}
                    </Text>
                </View>
            </View>

            {/* Payment */}
            <Text style={styles.paymentLabel}>Payment</Text>
            <View style={styles.paymentMethods}>
                <Image source={GopayLogo} style={styles.paymentIcon} />
                <Text style={{ alignSelf: "center" }}>: 087895031524</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <Ionicons name="camera-outline" size={24} color="black" />
                <Text style={{ color: "black" }}>Bukti Pembayaran</Text>
            </TouchableOpacity>

            {/* Buy Button */}
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyText}>Buy</Text>
            </TouchableOpacity>
            <MenuDrawer
                open={open}
                position={"left"}
                drawerContent={sideBarContent()}
                drawerPercentage={70}
                animationTime={250}
                overlay={true}
                opacity={0.4}></MenuDrawer>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textArea: {
        width: "100%",
        height: 100,
        borderColor: "gray",
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        borderRadius: 10,
    },
    button: {
        backgroundColor: "#F3E9DC",
        width: "50%",
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
        color: "black",
    },
    container: {
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        flex: 1,
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
        width: 70,
        height: 50,
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
