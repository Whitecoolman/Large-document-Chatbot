const { storeChunksInPinecone } = require("./utils/pineconeStore");
const { extractTextFromPDF, chunkText } = require("./utils/Processor");
const { askChatbot } = require("./services/chatbot");

async function processAndStorePDF(pdfPath) {
  console.log("Processing PDF...");
  const text = await extractTextFromPDF(pdfPath);
  const chunks = chunkText(text);
  await storeChunksInPinecone(chunks);
  console.log("Document successfully stored in Pinecone!");
}

async function runChatbot() {
  const query = "What are the key points discussed in the document?";
  const answer = await askChatbot(query);
  console.log("\nChatbot Answer:\n", answer);
}

// Process PDF & Query Chatbot
(async () => {
  await processAndStorePDF("documents/your_large_document.pdf");
  await runChatbot();
})();
