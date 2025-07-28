import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import * as FileSystem from "expo-file-system";
import { AntDesign } from "@expo/vector-icons";

interface props {
    route: RouteProp<any, any>;
    navigation: NavigationProp<any, any>;
}

const DetailTransaksi: React.FC<props> = ({ route, navigation }) => {
    const [id, setId] = useState<number>();
    const [uuid, setUuid] = useState<string>();
    const [date, setDate] = useState(new Date());
    const [cart, setCart] = useState<
        {
            qty: number;
            barangId: number;
            transaksiId: number;
        }[]
    >([]);

    const [totalHarga, setTotalHarga] = useState<number>();
    const [createdAt, setCreatedAt] = useState<string>();
    const [pelanggan, setPelanggan] = useState<string>();
    const [bayar, setBayar] = useState<number>();

    const routeUuid = route.params?.uuid;

    const getTransaksiByUUID = async () => {
        const response = await fetch(
            `http://192.168.220.220:5000/transaksi/${routeUuid}`
        );
        const dataJson = await response.json();
        setCart(dataJson.carts);
        setUuid(dataJson.uuid);
        setTotalHarga(dataJson.totalHarga);
        setPelanggan(dataJson.namaPelanggan);
        setBayar(dataJson.bayarPelanggan);
        setCreatedAt(dataJson.createdAt);
        setId(dataJson.id);
    };

    const [barang, setBarang] = useState<
        {
            id: number;
            nama: string;
            harga_jual: number;
            stok: number;
        }[]
    >([]);
    // console.log(data);

    const getDataBarang = async () => {
        try {
            const response = await fetch("http://192.168.220.220:5000/barang");
            const barang = await response.json();
            setBarang(barang);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getTransaksiByUUID();
    });

    useEffect(() => {
        getDataBarang();
    }, []);

    const deleteTransaksi = async () => {
        await fetch(`http://192.168.220.220:5000/transaksi/${id}`, {
            method: "DELETE",
        });
        navigation.navigate("history-transaksi");
    };

    // convert tanggal menjadi string
    const dateNow = date.toISOString().split("T")[0];

    // hitungQty nota
    const handleQTyAll = () => {
        const hitungCart = cart.map((a) => a.qty);
        const sum = hitungCart.reduce((acc, curr) => {
            return acc + curr;
        }, 0);

        return sum;
    };

    const handleCetak = () => {
        const rows = cart
            .map(
                (item, index) => `
            <div>Barang : ${
                barang.find((e) => e.id === item.barangId)?.nama
            }<br>${item.qty} x ${
                    barang.find((e) => e.id === item.barangId)?.harga_jual
                }<span class="right">Rp ${
                    item.qty *
                    barang.find((e) => e.id === item.barangId)!.harga_jual
                }</span>
            </div>
    `
            )
            .join("");
        return `
        <html>
        <head>
        <style>
        @page { size: 58mm auto; margin: 0; } body { width: 58mm; font-size: 10px; padding: 5px; font-family: sans-serif; padding: 16px;  }
        .center { text-align: center; }
        .bold { font-weight: bold; }
        .line { border-top: 1px dashed #000; margin: 10px 0; }
        .right { text-align: right; }
        .row { display: flex; justify-content: space-between; }
        </style>
        </head>
        <body>
        <div class="center">
        <h3>Tirta Laksana Jaya Murni</h3>
        <p>Jl. Raya Curug Pangkah <br>Tegal</p>
        <p>No. Telp: 08156667320</p>
        </div>
        <div class="line"></div>
        <div class="row"><span>${dateNow}</span></div>
        <div class="row"><span>Pelanggan: ${pelanggan}</span></div>
        <div>No.xxxx</div>
        <div class="line"></div>
        
        list pesanan
              
            ${rows}
              <div class="line"></div>
              <div class="row"><span>Jumlah barang</span><span>Qty : ${handleQTyAll()}</span></div>
              <div class="row bold"><span>Total</span><span>Rp ${totalHarga?.toLocaleString()}</span></div>
              <div class="row"><span>Bayar (Cash)</span><span>Rp ${bayar?.toLocaleString()}</span></div>
              <div class="row"><span>Kembali</span><span>Rp ${
                  bayar! - totalHarga!
              }</span></div>
        
              <div class="center"><p>Terima kasih telah berbelanja</p></div>
            </body>
          </html>
        `;
    };

    const handleSavePdf = async () => {
        const htmlContent = handleCetak();
        const { uri } = await Print.printToFileAsync({
            html: htmlContent,
        });

        const customFileName = `Kasir bengkel_${dateNow}.pdf`;
        const newUri = FileSystem.documentDirectory + customFileName;

        await FileSystem.moveAsync({
            from: uri,
            to: newUri,
        });

        await Sharing.shareAsync(newUri); // Menyimpan atau kirim PDF
    };

    return (
        <View>
            <View style={styles.card}>
                <View style={styles.rowBetween}>
                    <Text style={styles.date}>2002</Text>
                    <Text style={styles.type}>
                        Status{" "}
                        <AntDesign
                            name="checkcircleo"
                            size={16}
                            color="black"
                        />
                        <AntDesign name="checkcircle" size={16} color="green" />
                    </Text>
                </View>
                <View style={styles.titleRow}>
                    <View style={styles.verticalLine} />
                    <View style={styles.content}>
                        <Text style={styles.title}>Pelanggan :</Text>
                        <Text style={styles.location}>Id Pesanan :</Text>

                        <Text style={styles.name}>Budi</Text>
                    </View>
                </View>
                <View style={styles.rowBetween}>
                    <TouchableOpacity>
                        <Text style={styles.showLess}>Total Nominal :</Text>
                    </TouchableOpacity>
                    <Text style={styles.price}>20000</Text>
                </View>
            </View>

            <View>
                <TouchableOpacity
                    onPress={() => deleteTransaksi()}
                    style={styles.buttonDelete}>
                    <Text>Delete</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={handleSavePdf}
                    style={styles.buttonDate}>
                    <FontAwesome5 name="print" size={24} color="black" />
                    <Text>Cetak</Text>
                </TouchableOpacity>
            </View>
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
    buttonDate: {
        borderWidth: 1,
        width: 130,
        flexDirection: "row",
        gap: 5,
        marginTop: 20,
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 10,
        backgroundColor: "#819067",
    },
    containerTransaksi: {
        borderWidth: 2,
        padding: 10,
    },
    dataTransaksi: {
        alignItems: "center",
    },
    containerCart: {
        alignItems: "center",
    },
    buttonDelete: {
        backgroundColor: "red",
        width: "40%",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: "auto",
        borderRadius: 20,
    },
});

export default DetailTransaksi;
