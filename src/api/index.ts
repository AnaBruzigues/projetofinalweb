import axios from "axios";

const api = axios.create({
  baseURL: "https://apilocaljobs1.herokuapp.com"
})

export default api;