import React from "react";
import { View, Text, Button, TextInput, Image } from "react-native";

const ItemsListScreen = ({ route, navigation }) => {
  const { items, addToCart } = route.params;

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <View style={{ backgroundColor: "#f5f5f5" }}>
      {items.map((item) => (
        <View
          key={item.id}
          style={{
            backgroundColor: "#fff",
            borderRadius: 5,
            margin: 10,
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.title}</Text>
          <Text style={{ color: "#999" }}>{item.description}</Text>
          <Text style={{ fontWeight: "bold" }}>${item.price}</Text>
          <Image
            source={{ uri: item.image }}
            style={{ width: 60, height: 60, borderRadius: 5 }}
          />
          <Button
            title="Add to Cart"
            style={{
              backgroundColor: "#ff6347",
              borderRadius: 5,
              padding: 10,
              marginTop: 10,
            }}
            onPress={() => handleAddToCart(item)}
          />
        </View>
      ))}
    </View>
  );
};

export default ItemsListScreen;
