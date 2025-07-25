import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

interface props {
    navigation : NavigationProp<any, any>
}

const DetailProduct : React.FC<props> = ({navigation}) => {
    const [cupSize, setCupSize] = useState("Small");
    const [sugarLevel, setSugarLevel] = useState("No Sugar");

    const renderOption = (options, selected, setSelected, style) => {
        return options.map((option) => (
            <TouchableOpacity
                key={option}
                style={[styles.optionButton, selected === option && style]}
                onPress={() => setSelected(option)}>
                <Text
                    style={[
                        styles.optionText,
                        selected === option && styles.selectedText,
                    ]}>
                    {option}
                </Text>
            </TouchableOpacity>
        ));
    };

  return (
      <ScrollView style={styles.container}>
          {/* Header Image */}
          <View style={styles.imageContainer}>
              <Image
                  source={{
                      uri: "https://images.unsplash.com/photo-1605479258198-352b05dffb6f",
                  }}
                  style={styles.image}
              />
              <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
                  <AntDesign name="arrowleft" size={24} color="#fff" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.heartButton}>
                  <AntDesign name="hearto" size={24} color="#fff" />
              </TouchableOpacity>
          </View>

          {/* Content */}
          <View style={styles.content}>
              <View style={styles.titleRow}>
                  <View>
                      <Text style={styles.title}>Cappuccino</Text>
                      <Text style={styles.subtitle}>With Sugar</Text>
                  </View>
                  <View style={styles.rating}>
                      <FontAwesome name="star" size={14} color="#fff" />
                      <Text style={styles.ratingText}>4.8</Text>
                  </View>
              </View>

              <Text style={styles.sectionTitle}>Cup Size</Text>
              <View style={styles.optionRow}>
                  {renderOption(
                      ["Small", "Medium", "Large"],
                      cupSize,
                      setCupSize,
                      styles.selectedOption
                  )}
              </View>

              <Text style={styles.sectionTitle}>Level Sugar</Text>
              <View style={styles.optionRow}>
                  {renderOption(
                      ["No Sugar", "Low", "Medium"],
                      sugarLevel,
                      setSugarLevel,
                      styles.selectedSugar
                  )}
              </View>

              <Text style={styles.sectionTitle}>About</Text>
              <Text style={styles.aboutText}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt...
                  <Text style={{ color: "#1E5128" }}> Read More</Text>
              </Text>

              <View style={styles.cartRow}>
                  <TouchableOpacity style={styles.cartButton}>
                      <Text style={styles.cartText}>Add to cart</Text>
                  </TouchableOpacity>
                  <Text style={styles.price}>Rp 50.000</Text>
              </View>
          </View>
      </ScrollView>
  );
}

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

export default DetailProduct
