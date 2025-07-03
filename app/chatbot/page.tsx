import React from "react";

interface Message {
  id: string;
  content: string;
  type: "user" | "system";
  timestamp: string;
  isRead?: boolean;
}

export default function ChatBot() {
  const sampleMessages: Message[] = [
    {
      id: "1",
      content:
        "Rapidly build stunning Web Apps with Frest 🚀\n\nDeveloper friendly, Highly customizable & Carefully crafted HTML Admin Dashboard Template.",
      type: "system",
      timestamp: "7:20",
    },
    {
      id: "2",
      content: "Minimum text check, Hide check icon",
      type: "user",
      timestamp: "7:20",
      isRead: false,
    },
    {
      id: "3",
      content:
        "Rapidly build stunning Web Apps with Frest 🚀\n\nDeveloper friendly, Highly customizable & Carefully crafted HTML Admin Dashboard Template.",
      type: "system",
      timestamp: "7:20",
    },
    {
      id: "4",
      content:
        "More no. of lines text and showing complete list of features like time stamp + check icon READ",
      type: "user",
      timestamp: "7:20",
      isRead: true,
    },
  ];

  const quickActions = ["🤔 What is WappGPT?", "💰 Pricing", "🙋‍♂️ FAQs"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-screen max-h-[600px]">
        {/* Header */}
        <div className="relative flex-shrink-0">
          <div className="bg-[#4361EE] h-20 rounded-t-3xl shadow-lg"></div>
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-[#7B2CBF] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">W</span>
                </div>
              </div>

              {/* Title and Status */}
              <div>
                <h1 className="text-white font-bold text-xl">Main Title</h1>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-[#43EE7D] rounded-full"></div>
                  <span className="text-[#43EE7D] text-sm">Online</span>
                </div>
              </div>
            </div>

            {/* Minimize button */}
            <button className="text-white text-xl">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages - flex-1 робить цю секцію розтягнутою */}
        <div className="bg-[#F8F9FA] flex-1 overflow-y-auto p-4 space-y-4">
          {sampleMessages.map(message => (
            <div
              key={message.id}
              className={`flex items-start gap-3 ${
                message.type === "user" ? "flex-row-reverse" : "flex-row"
              }`}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                {message.type === "system" ? (
                  <div className="w-10 h-10 bg-[#7B2CBF] rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">W</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-sm font-bold">U</span>
                  </div>
                )}
              </div>

              {/* Message content */}
              <div
                className={`flex-1 max-w-[70%] ${
                  message.type === "user" ? "text-right" : "text-left"
                }`}
              >
                {/* Message bubble */}
                <div
                  className={`
                  p-3 rounded-xl shadow-sm mb-1
                  ${
                    message.type === "system"
                      ? "bg-[#3C096C] text-white rounded-bl-sm"
                      : "bg-[#DEE2E6] text-[#444444] rounded-br-sm"
                  }
                `}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-line">
                    {message.content}
                  </p>
                </div>

                {/* Timestamp and actions */}
                <div
                  className={`flex items-center gap-2 ${
                    message.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <span className="text-xs text-[#888888]">
                    {message.timestamp}
                  </span>

                  {/* System message actions */}
                  {message.type === "system" && (
                    <div className="flex gap-1 bg-[#7B2CBF] rounded-lg p-1">
                      <button className="p-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <rect
                            x="9"
                            y="9"
                            width="13"
                            height="13"
                            rx="2"
                            ry="2"
                          />
                          <path d="m5 5 4 0 0 4" />
                          <path d="m19 19-4 0 0-4" />
                        </svg>
                      </button>
                      <button className="p-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <path d="M7 10v12l5-4 5 4V10" />
                          <path d="M5 4h14a2 2 0 0 1 2 2v14" />
                        </svg>
                      </button>
                      <button className="p-1">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                        >
                          <path d="M7 10v12l5-4 5 4V10" />
                          <path
                            d="M5 4h14a2 2 0 0 1 2 2v14"
                            transform="rotate(180 12 12)"
                          />
                        </svg>
                      </button>
                    </div>
                  )}

                  {/* User message read status */}
                  {message.type === "user" && (
                    <div className="flex items-center">
                      {message.isRead ? (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-[#7B2CBF]"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                          <path
                            d="M16 6L7 17l-2-2"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          className="text-[#999999]"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-white p-4 border-t border-gray-100 rounded-b-3xl shadow-inner flex-shrink-0">
          {/* Quick actions */}
          <div className="flex gap-2 mb-3 overflow-x-auto">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="bg-[#F3F5F6] text-[#444444] px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shadow-sm hover:bg-gray-200 transition-colors"
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input area */}
          <div className="flex items-center gap-3 bg-[#E8EBF0] rounded-2xl px-4 py-3 border border-[#F3F5F6]">
            <input
              type="text"
              placeholder="Type your message here..."
              className="flex-1 bg-transparent text-[#444444] placeholder-[#444444] outline-none text-sm"
            />
            <button className="text-[#4361EE] hover:text-[#3651d4] transition-colors">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22,2 15,22 11,13 2,9 22,2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
