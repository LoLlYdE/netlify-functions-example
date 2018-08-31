import fetch from "node-fetch";

const passed_id = event.queryStringParameters.id
const API_ENDPOINT =
  "http://store.steampowered.com/api/appdetails?appids=" + passed_id;

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: `${data.passed_id.data.name}`
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
