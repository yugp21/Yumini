import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai";
  
  const apiKey = "AIzaSyB4e4bHqOvf17wG2e5WlAWewn2dZRS7qCA";
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const maxRetries = 3;
    let retryCount = 0;
  
    while (retryCount < maxRetries) {
      try {
        const chatSession = model.startChat({
          // ... (your chat session configuration)
        });
  
        const result = await chatSession.sendMessage(prompt);
        const response = result.response;
        console.log(response.text());
        return response.text();
      } catch (error) {
        if (error.code === 429) {
          console.warn(`Rate limit exceeded. Retrying in ${retryCount * 2} seconds.`);
          await new Promise(resolve => setTimeout(resolve, retryCount * 2000));
          retryCount++;
        } else {
          throw error; // Re-throw non-rate-limit errors
        }
      }
    }
  
    throw new Error('Maximum retries exceeded. Please try again later.');
  }
  
  export default run;