import axios from 'axios';

async function getUserApi() {
  const userAPI = await axios
    .get('https://rickandmortyapi.com/api/character/2')
    .then(request => {
      // console.log(request.data)
      return request.data;
      
    }).catch(err => console.log(err));
  return userAPI;
}

export default getUserApi;