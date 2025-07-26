import React, { createContext, useContext, ReactNode } from 'react';
import { ChatConfig } from './types';

interface ChatContextType {
  config: ChatConfig;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

interface ChatProviderProps {
  children: ReactNode;
  config?: ChatConfig;
}

const defaultConfig: ChatConfig = {
  apiEndpoint: '/api/chat',
  initialMessage: 'Hello! How can I help you today?',
  theme: 'light',
  position: 'bottom-right',
  placeholder: 'Type your message...',
};

export const ChatProvider: React.FC<ChatProviderProps> = ({ 
  children, 
  config = {} 
}) => {
  const mergedConfig = { ...defaultConfig, ...config };

  return (
    <ChatContext.Provider value={{ config: mergedConfig }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatConfig = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatConfig must be used within a ChatProvider');
  }
  return context.config;
};