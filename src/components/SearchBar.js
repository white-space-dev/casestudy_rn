import React from "react";
import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const searchTerm = useSelector((state) => state.searchTerm.searchTerm);
  const clicked = useSelector((state) => state.searchTerm.clicked);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const setSearchTerm = (text) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: text });
  };
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBar_clicked : styles.searchBar_unclicked}
      >
        <TextInput
          placeholder="SEARCH"
          style={styles.input}
          value={searchTerm}
          onChangeText={setSearchTerm}
          onFocus={() => {
            dispatch({ type: "FOCUS_SEARCHBAR" });
            navigation.navigate("Home");
          }}
        />
        <FontAwesome name="search" size={15} style={styles.icon} />
      </View>
      {clicked && (
        <View style={styles.closeIcon}>
          <FontAwesome
            name="close"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              Keyboard.dismiss();
              dispatch({type:'CLEAR_SEARCH_TERM'});
            }}
          />
        </View>
      )}
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 30,
    paddingLeft: 5,
    margin: 20,
  },
  searchBar_unclicked: {
    fontSize: 12,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "lightgrey",
    borderRadius: 5,
    borderWidth: 0.5,
  },
  searchBar_clicked: {
    width: "90%",
    fontSize: 12,
    padding: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "lightgrey",
    borderRadius: 5,
    borderWidth: 0.5,
  },
  input: {
    flex: 9,
  },
  icon: {
    justifyContent: "flex-end",
    flex: 1,
    marginLeft: 100,
  },
  closeIcon: {
    justifyContent: "flex-end",
  },
});
