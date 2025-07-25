import React from 'react';
import MessageIconSvg from '../../assets/icons/message-icon.svg';

interface WidgetToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  unreadCount?: number;
  className?: string;
}

export const WidgetToggle: React.FC<WidgetToggleProps> = ({
  isOpen,
  onToggle,
  unreadCount = 0,
  className = ''
}) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 w-14 h-14 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 ${className}`}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      <img 
        src={MessageIconSvg} 
        alt="Chat" 
        className="w-6 h-6 filter brightness-0 invert"
      />
      {unreadCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {unreadCount > 9 ? '9+' : unreadCount}
        </span>
      )}
    </button>
  );
};