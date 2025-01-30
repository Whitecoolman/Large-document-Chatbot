const axios = require("axios");
const { retrieveRelevantChunks } = require("../utils/pineconeStore");
const { OPENAI_API_KEY } = require("../config/config");

async function askChatbot(query) {
  const relevantChunks = await retrieveRelevantChunks(query);
  const chunks = relevantChunks.join("\n\n");
  
}