import callWebApi from '../helpers/webApiHelper';

import { API_URL, API_CLIENT_ID } from 'react-native-dotenv';

export const getPhotosList = async () => {
  const response = await callWebApi({
    // endpoint: `${API_URL}/photos`,
    endpoint: 'https://api.unsplash.com/photos',
    type: 'GET',
    query: {
      client_id: 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
    }
  });
  return response.json();
};

// export const photoService = async (id) => {
//     const response = await callWebApi({
//       endpoint: `${MOBILE_SERVER}/photos/${id}`,
//       type: 'GET',
//       query: params
//     });
//     return response.json();
// };