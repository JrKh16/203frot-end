const env = require('./env.js')
const config = require('./apiConfig.js')[env];
const bearerToken = config.bearer_token;
export const fetchImageWithToken = (imagePath) => {
    const API_IMG = `${config.API_URL}/api/images/`;
    const headers = {
      Authorization: `Bearer ${bearerToken}`,
    };
  
    return fetch(`${API_IMG}${imagePath}`, {
      headers,
    }).then(response => response.blob());
  };