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
import React, { useEffect, useState } from "react";
import {
    Image,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { DrawerContent } from "@/app/components";
import MenuDrawer from "react-native-side-drawer";
import Ionicons from "@expo/vector-icons/Ionicons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

interface props {
    navigation: NavigationProp<any, any>;
    route: RouteProp<any, any>;
}

const Home: React.FC<props> = ({ navigation, route }) => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(true);
    const [filter, setFilter] = useState<string>("makanan");
    const [search, setSearch] = useState<string>();
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
    const [id, setId] = useState<number>();
    const [idLogin, setIdLogin] = useState<number>();
    const [user, setUser] = useState<string>();
    const [username, setUsername] = useState<string>();

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

    const logOut = async () => {
        await fetch(`http://192.168.239.220:5000/login/${idLogin}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        navigation.navigate("LoginPage" as never);
    };

    getAkunLoggin();
    // ------------------------

    const getProducts = async () => {
        const response = await fetch("http://192.168.239.220:5000/product");
        const data = await response.json();
        setProducts(data);
        // console.log(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    // menfilter data berdasarkan yang diketian di search
    const searchProduct = products.filter((item) => {
        const words = search?.split(" ");
        return words?.some((word) => item.nama_product.includes(word));
    });

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
                status={user === "kasir" ? false : true}
                onPress4={() => logOut()}
                onPress5={() => navigation.navigate("KelolaProduct")}
                onPress6={() => navigation.navigate("laporan")}
            />
        );
    };
    return (
        <View
            style={{ flex: 1, backgroundColor: "#FBFBFB", paddingBottom: 20 }}>
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
                    <TouchableOpacity activeOpacity={0.7}>
                        <Image source={photo} />
                    </TouchableOpacity>
                </View>
                {/* End top menu */}
                <View style={{ marginHorizontal: 30, marginTop: 15 }}>
                    <Text style={{ fontWeight: "500", fontSize: 14 }}>
                        Good Morning, {username}
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
                            width: "100%",
                        }}>
                        <Image source={Search} />
                        <TextInput
                            placeholder="Search..."
                            style={{ width: "100%" }}
                            onChangeText={(text) => setSearch(text)}
                        />
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
                        {search?.length > 0 && searchProduct.length > 0
                            ? searchProduct.map((a, index) => (
                                  <TouchableOpacity
                                      key={index}
                                      onPress={() =>
                                          navigation.navigate("DetailProduct")
                                      }
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
                                          width: 155,
                                      }}>
                                      <Image
                                          src={a?.img_product}
                                          style={{
                                              width: 144,
                                              height: 130,
                                              borderRadius: 20,
                                          }}
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
                                                  {a.nama_product}
                                              </Text>
                                              <Text
                                                  style={{
                                                      marginTop: 5,
                                                      fontSize: 10,
                                                  }}>
                                                  {a.deskripsi.substring(0, 30)}
                                                  ...
                                              </Text>
                                          </View>
                                      </View>

                                      <View
                                          style={{
                                              flexDirection: "row",
                                              alignItems: "center",
                                              justifyContent: "space-between",
                                          }}>
                                          <Text>
                                              Rp.
                                              {a.harga_product.toLocaleString()}
                                          </Text>
                                          <Image source={Add} />
                                      </View>
                                  </TouchableOpacity>
                              ))
                            : products
                                  .filter((a) => a.kategori_product === filter)
                                  .map((item, index) => (
                                      <TouchableOpacity
                                          key={index}
                                          onPress={() =>
                                              navigation.navigate(
                                                  "DetailProduct"
                                              )
                                          }
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
                                              width: 155,
                                          }}>
                                          <Image
                                              src={item?.img_product}
                                              style={{
                                                  width: 144,
                                                  height: 130,
                                                  borderRadius: 20,
                                              }}
                                          />
                                          <View
                                              style={{
                                                  flexDirection: "row",
                                                  justifyContent:
                                                      "space-between",
                                                  marginTop: 10,
                                              }}>
                                              <View>
                                                  <Text
                                                      style={{
                                                          fontWeight: "500",
                                                          fontSize: 14,
                                                      }}>
                                                      {item.nama_product}
                                                  </Text>
                                                  <Text
                                                      style={{
                                                          marginTop: 5,
                                                          fontSize: 10,
                                                      }}>
                                                      {item.deskripsi.substring(
                                                          0,
                                                          30
                                                      )}
                                                      ...
                                                  </Text>
                                              </View>
                                          </View>

                                          <View
                                              style={{
                                                  flexDirection: "row",
                                                  alignItems: "center",
                                                  justifyContent:
                                                      "space-between",
                                              }}>
                                              <Text>
                                                  Rp.
                                                  {item.harga_product.toLocaleString()}
                                              </Text>
                                              <Image source={Add} />
                                          </View>
                                      </TouchableOpacity>
                                  ))}

                        {/* End Product */}
                    </ScrollView>
                </View>
                {/* End Product */}

                {/* Special offer */}
                <View
                    style={{
                        marginTop: 20,
                        width: "88%",
                        marginHorizontal: "auto",
                        borderRadius: 10,
                        backgroundColor: "#FAF7F3",
                    }}>
                    {/* Product */}
                    <Text style={{ fontWeight: "500", padding: 10 }}>
                        Special Offer
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            flexWrap: "wrap",
                            justifyContent: "center",
                        }}>
                        {products
                            .filter((item, index) => item.promo !== null)
                            .map((a, index) => (
                                <TouchableOpacity
                                    key={index}
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
                                        width: 155,
                                    }}>
                                    <Image
                                        src={a.img_product}
                                        style={{
                                            width: 144,
                                            height: 130,
                                            borderRadius: 20,
                                        }}
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
                                                {a.nama_product}
                                            </Text>
                                            <Text
                                                style={{
                                                    marginTop: 5,
                                                    fontSize: 10,
                                                }}>
                                                {a.deskripsi.substring(0, 35)}
                                                ...
                                            </Text>
                                        </View>
                                    </View>

                                    <View
                                        style={{
                                            flexDirection: "row",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                        }}>
                                        <Text>
                                            Rp{a.harga_product.toLocaleString()}
                                        </Text>
                                        <Image source={Add} />
                                    </View>
                                </TouchableOpacity>
                            ))}
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
