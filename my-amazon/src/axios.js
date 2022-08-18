import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/my-e4355/us-central1/api'    // api(cloud function) url
});

export default instance;