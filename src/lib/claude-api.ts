import Anthropic from "@anthropic-ai/sdk";

type ClaudeApiProps = {
  message: string;
};

export async function claudeApi({ message }: ClaudeApiProps) {
  const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
  const response = await anthropic.messages.create({
    model: "claude-3-haiku-20240307",
    max_tokens: 1000,
    temperature: 0,
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
