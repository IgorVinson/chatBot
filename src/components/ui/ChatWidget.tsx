import React, { useEffect, useRef, useState } from 'react';
import { useChatbot } from '../core/useChatbot';
import { Message } from '../core/types';
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
  MessageAvatarIcon,
  OnlineDotIcon,
} from '../icons/Icons';

interface ChatWidgetProps {
  isOpen?: boolean;
  onToggle?: () => void;
  title?: string;
  placeholder?: string;
  primaryColor?: string;
  poweredBy?: string;
  buttonStyle?: 'solid' | 'outline';
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({
  isOpen: externalIsOpen,
  onToggle,
  title = 'Chat with us!',
  placeholder = 'Write a message',
  primaryColor = 'bg-blue-500',
  poweredBy = 'Sahil Dobariya',
  buttonStyle = 'solid',
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  
  const { messages, isLoading, error, sendMessage } = useChatbot();
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
    
    await sendMessage(inputValue);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    const isOutline = buttonStyle === 'outline';
    
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleToggle}
          className={`relative w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center ${
            isOutline
              ? 'bg-white border-2 border-gray-200 hover:border-gray-300'
              : `${primaryColor} hover:bg-blue-600 text-white`
          }`}
          aria-label="Open chat"
        >
          <div className={`${isOutline ? 'text-blue-500' : 'text-white'}`}>
            <ChatIcon className="w-6 h-6" />
          </div>
          <OnlineDotIcon className="absolute bottom-0 right-0 w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[450px] h-[852px] max-h-[90vh] bg-[#f6f6f7] rounded-[30px] shadow-2xl flex flex-col z-50 animate-in slide-in-from-bottom-4 duration-300 font-['Inter',_sans-serif]">
      {/* Header */}
      <div className="bg-white px-6 py-6 rounded-t-[30px] flex items-center justify-between border-b border-[#e3e3e3]">
        <div className="flex items-center space-x-3">
          <MoreDotsIcon className="w-[35px] h-[35px] text-[#667085]" />
          <h3 className="font-normal text-[20px] leading-[30px] text-[#667085]">{title}</h3>
        </div>
        <div className="flex items-center space-x-0">
          <button
            className="w-[35px] h-[35px] hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
            aria-label="Minimize chat"
          >
            <MinimizeIcon className="w-[35px] h-[35px] text-[#667085]" />
          </button>
          <button
            onClick={handleToggle}
            className="w-[35px] h-[35px] hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors"
            aria-label="Close chat"
          >
            <CloseIcon className="w-[35px] h-[35px] text-[#667085]" />
          </button>
        </div>
      </div>

      {/* Bot Info Section */}
      <div className="bg-white px-6 py-[25px] border-b border-[rgba(102,112,133,0.15)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 bg-[#003df5] rounded-full flex items-center justify-center">
                <MessageAvatarIcon className="w-[25.044px] h-[25.044px]" />
              </div>
              <OnlineDotIcon className="absolute bottom-[-4px] right-[-4px] w-[10.435px] h-[10.435px]" />
            </div>
            <div>
              <h4 className="font-normal text-[20px] leading-[30px] text-[#454b58]">Chatbot</h4>
              <p className="font-normal text-[18px] leading-[30px] text-[#667085] opacity-80">Support Agent</p>
            </div>
          </div>
          <div className="flex items-center space-x-[23px]">
            <button className="w-[30px] h-[30px] hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
              <ThumbsUpIcon className="w-[30px] h-[30px] text-[#454b58]" />
            </button>
            <button className="w-[30px] h-[30px] hover:bg-gray-100 rounded-full flex items-center justify-center transition-colors">
              <ThumbsDownIcon className="w-[30px] h-[30px] text-[#454b58]" />
            </button>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-6 pt-[30px] pb-6 space-y-4 bg-[#f6f6f7]">
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        {messages.map((message, index) => (
          <div key={message.id}>
            {message.role === 'assistant' && index === 0 && (
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-7 h-7 bg-[#003df5] rounded-full flex items-center justify-center">
                  <MessageAvatarIcon className="w-[14.609px] h-[14.609px]" />
                </div>
                <span className="font-normal text-[12px] leading-[30px] text-[#667085]">
                  Livechat{' '}
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
            )}
            <div
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-200`}
            >
              <div
                className={`max-w-[295px] px-[22px] py-[14px] rounded-[10px] ${
                  message.role === 'user'
                    ? 'bg-[#003df5] text-white border border-[#e3e3e3]'
                    : 'bg-white text-[#667085] border border-[#e3e3e3]'
                }`}
              >
                <p className="font-normal text-[18px] leading-[30px] whitespace-pre-line">
                  {message.content}
                </p>
              </div>
            </div>
            {message.role === 'user' && (
              <div className="flex justify-end mt-1 space-x-2">
                <span className="font-normal text-[12px] leading-[30px] text-[#667085]">
                  Visitor{' '}
                  {message.timestamp.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <span className="font-normal text-[12px] leading-[30px] text-[#667085]">Read</span>
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-200">
            <div className="bg-white text-[#667085] border border-[#e3e3e3] rounded-[10px] px-[22px] py-[14px]">
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
      <div className="px-6 pt-[39px] pb-6 bg-white border-t border-[#e3e3e3]">
        <div className="h-[75px] flex items-center space-x-[27px] bg-transparent border border-[#e3e3e3] rounded px-0 py-0">
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none resize-none focus:outline-none font-normal text-[18px] leading-[30px] text-[#667085] placeholder-[#667085] ml-6"
            rows={1}
            style={{ minHeight: '30px', maxHeight: '45px' }}
          />
          <div className="flex items-center space-x-[27px] mr-6">
            <button className="w-[30px] h-[30px] text-[#667085] hover:text-gray-700 transition-colors">
              <EmojiIcon className="w-[30px] h-[30px]" />
            </button>
            <button className="w-[30px] h-[30px] text-[#667085] hover:text-gray-700 transition-colors">
              <PaperclipIcon className="w-[30px] h-[30px]" />
            </button>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isLoading}
              className={`w-[30px] h-[30px] transition-colors ${
                inputValue.trim() && !isLoading
                  ? 'text-[#667085] hover:text-blue-500'
                  : 'text-gray-300 cursor-not-allowed'
              }`}
              aria-label="Send message"
            >
              <SendIcon className="w-[30px] h-[30px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[rgba(255,255,255,0.5)] px-6 py-[12px] rounded-b-[30px] border-t border-[#e3e3e3]">
        <p className="text-center font-normal text-[15px] leading-[30px] text-[#667085]">
          <span>Powered by </span>
          <span className="font-medium text-[#222222]">{poweredBy}</span>
        </p>
      </div>
    </div>
  );
};
