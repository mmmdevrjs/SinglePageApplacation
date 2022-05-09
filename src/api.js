import { API_URL } from "./config";

const getMealId = async (mealId) => {
  const responce = await fetch(API_URL + "lookup.php?i=" + mealId);
  return await responce.json();
};

const getAllCategories = async () => {
  const responce = await fetch(API_URL + "categories.php");
  return await responce.json();
};

const getFilterCAtegory = async (categoryName) => {
  const responce = await fetch(API_URL + "filter.php?c=" + categoryName);
  return await responce.json();
};

export { getMealId, getAllCategories, getFilterCAtegory };
