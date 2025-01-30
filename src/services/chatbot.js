const axios = require("axios");
const { retrieveRelevantChunks } = require("../utils/pineconeStore");
const { OPENAI_API_KEY } = require("../config/config");

async function askChatbot(query) {
  const relevantChunks = await retrieveRelevantChunks(query);
  const chunks = relevantChunks.join("\n\n");

  const prompt = `Use the following document context to answer the question : \n\n${context} \n\nQuestion: ${query}\n\nAnswer:`;

  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    { model: "gpt-4", messages: [{ role: "user", content: prompt }], temperature: 0.7 },
    { headers: { Authorization: `Bearer ${OPENAI_API_KEY}`, "Content-Type": "application/json" } }
  );

  return response.data.choices[0].message.content;
}

module.exports = { askChatbot };