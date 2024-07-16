import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://tomo.deltalab.dev/"
})

export default baseAxios