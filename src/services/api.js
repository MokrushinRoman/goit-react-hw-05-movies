import axios from 'axios';
import { API_KEY, BASE_URL } from 'services';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getPopularMovies = async () => {
  const { data } = await axios.get(`/trending/movie/day`);
  return data;
};

export const getMoviesByQuery = async (query, page) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: query,
      page: page,
    },
  });
  console.log(data);
  return data;
};

export const getMovieById = async id => {
  const { data } = await axios.get(`/movie/${id}`);
  console.log(data);
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  console.log(data);
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  console.log(data);
  return data;
};
