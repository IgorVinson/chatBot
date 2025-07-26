export type MessageRole = 'user' | 'assistant';

export interface Message {
  id: string;
  content: string;
  role: MessageRole;
  timestamp: Date;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}

export interface ChatConfig {
  apiEndpoint?: string;
  initialMessage?: string;
  theme?: 'light' | 'dark';
  position?: 'bottom-right' | 'bottom-left';
  placeholder?: string;
}