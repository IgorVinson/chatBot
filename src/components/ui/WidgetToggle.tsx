import React from 'react';
import { ChatIcon, OnlineDotIcon } from '../icons/Icons';

interface WidgetToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  primaryColor?: string;
  buttonStyle?: 'solid' | 'outline';
}

export const WidgetToggle: React.FC<WidgetToggleProps> = ({
  isOpen,
  onToggle,
  primaryColor = 'bg-blue-500',
  buttonStyle = 'solid',
}) => {
  if (isOpen) return null;

  const isOutline = buttonStyle === 'outline';
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={onToggle}
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
};