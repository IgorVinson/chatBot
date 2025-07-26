import React from 'react';
import { EmojiIcon, PaperclipIcon, SendIcon } from '../icons/Icons';

interface MessageInputProps {
  value: string;
  onChange: (value: string) => void;
  onSend: () => void;
  placeholder?: string;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  value,
  onChange,
  onSend,
  placeholder = 'Write a message',
  disabled = false,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="px-6 pt-[39px] pb-6 bg-white border-t border-[#e3e3e3]">
      <div className="h-[75px] flex items-center space-x-[27px] bg-transparent border border-[#e3e3e3] rounded px-0 py-0">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={placeholder}
          disabled={disabled}
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
            onClick={onSend}
            disabled={!value.trim() || disabled}
            className={`w-[30px] h-[30px] transition-colors ${
              value.trim() && !disabled
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
  );
};