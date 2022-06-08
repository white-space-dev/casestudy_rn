import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";

import ProductListView from "../Product_List";
import Products from '../../data'
import ProductItem from "../Product_detail";

const HomeScreen = () => {
  return (
    <View>
      <ProductItem item = {Products[0]}/>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  loadingText: {
    justifyContent: "center",
    alignContent: "center",
  },
});
