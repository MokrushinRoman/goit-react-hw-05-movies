import axios from 'axios';
import { API_KEY, BASE_URL } from 'services';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export const getPopularMovies = async abortController => {
  const { data } = await axios.get(`/trending/movie/day`, {
    signal: abortController.signal,
  });
  return data;
};

export const getMoviesByQuery = async (query, abortController) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query: query,
    },
    signal: abortController.signal,
  });
  return data;
};

export const getMovieById = async (id, abortController) => {
  const { data } = await axios.get(`/movie/${id}`, {
    signal: abortController.signal,
  });
  return data;
};

export const getMovieCredits = async (id, abortController) => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    signal: abortController.signal,
  });
  return data;
};

export const getMovieReviews = async (id, abortController) => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    signal: abortController.signal,
  });
  return data;
};
