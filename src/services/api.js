import axios from "axios";

export const Movies = type => { // Utilitário para este Web Service
  let movieAPI = '1ee1008f'
  return axios.create({
    baseURL: `https://www.omdbapi.com/?apikey=${movieAPI}&${type}` // Url base que será utilizada
  });
};