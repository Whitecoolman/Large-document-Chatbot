const axios = require("axios");
const { OPENAI_API_KEY } = require("../config/config");

async function getEmbedding(text) {
  const response = await axios.post(
    "https://api.openai.com/v1/embeddings",
    { model: "text-embedding-ada-002", input: text },
    {
      headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" }
    }
  );
  return response.data.data[0].embedding;
}

module.exports = { getEmbedding };