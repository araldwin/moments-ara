import axios from "axios";

axios.defaults.baseURL = 'https://moments-ara-ef26b303c308.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/from-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();