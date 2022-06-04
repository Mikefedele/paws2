// const yelp = require('yelp-fusion');
// const CORS = "https://cors-anywhere.herokuapp.com/"
// const CORS = "https://cors.bridged.cc/"
// Yelp needed cors-anywhere until deployed. Can update after deployment
// cors addded

// add .env to client folder to hide API key
//* CORS-CURE server on heroku
export const searchYelpApi = (query) => {
  console.log('hitAPI')
    return fetch(`https://evening-mesa-85661.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dogs_allowed&location=${query}`, {
      method: 'GET',
      headers: {
        authorization: process.env.REACT_APP_API_KEY,
      }
    });
  };

   // authorization: 'Bearer sFDrQ2pCQos8PDSDDwhIcVDKCUPVRHBWQf8OUcjX3PKW-d6e0S_uxIlVXXbHGFf96nF8w-VqDPw_2ZzSU-5-ievJLv_YlGpOQkamfNYe3l5k3b0BnlP2gTXQ5ZyLYnYx',
