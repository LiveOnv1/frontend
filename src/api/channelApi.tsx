import axios from 'axios';

const BASE_URL = 'http://3.39.74.178:8080/api/chat-room';
axios.defaults.withCredentials = true;

export const getChannel = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`,
      {withCredentials: true}
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch channels", error);
    throw error;
  }
};

export const postChannel = async (channelName: string, ) => {
  const response = await axios.post(BASE_URL, {chatRoomName: channelName}, {withCredentials: true}); 
  return response.data;
};