import axios from 'axios';

async function getProductsApi() {
  const productsAPI = await axios
    .get('https://product-data-rn.s3.ap-south-1.amazonaws.com/productsData2.json')
    .then(request => {
      // console.log(request.data)
      return request.data;
      
    }).catch(err => console.log(err));
  return productsAPI;
}

export default getProductsApi;