import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
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
        testID="LOGO"
          onPress={() => {
            navigation.navigate("Home")
            dispatch({type:'CLEAR_SEARCH_TERM'})
        }}
          style={styles.logo}
        >
          <Text
            style={{ fontSize: 50, fontWeight: "bold", color: "black" }}
          >
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
        <TouchableOpacity onPress={() => navigation.navigate("Men")}>
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
