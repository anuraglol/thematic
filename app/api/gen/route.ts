import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const result = await streamText({
      model: openai("gpt-3.5-turbo"),
      prompt:
        "Suggest 5 books based on the following theme: slow burn romance, set in a fantasy world",
    });

    return result.toDataStreamResponse();
  } catch (error) {
    console.error("Error streaming text:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
