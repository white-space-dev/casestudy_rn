import { StyleSheet, View, FlatList, ActivityIndicator } from "react-native";
import Navbar from '../../components/Navbar'
import SearchBar from '../../components/SearchBar'
import ProductListView from "../Product_List/ProductListScreen";
import Products from '../../data'
import ProductItem from "../Product_detail/Product_Page";

const HomeScreen = () => {
  return (
    <View>
      <Navbar />  
      <SearchBar /> 
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
