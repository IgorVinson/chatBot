import React from 'react';
import Image from 'next/image';

interface IconProps {
  className?: string;
  size?: number | string;
}

// Next.js Image components using SVG assets from public/icons directory
export const MessageBoldIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/message-bold.svg" 
    alt="Message" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const MoreDotsIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/more-dots.svg" 
    alt="More options" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/close-minimize.svg" 
    alt="Close" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const MinimizeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/message-minus.svg" 
    alt="Minimize" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const ThumbsUpIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/arrow-up.svg" 
    alt="Thumbs up" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const ThumbsDownIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <div className="transform rotate-180">
    <Image 
      src="/icons/arrow-up.svg" 
      alt="Thumbs down" 
      width={typeof size === 'string' ? parseInt(size) : size}
      height={typeof size === 'string' ? parseInt(size) : size}
      className={className}
    />
  </div>
);

export const PaperclipIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/paperclip.svg" 
    alt="Attach file" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const SendIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/send-arrow.svg" 
    alt="Send message" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const EmojiIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/send-button.svg" 
    alt="Emoji" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const ChatIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <MessageBoldIcon className={className} size={size} />
);

export const AvatarLargeIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/avatar-large.svg" 
    alt="Avatar" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const AvatarSmallIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/avatar-small.svg" 
    alt="Avatar" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const OnlineDotIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <Image 
    src="/icons/online-dot.svg" 
    alt="Online" 
    width={typeof size === 'string' ? parseInt(size) : size}
    height={typeof size === 'string' ? parseInt(size) : size}
    className={className}
  />
);

export const MessageAvatarIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 26 26" 
    fill="none" 
    className={className}
  >
    <path 
      d="M17.7391 2.08696H7.30435C4.42435 2.08696 2.08696 4.41391 2.08696 7.28348V13.5235V14.567C2.08696 17.4365 4.42435 19.7635 7.30435 19.7635H8.86957C9.1513 19.7635 9.52696 19.9513 9.70435 20.1809L11.2696 22.2574C11.9583 23.1757 13.0852 23.1757 13.7739 22.2574L15.3391 20.1809C15.5374 19.92 15.8504 19.7635 16.1739 19.7635H17.7391C20.6191 19.7635 22.9565 17.4365 22.9565 14.567V7.28348C22.9565 4.41391 20.6191 2.08696 17.7391 2.08696ZM8.34783 12.5217C7.76348 12.5217 7.30435 12.0522 7.30435 11.4783C7.30435 10.9043 7.77391 10.4348 8.34783 10.4348C8.92174 10.4348 9.3913 10.9043 9.3913 11.4783C9.3913 12.0522 8.93217 12.5217 8.34783 12.5217ZM12.5217 12.5217C11.9374 12.5217 11.4783 12.0522 11.4783 11.4783C11.4783 10.9043 11.9478 10.4348 12.5217 10.4348C13.0957 10.4348 13.5652 10.9043 13.5652 11.4783C13.5652 12.0522 13.1061 12.5217 12.5217 12.5217ZM16.6957 12.5217C16.1113 12.5217 15.6522 12.0522 15.6522 11.4783C15.6522 10.9043 16.1217 10.4348 16.6957 10.4348C17.2696 10.4348 17.7391 10.9043 17.7391 11.4783C17.7391 12.0522 17.28 12.5217 16.6957 12.5217Z" 
      fill="white"
    />
  </svg>
);