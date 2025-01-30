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