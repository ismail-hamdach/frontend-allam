import axios from "axios";

const baseURL = process.env.NEXT_BASE_URL + "/api"; // Change this if using a diffe // Change this if using a different backend API
const baseURLCMS = process.env.NEXT_CMS_URL; // Change this if using a diffe // Change this if using a different backend API

export const api = axios.create({
  baseURL,
});

export const cms_api = axios.create({
  baseURLCMS,
});
