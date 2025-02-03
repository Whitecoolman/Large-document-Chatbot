require("dotenv").config();  
const { Pinecone } = require("@pinecone-database/pinecone");  
const axios = require("axios");  

const OPEN_API_KEY = process.env.OPEN_API_KEY;  
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;  
const PINECONE_ENV = process.env.PINECONE_ENV;  
const PINECONE_INDEX = process.env.PINECONE_INDEX;  
console.log(process.env);
// Initialize Pinecone with error handling  
let pinecone;  
try {  
  pinecone = new Pinecone({  
    apiKey: "pcsk_2Cawxu_37SYGko3PW8rU61ErXKDRK6dFoY78tGn4FYE9WH71hKbFNdaB8HN7ExvJE1j56r",  
    environment: "us-west1-gcp",  
  });  
} catch (error) {  
  console.error("Failed to initialize Pinecone:", error.message);  
  process.exit(1); // Exit the process if initialization fails  
}  

const index = pinecone.index(PINECONE_INDEX);  

// Exporting both the OpenAI key and the Pinecone index  
module.exports = { OPEN_API_KEY, index };