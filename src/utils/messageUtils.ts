import { Message } from '../components/core/types';

export const formatTimestamp = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const generateMessageId = (): string => {
  return `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

export const validateMessage = (content: string): boolean => {
  return content.trim().length > 0 && content.length <= 1000;
};

export const truncateMessage = (content: string, maxLength: number = 100): string => {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength) + '...';
};

export const isMessageFromUser = (message: Message): boolean => {
  return message.role === 'user';
};

export const getMessagePreview = (message: Message): string => {
  return truncateMessage(message.content, 50);
};