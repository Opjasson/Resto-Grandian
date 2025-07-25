import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const data = [
    {
        id: "1",
        date: "01.01.2000",
        title: "Материалы",
        location: "ЖК Восток",
        names: ["Василий Упкин", "Евгений Петров"],
        price: "158 000",
    },
    {
        id: "2",
        date: "01.01.2000",
        title: "Отделочные работы",
        location: "ЖК Восток",
        names: ["Евгений Петров", "Михаил Гончаров"],
        price: "78 600",
    },
    {
        id: "3",
        date: "01.01.2000",
        title: "Отделочные работы",
        location: "ЖК Восток",
        names: ["Евгений Петров", "Михаил Гончаров"],
        price: "78 600",
    },
];

const Card = ({ item }) => (
    <View style={styles.card}>
        <View style={styles.rowBetween}>
            <Text style={styles.date}>{item.date}</Text>
            <Text style={styles.type}>
                Тип <AntDesign name="checkcircle" size={16} color="green" />
            </Text>
        </View>
        <View style={styles.titleRow}>
            <View style={styles.verticalLine} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.location}>{item.location}</Text>
                {item.names.map((name, idx) => (
                    <Text key={idx} style={styles.name}>
                        {name}
                    </Text>
                ))}
            </View>
        </View>
        <View style={styles.rowBetween}>
            <TouchableOpacity>
                <Text style={styles.showLess}>Показать меньше</Text>
            </TouchableOpacity>
            <Text style={styles.price}>{item.price}</Text>
        </View>
    </View>
);
  

const HistoryPesanan = () => {
  return (
      <View style={styles.container}>
          <FlatList
              contentContainerStyle={{ paddingBottom: 100 }}
              data={data}
              renderItem={({ item }) => <Card item={item} />}
              keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.fab}>
              <AntDesign name="plus" size={30} color="#fff" />
          </TouchableOpacity>
      </View>
  );
}

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

export default HistoryPesanan
