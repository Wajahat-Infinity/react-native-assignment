import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// Screens
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegistrationScreen";
import ItemsListScreen from "./screens/ItemsListScreen";
import CartScreen from "./screens/CartScreen";

// Dummy data for ItemsListScreen
const items = [
  {
    id: 1,
    title: "Product 1",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://th.bing.com/th/id/R.f6bb2c25ec0cf267151f1cbce2e7155e?rik=RgW7Z773TqbGag&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?cs=srgb&dl=cosmetic-products-3018845.jpg&fm=jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db043144358655.58109bad98b7a.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://www.gtlaw-consumerproductscounselor.com/files/2014/07/shutterstock_64958509.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://th.bing.com/th/id/R.f6bb2c25ec0cf267151f1cbce2e7155e?rik=RgW7Z773TqbGag&pid=ImgRaw&r=0",
  },
  {
    id: 1,
    title: "Product 1",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://th.bing.com/th/id/R.f6bb2c25ec0cf267151f1cbce2e7155e?rik=RgW7Z773TqbGag&pid=ImgRaw&r=0",
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?cs=srgb&dl=cosmetic-products-3018845.jpg&fm=jpg",
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/db043144358655.58109bad98b7a.jpg",
  },
  {
    id: 4,
    title: "Product 4",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://www.gtlaw-consumerproductscounselor.com/files/2014/07/shutterstock_64958509.jpg",
  },
  {
    id: 5,
    title: "Product 5",
    description: "This is a product description.",
    price: 10.99,
    image:
      "https://th.bing.com/th/id/R.f6bb2c25ec0cf267151f1cbce2e7155e?rik=RgW7Z773TqbGag&pid=ImgRaw&r=0",
  },
  // ... more items
];

const Tab = createBottomTabNavigator();

const App = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart data from storage (if available)
  }, []);

  const addToCart = (item) => {
    setCart((currentCart) => [...currentCart, item]);
  };

  const removeFromCart = (item) => {
    setCart((currentCart) => currentCart.filter((i) => i.id !== item.id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ItemsList"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              Login: "login",
              Register: "account-plus",
              ItemsList: "shopping",
              Cart: "cart",
            };

            return (
              <MaterialCommunityIcons
                name={icons[route.name]}
                size={size}
                color={focused ? color : "#a9a9a9"}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Login" component={LoginScreen} />
        <Tab.Screen name="Register" component={RegisterScreen} />
        <Tab.Screen
          name="ItemsList"
          component={ItemsListScreen}
          initialParams={{ items, addToCart }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          initialParams={{ cart, removeFromCart }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
