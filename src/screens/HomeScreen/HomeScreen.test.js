// On mount should show the logo, menubar, searchbar and ActivityIndicator
// On mount should show more than 0 products in the list.
// On pressing Account button, should go to account screen and display image and name
// On pressing Logo, should go to the homepage with the logo, menubar, searchbar and Product Lists


import React from "react";
import { fireEvent, render, waitFor, debug } from "@testing-library/react-native";

import App from "../../../App";
import ProductListView from "../Product_List";
import HomeScreen from ".";

describe("HomeScreen", () => {
  it("should show the logo, menubar, searchbar and Product Lists", async () => {
    const page = render(<App />);
    expect(page.queryAllByTestId("SearchBar").length).toEqual(1);
    expect(page.queryAllByTestId("NavBar").length).toEqual(1);
    expect(page.queryAllByTestId("Indicator").length).toEqual(1);
  }),
    it("should show more than 0 products in the list.", async () => {
      const page = render(<App />);
      await waitFor(() => page.getByTestId("FlatListView"));
      expect(page.getAllByTestId("ProductItem").length).toBeGreaterThan(0);
  }),
    it("should go to account screen and display image and name on pressing Account button", () => {
      const page = render(<App />);
      fireEvent.press(page.getByTestId("AccountIcon"))
      expect(page.queryAllByTestId("ProfileImage").length).toBe(1)
      expect(page.queryAllByTestId("ProfileName").length).toBe(1)
  }),
  it("should go to the homepage with the logo, menubar, searchbar and Product Lists on pressing the Logo", async () => {
    const page = render(<App />);
    fireEvent.press(page.getByTestId("AccountIcon"))
    fireEvent.press(page.getByTestId("LOGO"))
    expect(page.queryAllByTestId("SearchBar").length).toEqual(1);
    expect(page.queryAllByTestId("NavBar").length).toEqual(1);
    await waitFor(() => page.getByTestId("FlatListView"));
    expect(page.getAllByTestId("ProductItem").length).toBeGreaterThan(0);
})
});
