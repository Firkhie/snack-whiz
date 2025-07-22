import Anthropic from "@anthropic-ai/sdk";

type ClaudeApiProps = {
  message: string;
};

export async function claudeApi({ message }: ClaudeApiProps) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const response = await anthropic.messages.create({
    model: "claude-3-5-haiku-latest",
    max_tokens: 1200,
    temperature: 0.8,
    system: "Respond only with markdown writing standards",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: message,
          },
        ],
      },
    ],
  });
  return response;
}
