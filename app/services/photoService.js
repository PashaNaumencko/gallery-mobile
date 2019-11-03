import callWebApi from '../helpers/webApiHelper';

export const getPhotosList = async (options) => {
  const API_URL = 'https://api.unsplash.com';
  const API_CLIENT_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

  const response = await callWebApi({
    endpoint: `${API_URL}/photos`,
    type: 'GET',
    query: {
      client_id: API_CLIENT_ID,
      ...options
    }
  });
  return response.json();
};
