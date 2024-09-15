import { StreamingTextResponse, GoogleGenerativeAIStream, Message } from "ai";
import { GoogleGenerativeAI, Content } from "@google/generative-ai";
// IMPORTANT! Set the runtime to edge
export const runtime = "edge";
export async function POST(req, res) {
  const reqBody = await req.json();
  const images = JSON.parse(reqBody.data.images);
  const imageParts = filesArrayToGenerativeParts(images);
  const messages = reqBody.messages;
  // if imageparts exist then take the last user message as prompt
  let modelName
  let promptWithParts
  if (imageParts.length > 0) {
    modelName = "gemini-pro-vision";
    const prompt = 
    [...messages]
      .filter((message) => message.role === "user")
      .pop()?.content;
    console.log(prompt);
    promptWithParts = [prompt, ...imageParts];
  } else {
    // else build the multi-turn chat prompt
    modelName = "gemini-pro";
    promptWithParts = buildGoogleGenAIPrompt(messages);
  }

  const genAI = new GoogleGenerativeAI("AIzaSyAbsUjDL0Ctm7tuppX9mXPOjP-MDRn0RdM");
  const model = genAI.getGenerativeModel({
    model: modelName,
  });

  console.log("MODELNAME: " + modelName);
  console.log("PROMPT WITH PARTS: ");
  console.log(promptWithParts);
  const streamingResponse = await model.generateContentStream(promptWithParts);
  return new StreamingTextResponse(GoogleGenerativeAIStream(streamingResponse));
}

function buildGoogleGenAIPrompt(messages) {
  return {
    contents: messages
      .filter(
        (message) => message.role === "user" || message.role === "assistant"
      )
      .map((message) => ({
        role: message.role === "user" ? "user" : "model",
        parts: [{ text: message.content }],
      })),
  };
}

function filesArrayToGenerativeParts(images) {
  return images.map((imageData) => ({
    inlineData: {
      data: imageData.split(",")[1],
      mimeType: imageData.substring(
        imageData.indexOf(":") + 1,
        imageData.lastIndexOf(";")
      ),
    },
  }));
}
