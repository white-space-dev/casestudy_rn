import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView testID="NavBar">
      <View
        style={{
          flexDirection: "row",
          height: 120,
          justifyContent: "space-around",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.logo}
        >
          <Text testID="LOGO" style={{ fontSize: 50, fontWeight: "bold", color: "black" }}>
            LOGO
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          testID="AccountIcon"
          onPress={() => navigation.navigate("Account")}
          style={styles.account}
        >
          <MaterialCommunityIcons size={30} name="account-circle" />
        </TouchableOpacity>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Men");
          }}
        >
          <Text>MEN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Women")}>
          <Text>WOMEN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Kids")}>
          <Text>KIDS</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FTW")}>
          <Text>FTW</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Accessories")}>
          <Text>ACCESSORIES</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  logo: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    flex: 9,
    height: 100,
    left: "15%",
  },
  account: {
    flex: 1,
    justifyContent: "center",
    marginTop: 30,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
    marginRight: 20,
  },
});
