require("dotenv").config();
const { Pinecone } = require("@pinecone-database/pinecone");
const axios = require("axios");

const OPEN_API_KEY = process.env.OPEN_API_KEY;
const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
const PINECONE_ENV = process.env.PINECONE_ENV;
const PINECONE_INDEX = process.env.PINECONE_INDEX;

const pinecone = new Pinecone({
  apikey: PINECONE_API_KEY,
  environment: PINECONE_ENV,
});

const index = pinecone.index(PINECONE_INDEX);
module.exports = { OPEN_API_KEY, index };