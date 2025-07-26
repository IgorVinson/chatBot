import { NextApiRequest, NextApiResponse } from 'next';
import { createChatCompletion } from '../../services/openai';
import { loadCustomerData, formatDataForAI } from '../../services/dataStore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({ error: 'OpenAI API key not configured' });
  }

  const { message } = req.body;
  
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    return res.status(400).json({ error: 'Valid message is required' });
  }

  if (message.length > 1000) {
    return res.status(400).json({ error: 'Message too long' });
  }

  try {
    const customerData = await loadCustomerData();
    const formattedData = formatDataForAI(customerData);
    
    const reply = await createChatCompletion([
      { role: 'user', content: message }
    ], formattedData);
    
    res.status(200).json({ message: reply });
  } catch (error: any) {
    console.error('Chat API error:', error);
    
    if (error?.status === 429) {
      return res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    }
    
    res.status(500).json({ error: 'Failed to generate response' });
  }
}