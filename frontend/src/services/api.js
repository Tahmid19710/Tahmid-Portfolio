import axios from "axios";

const API = axios.create({
    baseURL:"https://tahmid-portfolio-backend.onrender.com/api"
});

export default API;