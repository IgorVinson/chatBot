import OpenAI from "openai";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: "../../.env.local" });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
  // const file = await openai.files.create({
  //   file: fs.createReadStream("conspect.pdf"),
  //   purpose: "user_data",
  // });

  // console.log(file);

  // const vectorStore = await openai.vectorStores.create({
  //   name: "GTE Traiding Course Vector Store",
  //   file_ids: [file.id],
  // });
  // console.log(vectorStore);

  const response = await openai.responses.create({
    model: "o4-mini",
    tools: [
      {
        type: "file_search",
        vector_store_ids: ["vs_6865c02ec8a4819183a1f39787381d91"],
        max_num_results: 5,
        ranking_options: {
          score_threshold: 0.7,
        },
      },
    ],
    input:
      "Как торговать пробой уровня ? Используйся данными из векторного хранилища.",
  });

  console.log(response);
}

main();
