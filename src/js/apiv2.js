import axios from 'axios';
const API_ID = 'connections-api';
const errorHandler = error => {
  if (error.response.status === 400) {
    alert("We're sorry, but you've reached the end of search results.");
  } else if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message);
  }
  console.log(error.config);
};

const contApi = axios.create({
  baseURL: `https://${API_ID}.mockapi.io`,
  timeout: 10000,
});

const setAuthHeader = token =>
  (contApi.defaults.headers.common['Authorisation'] = `Bearer ${token}`);

  const clearAuthHeader = token =>
    contApi.defaults.headers.common['Authorisation'] = '';

const contApiGet = async () => {
  const response = await contApi.get('/contacts').catch(e => errorHandler(e));
  return response.data;
};

const contApiNew = async oBjNameNumber => {
  const response = await contApi
    .post('/contacts/', oBjNameNumber)
    .catch(e => errorHandler(e));
  return response.data;
};

const contApiUpdate = async (id, oBjNameNumber) => {
  const response = await contApi
    .patch(`/contacts/${id}`, oBjNameNumber)
    .catch(e => errorHandler(e));
  return response;
};

const contApiDelete = async id => {
  const response = await contApi
    .delete(`/contacts/${id}`)
    .catch(e => errorHandler(e));
  return response;
};

const contApiUserCreate = async ObjNameEmailPass => {
  const response = await contApi
    .post('/users/signup', ObjNameEmailPass)
    .catch(e => errorHandler(e));
    setAuthHeader(response.data.token);
  return response.data;
};

const contApiUserLogin = async ObjEmailPass => {
  const response = await contApi
    .post('/users/login', ObjEmailPass)
    .catch(e => errorHandler(e));
    setAuthHeader(response.data.token)
  return response.data;
};

const contApiUserLogout = async () => {
  //TOKEN NEEDED
  const response = await contApi
    .post('/users/logout')
    .catch(e => errorHandler(e));
    clearAuthHeader()
  return response.data;
};

const contApiUserCurrent = async () => {
  //TOKEN NEEDED
  const response = await contApi
    .get('/users/current')
    .catch(e => errorHandler(e));
  return response.data;
};

export const getPromiseData = async promise =>
  await promise.then(data => {
    return data;
  });
const apiv2 = {
  contApiUserCreate,
  contApiUserLogin,
  contApiUserLogout,
  contApiUserCurrent,
  contApiGet,
  contApiNew,
  contApiDelete,
  contApiUpdate,
  getPromiseData,
};
export default apiv2;