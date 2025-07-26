import { promises as fs } from 'fs';
import path from 'path';

interface CustomerData {
  faq?: Array<{ question: string; answer: string }>;
  pricing?: Array<{ plan: string; price: string; features: string[] }>;
  products?: Array<{ name: string; description: string; price: string }>;
}

let cachedData: CustomerData | null = null;

export const loadCustomerData = async (): Promise<CustomerData> => {
  if (cachedData) return cachedData;

  try {
    const dataPath = path.join(process.cwd(), 'data', 'customer-data.json');
    const fileContent = await fs.readFile(dataPath, 'utf-8');
    cachedData = JSON.parse(fileContent);
    return cachedData!;
  } catch (error) {
    console.warn('Customer data file not found, using default data');
    cachedData = {
      faq: [
        { question: "What is this service?", answer: "We provide AI-powered customer support." },
        { question: "How can I contact support?", answer: "You can reach us through this chat widget." }
      ]
    };
    return cachedData;
  }
};

export const formatDataForAI = (data: CustomerData): string => {
  let formatted = '';
  
  if (data.faq?.length) {
    formatted += 'FAQ:\n' + data.faq.map(item => `Q: ${item.question}\nA: ${item.answer}`).join('\n\n');
  }
  
  if (data.pricing?.length) {
    formatted += '\n\nPricing:\n' + data.pricing.map(item => 
      `${item.plan}: ${item.price}\nFeatures: ${item.features.join(', ')}`
    ).join('\n\n');
  }
  
  if (data.products?.length) {
    formatted += '\n\nProducts:\n' + data.products.map(item => 
      `${item.name}: ${item.description} - ${item.price}`
    ).join('\n');
  }
  
  return formatted;
};