import React, { useEffect, useState } from "react";

//Module Imports
import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";

//Component Imports
import ProductListView from "../Product_List";
import Products from "../../data";
import ProductItem from "../Product_detail";

// redux imports
import {
  FETCH_USER_REQUEST,
  GET_PRODUCTS_REQUEST,
} from "../../redux/actions/actionTypes";

const HomeScreen = (props) => {
  const isloading =
    props.isloading || useSelector((state) => state.products.loading);
  const products = useSelector((state) => state.products.products);
  const searchTerm = useSelector((state) => state.searchTerm.searchTerm);
  const dispatch = useDispatch();

  const filteredProducts =
    props.mockData ||
    products?.filter(
      (
        product //Filter function to display products using the searchbar
      ) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase())
    );

  useEffect(() => {                                  
    dispatch({ type: GET_PRODUCTS_REQUEST });
    dispatch({ type: FETCH_USER_REQUEST });
  }, []);

  return (
    <View style={{ backgroundColor: "white" }}>

    {isloading ? (
      <ActivityIndicator testID="Indicator" size={'large'} style={styles.loadingIndicator}/>
    ) : (
      <View testID="FlatListView">
      <FlatList
        testID="FlatList"
        data={filteredProducts}
        renderItem={({ item }) => <ProductListView item={item} />}
      />
      </View>
    )}
  </View>
);
};

export default HomeScreen;

const styles = StyleSheet.create({
  loadingIndicator: {
    height:1000,
    justifyContent: "center",
    alignContent: "center",
  },
});
