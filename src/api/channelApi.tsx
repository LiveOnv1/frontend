import axios from 'axios';

const BASE_URL = 'http://3.39.74.178:8080/api/chat-room';

export const getChannel = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch channels", error);
    throw error;
  }
};

export const postChannel = async (channelName: string) => {
  console.log(channelName);
  try {
    const response = await axios.post(`${BASE_URL}`, {
      chatRoomName: channelName
    });
    return response.data;
  } catch (error) {
    console.error("Failed to create channel", error);
    throw error;
  }
};
