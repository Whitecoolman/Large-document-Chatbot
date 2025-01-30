const { index } = require("../config/config");
const { getEmbedding } = require("./embedding");

async function storeChunkInPinecone(chunks) {
  const vectors = [];
  for (let i = 0; i < chunks.length; i++){
    const embedding = await getEmbedding(chunks[i]);
    vectors.push({id: `doc_chunk_${i}`, values: embedding, metadata: {text: chunks[i]}})
  }
  await index.upsert(vectors);
  console.log("Stored document chunks in Pinecone!");
}

async function retrieveRelevantChunks(quert,topK = 5) {
  const queryEmbedding = await getEmbedding(query);
  const queryResults = await index.query({ vector: queryEmbedding, topK, IncludeMetadata: true });
  return queryResults.matches.map((match) => match.metadata.text)
}

module.exports = { storeChunkInPinecone, retrieveRelevantChunks };