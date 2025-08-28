import { NavigationProp, RouteProp } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Picker } from "@react-native-picker/picker";


interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const TambahUser: React.FC<props> = ({ navigation, route }) => {
    const [nama_product, setNama_Product] = useState<string>();
    const [harga_product, setHarga_Product] = useState<number>();
    const [kategori, setKategori] = useState<string>();
    const [deskripsi, setDeskripsi] = useState<string>();
    const [promo, setPromo] = useState<string>();


    // Handle Update Product -----------
    const handleUpdateProduct = async () => {
        await fetch(`http://192.168.232.220:5000/product`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nama_product: nama_product,
                harga_product: harga_product,
                kategori_product: kategori,
                img_product: imgSend,
                deskripsi: deskripsi,
                promo: promo,
            }),
        });
        alert("Product Berhasil ditambahkan");
        navigation.navigate("KelolaProduct");
    };
    // end Handle Update Product -----------

    return (
        <ScrollView>
            <View style={styles.containerForm}>
                <Text style={styles.textLabel}>Nama Product</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    keyboardType="default"
                    placeholder="Nama product"
                    onChangeText={(text) => setNama_Product(text)}
                />

                <Text style={styles.textLabel}>Harga</Text>
                <TextInput
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}
                    keyboardType="numeric"
                    placeholder="Rp."
                    onChangeText={(text) => setHarga_Product(Number(text))}
                />

                <Text style={styles.textLabel}>Deskripsi</Text>
                <TextInput
                    style={styles.textArea}
                    placeholder="Deskripsi"
                    onChangeText={(text) => setDeskripsi(text)}
                    multiline={true}
                    numberOfLines={4}
                />

                <Text style={styles.textLabel}>Kategori</Text>
                <View
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}>
                    <Picker
                        onValueChange={(value, index) => setKategori(value)}>
                        <Picker.Item
                            value={"undefined"}
                            label="Pilih Ketegori"
                        />
                        <Picker.Item value={"makanan"} label="Makanan" />
                        <Picker.Item value={"minuman"} label="Minuman" />
                    </Picker>
                </View>

                <Text style={styles.textLabel}>Promo?</Text>
                <View
                    style={{
                        borderWidth: 1,
                        marginBottom: 5,
                        borderRadius: 5,
                    }}>
                    <Picker onValueChange={(value, index) => setPromo(value)}>
                        <Picker.Item
                            value={"undefined"}
                            label="Setting Promo"
                        />
                        <Picker.Item value={"no"} label="No" />
                        <Picker.Item value={"offer"} label="Offer" />
                    </Picker>
                </View>

            </View>
            {/* End Form */}

            <TouchableOpacity
                style={styles.button}
                onPress={handleUpdateProduct}>
                <Text style={{ color: "white" }}>Kirim</Text>
            </TouchableOpacity>
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
    containerForm: {
        paddingHorizontal: 5,
    },
    button: {
        backgroundColor: "#2f823a",
        width: 100,
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
        color: "black",
        marginHorizontal: "auto",
        marginTop: 20,
    },
    button2: {
        backgroundColor: "#fff",
        width: "100%",
        padding: 8,
        alignItems: "center",
        borderRadius: 9,
        color: "black",
        marginHorizontal: "auto",
        borderWidth: 1,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 30,
    },
    textLabel: {
        fontWeight: "bold",
        fontSize: 18,
        paddingHorizontal: 3,
    },
});

export default TambahUser;
