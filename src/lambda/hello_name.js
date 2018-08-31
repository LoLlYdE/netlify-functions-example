import fetch from "node-fetch";

const API_ENDPOINT =
  "http://store.steampowered.com/api/appdetails?appids=";

exports.handler = async (event, context) => {
  var passed_id = event.queryStringParameters.id
  return fetch(API_ENDPOINT + passed_id)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${data}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
 
