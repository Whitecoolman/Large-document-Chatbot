const axios = require("axios");
const OpenAI = require("openai")
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});

async function getEmbedding(text) {  
  // Check if the input text is valid  
  if (typeof text !== 'string' || text.trim() === '') {  
    throw new Error("Input must be a non-empty string.");  
  }  

  try {  
    const response = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: text,
    });
    console.log("response=>>>>>>>>>>>>>>>",response.data);
    return response.data[0].embedding;
  } catch (error) {  
    console.error("Error fetching embedding:", error);  
    throw new Error("Failed to fetch embedding");  
  }  
}

module.exports = { getEmbedding };