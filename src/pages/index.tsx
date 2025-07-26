import { ChatProvider } from '@/components/core/ChatProvider';
import { ChatWidget } from '@/components/ui/ChatWidget';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          AI Chatbot Widget Demo
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Development Status</h2>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Next.js project initialized</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Tailwind CSS configured</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>TypeScript setup complete</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>Chat components (Step 2)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>OpenAI integration (Step 3)</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span>UI Components (Step 4)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ErrorBoundary>
        <ChatProvider>
          <ChatWidget />
        </ChatProvider>
      </ErrorBoundary>
    </div>
  );
}
