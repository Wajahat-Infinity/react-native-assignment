import React, { useState } from "react";
import { View, Text, Button, TextInput } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (username === "" || password === "" || email === "") {
      alert("Please fill all fields.");
      return;
    }

    // Simulate registration
    // Replace with actual registration code using API or database
    alert("User registered successfully!");
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        backgroundColor: "#f0f8ff",
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
        placeholder="Username"
        placeholderTextColor="#999"
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
        placeholderTextColor="#999"
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={{
          backgroundColor: "#fff",
          borderRadius: 5,
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 10,
          marginBottom: 10,
        }}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        title="Register"
        style={{
          backgroundColor: "#28a745",
          borderRadius: 5,
          padding: 10,
          marginTop: 10,
        }}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default RegisterScreen;
