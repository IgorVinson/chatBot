import React, { useEffect, useRef, useState } from 'react';
import {
  ChatIcon,
  CloseIcon,
  MinimizeIcon,
  ThumbsUpIcon,
  ThumbsDownIcon,
  EmojiIcon,
  PaperclipIcon,
  SendIcon,
  MoreDotsIcon,
  MessageBoldIcon,
  OnlineDotIcon,
} from '../icons/Icons';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatWidgetProps {
  isOpen?: boolean;
  onToggle?: () => void;
  title?: string;
  placeholder?: string;
  primaryColor?: string;
  poweredBy?: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isOpen: externalIsOpen,
  onToggle,
  title = 'Chat with us!',
  placeholder = 'Write a message',
  primaryColor = 'bg-blue-500',
  poweredBy = 'Sahil Dobariya',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello Nice',
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: '2',
      text: 'Welcome to LiveChat\n\nI was made with ♥. Pick a topic from the list or type down a question!',
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: '3',
      text: 'Welcome',
      isUser: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;

  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for your message! I'm processing your request and will provide a helpful response shortly.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleToggle}
        className={`fixed bottom-6 right-6 w-14 h-14 ${primaryColor} hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50`}
        aria-label="Open chat"
      >
        <ChatIcon className="w-6 h-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[440px] h-[852px] max-h-[90vh] bg-gray-50 rounded-[30px] shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300">
      {/* Header */}
      <div className="bg-white p-6 rounded-t-[30px] flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <MoreDotsIcon className="w-9 h-9" />
          <h3 className="font-medium text-xl text-gray-900">{title}</h3>
        </div>
        <div className="flex items-center space-x-3">
          <button
            className="w-9 h-9 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
            aria-label="Minimize chat"
          >
            <MinimizeIcon className="w-9 h-9" />
          </button>
          <button
            onClick={handleToggle}
            className="w-9 h-9 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <CloseIcon className="w-9 h-9" />
          </button>
        </div>
      </div>

      {/* Bot Info Section */}
      <div className="bg-white px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <MessageBoldIcon className="w-6 h-6 text-white" />
              </div>
              <OnlineDotIcon className="absolute -bottom-1 -right-1 w-4 h-4" />
            </div>
            <div>
              <h4 className="font-medium text-lg text-gray-900">Chatbot</h4>
              <p className="text-sm text-gray-600">Support Agent</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
              <ThumbsUpIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button className="w-8 h-8 hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
              <ThumbsDownIcon className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message, index) => (
          <div key={message.id}>
            {!message.isUser && index === 0 && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageBoldIcon className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm text-gray-600">
                  Livechat{' '}
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            )}
            <div
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-200`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-[10px] ${
                  message.isUser
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800 border border-gray-200'
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {message.text}
                </p>
              </div>
            </div>
            {message.isUser && (
              <div className="flex justify-end mt-1">
                <span className="text-xs text-gray-500">
                  Visitor{' '}
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <span className="text-xs text-gray-500 ml-2">Read</span>
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-200">
            <div className="bg-white text-gray-800 border border-gray-200 rounded-[10px] px-4 py-3">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.1s' }}
                ></div>
                <div
                  className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: '0.2s' }}
                ></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-gray-200">
        <div className="flex items-center space-x-3 bg-gray-50 rounded-[20px] px-4 py-3">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none resize-none focus:outline-none text-sm text-gray-700 placeholder-gray-500"
            rows={1}
            style={{ minHeight: '24px', maxHeight: '96px' }}
          />
          <button className="w-7 h-7 text-gray-500 hover:text-gray-700 transition-colors">
            <EmojiIcon className="w-7 h-7" />
          </button>
          <button className="w-7 h-7 text-gray-500 hover:text-gray-700 transition-colors">
            <PaperclipIcon className="w-7 h-7" />
          </button>
          <button
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            className={`w-7 h-7 transition-colors ${
              inputValue.trim()
                ? 'text-gray-700 hover:text-blue-500'
                : 'text-gray-300 cursor-not-allowed'
            }`}
            aria-label="Send message"
          >
            <SendIcon className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white/50 px-6 py-3 rounded-b-[30px] border-t border-gray-100">
        <p className="text-center text-sm text-gray-500">
          Powered by {poweredBy}
        </p>
      </div>
    </div>
  );
};
