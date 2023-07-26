import axios from "axios";

axios.defaults.baseURL = 'https://ara-drf-api-3e0a17867bfa.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/from-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();