import fetch from "node-fetch";

const API_ENDPOINT =
  "http://store.steampowered.com/api/appdetails?appids=";

exports.handler = async (event, context) => {
  var id = event.queryStringParameters.name;
  return fetch(API_ENDPOINT + id)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${JSON.stringify(data)}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
