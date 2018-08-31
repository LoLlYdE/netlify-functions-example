import fetch from "node-fetch";

const API_ENDPOINT =
  "https://store.steampowered.com/api/appdetails?appids=";

exports.handler = async (event, context) => {
  const id = event.queryStringParameters.id;
  return fetch(API_ENDPOINT + id)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `url: ${API_ENDPOINT + id} response: ${JSON.stringify(data)}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
