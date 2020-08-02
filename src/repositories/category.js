import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/category`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Server offline');
    });
}

function getAllCategories() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Server offline');
    });
}

export default {
  getAllWithVideos, getAllCategories,
};
