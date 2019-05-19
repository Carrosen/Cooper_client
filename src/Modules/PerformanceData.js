import axios from 'axios'
import { storeAuthCredentials } from './Auth'

const apiUrl = 'https://cooper-backend.herokuapp.com/api/v1';

const saveData = async (result, distance) => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"    
  };
  const path = apiUrl + '/performance_data';
  return new Promise ((resolve, reject) => {
    axios.post(path, {
      performance_data: { data: { message: result, distance: distance }}
    }, {
      headers: headers
    })
    .then(response => {
      storeAuthCredentials(response);
      resolve(response.data.message);
    });
  });
};

const getData = async () => {
  let headers = await sessionStorage.getItem("credentials");
  headers = JSON.parse(headers);
  headers = {
    ...headers,
    "Content-type": "application/json",
    Accept: "application/json"    
  };
  const path = apiUrl + '/performance_data';
  return new Promise ((resolve, reject) => {
    axios
      .get(path, {
        headers: headers  
      })
      .then(response => {
        storeAuthCredentials(response);
        resolve(response);
      });
  });
};

export { getData, saveData }