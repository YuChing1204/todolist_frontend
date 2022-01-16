import axios from "axios";

export default axios.create({
    baseURL: "https://whispering-sands-31502.herokuapp.com/"
    // baseURL: process.env.PORT || 3000
});