import axios from "axios";

export const apiKey = "6664ab27";

export default axios.create({
  baseURL: "http://www.omdbapi.com",
});
