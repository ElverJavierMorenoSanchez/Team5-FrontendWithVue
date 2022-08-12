import axios from "axios";

const BASE_URI_1 = "http://libraryteam6.herokuapp.com/books";

export const getAllItems = async () => {
  const data = await axios.get(BASE_URI_1);
  return data.data.data.books;
};

export const getItem = async (query) => {
  const data = await axios.get(`${BASE_URI_1}/${query}`);
  return data.data.data.books;
};

export const updateItem = async (query, body) => {
  const data = await axios.put(`${BASE_URI_1}/${query}`, body);
  return data.data;
};

export const postItem = async (body) => {
  const data = await axios.post(BASE_URI_1, body);
  return data.data;
};

export const deleteItem = async (query) => {
  const data = await axios.delete(`${BASE_URI_1}/${query}`);
  return data.data;
};

/*
const BASE_URI_1 = "http://34.125.165.209:5000/academic/students";
const BASE_URI_2 = "http://34.125.165.209:5000/academic/student";

export const getAllItems = async () => {
  const data = await axios.get(BASE_URI_1);
  return data.data;
};

export const getItem = async (query) => {
  const data = await axios.get(`${BASE_URI_2}/${query}`);
  return data.data;
};

export const updateItem = async (query, body) => {
  const data = await axios.put(`${BASE_URI_2}/${query}`, body);
  return data.data;
};

export const postItem = async (body) => {
  const data = await axios.post(BASE_URI_2, body);
  return data.data;
};

export const deleteItem = async (query) => {
  const data = await axios.delete(`${BASE_URI_2}/${query}`);
  return data.data;
};

*/
