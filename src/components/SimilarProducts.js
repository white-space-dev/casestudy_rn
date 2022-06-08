import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import Products from '../data'

const SimilarProducts = () => {


  const similarproducts = Products.slice(1,4);

  return (
    <View>
      <Text style={styles.similarProducts}>SEE MORE PRODUCTS</Text>
      <View style={{ flexDirection: "row" }}>
        {similarproducts.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate("ProductPage", { id: item.id })
                scrollToTopHandler()
              }}
            >
              <Image
                style={styles.similarImage}
                source={{ uri: item.imageURL }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default SimilarProducts;

const styles = StyleSheet.create({
  similarProducts: {
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 15,
    paddingBottom: 20,
  },
  similarImage: {
    backgroundColor: "lightgrey",
    width: 50,
    height: 50,
    alignItems: "center",
    borderRadius: 2,
    marginRight: 15,
    marginBottom: 20,
  },
});
