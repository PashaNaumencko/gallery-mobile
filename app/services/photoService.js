import callWebApi from '../helpers/webApiHelper';

import { API_URL, API_CLIENT_ID } from 'react-native-dotenv';

export const photosListService = async () => {
    const response = await callWebApi({
      endpoint: `${API_URL}/photos`,
      type: 'GET',
      query: {
        client_id: API_CLIENT_ID
      }
    });
    return response.json();
};

export const photoService = async (id) => {
    const response = await callWebApi({
      endpoint: `${MOBILE_SERVER}/photos/${id}`,
      type: 'GET',
      query: params
    });
    return response.json();
};