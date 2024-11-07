import axios from 'axios';

const BASE_URL = 'http://localhost:5000/'; // json-server 주소

export const getChats = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const postChat = async (chatData: { content: string; sender: string; timestamp: string }) => {
  const response = await axios.post(BASE_URL, chatData);
  return response.data;
};
