import { API_KEY, API_URL } from './constants';
import axios from 'axios';

const setApiKey = (url) => `${url}?apiKey=${API_KEY}`;

export const getRecipes = async (query) => {
  const url = `${setApiKey(`${API_URL}/complexSearch`)}&query=${query}`;
  console.log('url', url);
  const response = await axios(url);
  return response.data.results;
};

export const getRecipe = async (id) => {
  const url = `${setApiKey(
    `${API_URL}/${id}/information`
  )}&includeNutrition=false`;
  const response = await axios(url);
  return response.data;
};

export const getURlParam = () => {
  const href = window.location.href;
  const url = new URL(href);
  const param = url.searchParams.get('query');
  return param;
};

export const setURLParam = (param) => {
  window.history.replaceState(null, null, `?query=${param}`);
};
