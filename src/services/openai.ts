import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export const createChatCompletion = async (
  messages: ChatMessage[],
  customData?: string
): Promise<string> => {
  const systemPrompt = customData 
    ? `You are a helpful AI assistant. You can answer questions on any topic. If the user asks about customer service topics, you may reference this context: ${customData}. Otherwise, provide helpful and accurate responses to any question.`
    : 'You are a helpful AI assistant. Answer questions accurately and helpfully on any topic.';

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: systemPrompt },
      ...messages.filter(m => m.role !== 'system')
    ],
    max_tokens: 500,
    temperature: 0.7,
  });

  return completion.choices[0]?.message?.content || 'Sorry, I could not generate a response.';
};