import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import React from "react";
import SimilarProducts from "../../components/SimilarProducts";

const ProductItem = ({ item }) => {
  const {
    title,
    price,
    imageURL,
    description,
    colors_available,
    sizes_available,
  } = item;
  
  return (
    <View style={{ backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.productContainer}>
          <Image style={styles.productImage} source={{ uri: imageURL }} />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginVertical: 5 }}>
            {title}
          </Text>
          <Text style={{ marginBottom: 20 }}>AED {price}</Text>

          <View style={{ flexDirection: "row" }}>
            <Text>
              Available Sizes :{" "}
              {sizes_available.map((size) => (
                <Text key={size}> {size} </Text>
              ))}
            </Text>
          </View>

          <Text style={{ marginVertical: 15 }}>Colors</Text>
          <View style={{ flexDirection: "row" }}>
            {colors_available.map((color) => (
              <View
                key={color}
                style={[styles.box, { backgroundColor: color }]}
              />
            ))}
          </View>
          <View style={styles.blankspace} />
          <Text
            style={{ fontWeight: "bold", fontSize: 15, marginVertical: 15 }}
          >
            DESCRIPTION
          </Text>
          <Text>{description}</Text>
          <Text />
          <Text
            style={{
              paddingBottom: 15,
              borderBottomWidth: 0.2,
              borderColor: "lightgrey",
            }}
          >
            Short Sleeved Tshirt {"\n"}
            Round Neck {"\n"}
            Single Color Tshirt
          </Text>
          <SimilarProducts />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    // height: 1650,
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: 20,
  },
  productImage: {
    backgroundColor: "lightgrey",
    width: "100%",
    height: 400,
    alignItems: "center",
    resizeMode: "contain",
  },
  box: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 3,
    marginBottom: 25,
    marginRight: 5,
  },
  blankspace: {
    backgroundColor: "lightgrey",
    height: 50,
    width: "100%",
    borderRadius: 3,
  },
});
