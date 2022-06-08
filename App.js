import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";

import store from "./src/redux/store";
import HomeScreen from "./src/screens/HomeScreen";
import Men from "./src/screens/Men";
import Women from "./src/screens/Women";
import Kids from "./src/screens/Kids";
import FTW from "./src/screens/FTW";
import Accessories from "./src/screens/Accessories";
import Navbar from "./src/components/Navbar";
import ProductItem from "./src/screens/Product_detail";
import SearchBar from "./src/components/SearchBar";


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Provider store={store} >

        {/* Navbar and SearchBar will be shown on all screens for Navigation purposes */}

        <Navbar />
        <SearchBar />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,    //In order to avoid all headers on individual screens to match the layout provided.
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ProductPage" component={ProductItem} />
          <Stack.Screen name="Men" component={Men} />
          <Stack.Screen name="Women" component={Women} />
          <Stack.Screen name="Kids" component={Kids} />
          <Stack.Screen name="FTW" component={FTW} />
          <Stack.Screen name="Accessories" component={Accessories} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
