import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import React, { useState } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const SearchBar = () => {
  const [clicked, setClicked] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
              setSearchTerm("");
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
