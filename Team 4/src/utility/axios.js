import axios from "axios";

const BASE_URI = "http://3.86.206.55:8000/employee";

export const getAllItems = async () => {
  const data = await axios.get(BASE_URI);
  return data.data;
};

export const getItem = async (query) => {
  const data = await axios.get(`${BASE_URI}/${query}`);
  return data.data;
};

export const updateItem = async (query, body) => {
  const data = await axios.put(`${BASE_URI}/${query}`, body);
  return data.data;
};

export const postItem = async (body) => {
  const data = await axios.post(BASE_URI, body);
  return data.data;
};

export const deleteItem = async (query) => {
  const data = await axios.delete(`${BASE_URI}/${query}`);
  return data.data;
};
