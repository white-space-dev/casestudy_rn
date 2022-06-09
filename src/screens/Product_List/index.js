import React, { useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ProductListView = (item) => {
  const { imageURL, title, price } = item.item || {};
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View testID = "ProductItem">
      <TouchableOpacity
        onPress={(id) => {
          navigation.navigate("ProductPage", { id: item.item.id });
          dispatch({ type: "CLEAR_SEARCH_TERM" });
        }}
      >
        <View style={styles.root}>
          <Image testID="ListImage"
            style={styles.image}
            source={{
              uri: imageURL,
            }}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={3}>
              {title}
            </Text>
            <Text style={styles.price}>AED {price}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductListView;

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 3,
  },
  image: {
    width: 120,
    height: 120,
    paddingVertical: 10,
    backgroundColor: "lightgrey",
  },
  rightContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
  },
  price: {
    fontSize: 15,
    marginTop: 10,
  },
});
