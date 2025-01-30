const pdfParse = require("pdf-parse");
const fs = require("fs");

async function extractTextFromPDF(pdfPath) {
  const dataBuffer = fs.readFileSync(pdfPath);
  const data = await pdfParse(dataBuffer);
  return data.text;
}

function chunkText(text, chunkSize = 1000, chunkOverlap = 200) {
  let chunks = [];
  for (let i = 0; i < text.length; i += chunkSize - chunkOverlap) {
    chunks.push(text.substring(i, i + chunkSize));
  }
  return chunks;
}

module.exports = { extractTextFromPDF, chunkText };
