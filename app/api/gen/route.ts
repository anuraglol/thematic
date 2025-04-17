import { generateText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const maxDuration = 30;

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function POST(req: Request) {
  const { theme } = await req.json();

  try {
    const { text } = await generateText({
      model: google("gemini-1.5-flash"),
      prompt: `
    You are an expert literary curator. Given a user-described theme, aesthetic, or emotional vibe, recommend a list of 5 books that deeply match it—not just by genre, but by tone, emotion, underlying themes, and storytelling style.
    
    The theme is: ${theme}
    
    Return your response strictly as a JSON array with the following structure for each book:
    - title
    - author
    - mood: a poetic one-liner capturing the book’s emotional tone
    - reason: a sentence explaining why it fits the theme
    - link: a wikipedia link for the books
    
    Do not include anything outside the array.
    `,
    });

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return new Response(cleanedText, { status: 200 });
  } catch (error) {
    console.error("Error streaming text:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
