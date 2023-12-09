import React, { useEffect } from "react";

import { View, Text, Button, TextInput } from "react-native";

const CartScreen = ({ route, navigation }) => {
  const { cart, removeFromCart } = route.params;
  const totalAmount = cart.reduce((sum, item) => sum + item.price, 0);
  useEffect(() => {
    navigation.navigate("CartScreen", { cart });
  }, [cart]);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const handleCheckout = () => {
    alert("Checkout successful!");
    navigation.navigate("ItemsList");
  };

  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 5,
        margin: 10,
        padding: 15,
      }}
    >
      <Text style={{ fontSize: 24 }}>Cart</Text>
      {cart.length === 0 && <Text>Your cart is empty.</Text>}
      {cart.map((item) => (
        <View key={item.id} style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>{item.title}</Text>
          <Text>Quantity: {item.quantity}</Text>
          <Text style={{ fontWeight: "bold" }}>
            ${item.price * item.quantity}
          </Text>
          <Button title="Remove" onPress={() => handleRemoveFromCart(item)} />
        </View>
      ))}
      <Text style={{ fontWeight: "bold" }}>Total: ${totalAmount}</Text>
      <Button
        title="Checkout"
        onPress={handleCheckout}
        disabled={cart.length === 0}
      />
    </View>
  );
};

export default CartScreen;
