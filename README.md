# React Native E-commerce

E-commerce mobile application developed using React Native :necktie: :tophat:

- React Native
- Redux / Saga
- AXIOS API
- React Navigation
- Unit Testing via RNTL

## Dependencies

You must have a package manager ( yarn or npm ) installed 

## Installation

To install all dependencies, you need to run the following command:

```sh
$ yarn
```
or 

```sh
$ npm i
```

To run the project, you must have installed Android and/or iOS environment. Use 'run-ios' or 'run-android':

```sh
$ react-native run-ios
```

```sh
$ react-native run-android
```

## Demo
<p align="center">
    <img src="https://tshirt-images-rn.s3.ap-south-1.amazonaws.com/Demo.gif" width="200" height="400">
</p>


## Workflow
<p align="center">
    <img src="https://tshirt-images-rn.s3.ap-south-1.amazonaws.com/Homepage.png" width="200" height="400">
</p>
1. onMount - First screen to be rendered is the homescreen which consists of 3 main components:

- Navbar
- SearchBar
- ProductList

The navbar and searchbar are static for all pages to match the layout as provided.
The productlist displays the data received via redux saga using an api which calls the json store on aws S3.

onMount -> useEffect -> runs Redux Saga -> calls API -> receives data -> calls reducer ->updates the state -> Productlist component rendered
<br>
<hr>
<br>

<p align="center">
    <img src="https://tshirt-images-rn.s3.ap-south-1.amazonaws.com/Product+detail+page.gif" width="200" height="400">

2. press any product - Pressing on any product will take you to the Product-Detail screen which renders based on the information received via useSelector and Navigation props(id) from the store.

<br>
<hr>
<br>
 <p align="center">
    <img src="https://tshirt-images-rn.s3.ap-south-1.amazonaws.com/Similar+products.gif" width="200" height="400">
</p>
3. Similar products - Logic used is filter the type of the product equal to the type of the remaining productdata. On pressing any similar product will navigate to the respective Product Detail Page.

<br>
<hr>
<br>

4. press the Logo - Pressing the logo will take you directly to the homescreen from any screen

<br>
<hr>
<br>

4. Menubar - Navigation menu bar for individual category

<br>
<hr>
<br>
<p align="center">
    <img src="https://tshirt-images-rn.s3.ap-south-1.amazonaws.com/Searchbar.gif" width="200" height="400">
</p>
5. Searchbar - on pressing the Searchbar, it filters the products rendered in the product list based on the title. on pressing the product, the searchbar gets unclicked, keyboard goes away and renders the pressed product detail page.

## Tests

Run the following command to execute all tests:

```sh
$ yarn test
```





