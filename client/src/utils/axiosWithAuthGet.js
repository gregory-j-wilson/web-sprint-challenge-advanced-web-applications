import axios from "axios";


export const axiosWithAuthGet = () => {
  return axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: JSON.parse(localStorage.getItem("token"))
    }
  })
  .get('/api/colors')
      .then(res => {
        return res.data
      })
};