import axios from 'axios';

export const recipesBaseEndpoint = '/recipes';
export const recipesPopularEndpoint = '/recipes/popular';
export const recipesRatingEndpoint = '/rating';

export const areasEndpoint = '/areas';
export const categoriesEndpoint = '/categories';
export const eventsEndpoint = '/events';
export const ingredientsEndpoint = '/ingredients';
export const orderEndpoint = '/orders/add';

export const defaultHitsPerPage = 9;

export const axiosInstanse = axios.create();
axiosInstanse.defaults.baseURL = 'https://tasty-treats-backend.p.goit.global/api';
axiosInstanse.defaults.validateStatus = (status) => status === 200;
axiosInstanse.defaults.headers.common['Content-Type'] = 'application / json';
