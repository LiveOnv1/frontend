import axios from 'axios';

const BASE_URL = 'https://www.capserver.link/api';
axios.defaults.withCredentials = true;

export const getChats = (roomId : number, page=0, size=20) => {
  return axios.get(`${BASE_URL}/chat-room/${roomId}/messages`, {
    params: { page, size },
});
};

export const postChat = async (chatData: { content: string; sender: string; timestamp: string }) => {
  const response = await axios.post(BASE_URL, chatData);
  return response.data;
};
