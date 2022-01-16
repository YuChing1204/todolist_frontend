import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3030"
    // baseURL: process.env.PORT || 3000
});