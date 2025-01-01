import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL //API (cloud function) URL
});

export default instance;