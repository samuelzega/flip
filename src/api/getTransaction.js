import axios from 'axios';

export default async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://nextar.flip.id/frontend-test',
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
