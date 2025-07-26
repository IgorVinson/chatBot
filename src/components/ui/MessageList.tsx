import React from 'react';
import { Message } from '../core/types';
import { MessageAvatarIcon } from '../icons/Icons';

interface MessageListProps {
  messages: Message[];
  isLoading: boolean;
}

export const MessageList: React.FC<MessageListProps> = ({ messages, isLoading }) => {
  return (
    <>
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
    </>
  );
};