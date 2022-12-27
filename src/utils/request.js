import axios from "axios";

// Create an axios instance
const HttpService = axios.create({
  baseURL: "https://cargobot.alphaasimov.com/v1",
  timeout: 2000, // request timeout
});

export default HttpService;