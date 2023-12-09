import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Validate inputs
    if (username === "" || password === "") {
      alert("Please fill all fields.");
      return;
    }

    // Simulate login
    // Replace with actual login code using API or database
    if (username === "admin" && password === "password") {
      navigation.navigate("ItemsList");
    } else {
      alert("Invalid username or password.");
    }
  };

  return (
    <View
      style={{
        backgroundColor: "#f5f5dc",
        paddingHorizontal: 20,
        paddingTop: 50,
      }}
    >
      <TextInput
        style={{
          backgroundColor: "#fff",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 10,
          marginBottom: 10,
        }}
        placeholderTextColor="#999"
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={{
          backgroundColor: "#fff",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 10,
        }}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        title="Login"
        style={{
          backgroundColor: "#007bff",
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
        }}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default LoginScreen;
