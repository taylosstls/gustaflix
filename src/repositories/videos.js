import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function createVideos(videoObject) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(videoObject),
  })
    .then(async (serverResponse) => {
      if (serverResponse.ok) {
        const response = await serverResponse.json();
        return response;
      }

      throw new Error('Server offline');
    });
}

export default {
  createVideos,
};
