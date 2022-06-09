import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { useRoute, useScrollToTop } from "@react-navigation/native";
import { useSelector } from "react-redux";

import SimilarProducts from "../../components/SimilarProducts";

const ProductItem = () => {
  //for passing the item id from the parent component
  const Route = useRoute();
  const { id } = Route.params;

  // getting products from the redux store
  const products = useSelector((state) => state.products.products);
  const product = products.filter((item) => item.id == id); //filtering out the product corresponding to the ID into an array
  const item = Object.assign({}, ...product); // converting an array to an object

  //destructuring the parameters
  const {
    imageURL,
    title,
    price,
    description,
    type,
    sizes_available,
    colors_available,
  } = item; 

  //to scrollToTop when clicking on the similar products
  const scrollToTopHandler = () =>
    ref.current.scrollTo({ x: 0, animated: true });
  const ref = React.useRef();
  return (
    <View
      testID="ProductDetail"
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <ScrollView ref={ref}>
        <View style={styles.productContainer}>
          <Image testID="ProductDetImage" style={styles.productImage} source={{ uri: imageURL }} />
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
          <SimilarProducts
            itemType={type}
            id={id}
            scrollToTopHandler={scrollToTopHandler}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  productContainer: {
    // width: '200%',

    flex: 1,
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
