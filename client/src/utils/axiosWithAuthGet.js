import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";


export const axiosWithAuthGet = () => {
  return axiosWithAuth()
  .get('/api/colors')
      .then(res => {
        return res.data
      })
};