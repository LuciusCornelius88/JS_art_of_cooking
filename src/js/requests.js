import * as requestConfig from './config';

const { axiosInstanse } = requestConfig;

export async function fetchCategories() {
  const { categoriesEndpoint } = requestConfig;

  try {
    const result = await axiosInstanse.get(categoriesEndpoint);

    return result.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export async function fetchPopularRecipes() {
  const { recipesPopularEndpoint } = requestConfig;

  try {
    const result = await axiosInstanse.get(recipesPopularEndpoint);
    return result.data;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export async function fetchAreas() {
  const { areasEndpoint } = requestConfig;

  try {
    const result = await axios.get(areasEndpoint);
    return result;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export async function fetchIngredients() {
  const { ingredientsEndpoint } = requestConfig;

  try {
    const result = await axios.get(ingredientsEndpoint);
    return result;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export async function fetchTime() {
  const { recipesBaseEndpoint } = requestConfig;

  try {
    const result = await axios.get(recipesBaseEndpoint);
    return result;
  } catch (error) {
    console.log('error :>> ', error);
  }
}

export async function fetchRecipes() {}
