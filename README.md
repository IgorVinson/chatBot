# AI Knowledge Base Chatbot

A Next.js application that creates an intelligent chatbot using OpenAI's File Search feature. Upload your documents (PDFs, Word docs, text files, code files, etc.) and ask questions about their content!

## Features

- 📁 **File Upload**: Support for PDF, DOCX, PPTX, XLSX, TXT, MD, JS, TS, PY, and more
- 🤖 **AI Assistant**: Powered by OpenAI's GPT-4o with File Search
- 💬 **Interactive Chat**: Real-time conversation interface
- 📚 **Knowledge Base**: Files are automatically processed and indexed
- 🔍 **Source Citations**: Responses include references to source documents
- 🎨 **Beautiful UI**: Modern, responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+
- OpenAI API key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone or download this project**

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up your OpenAI API key:**

   Edit `.env.local` and add your OpenAI API key:

   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## How to Use

1. **Upload Files**: Click "Upload Files" and select your documents

   - Supported formats: PDF, DOCX, PPTX, XLSX, TXT, MD, JS, TS, PY, HTML, CSS, and more
   - Multiple files can be uploaded at once

2. **Start Chatting**: Once files are uploaded, ask questions about their content

   - Example: "What are the main points in the document?"
   - Example: "Can you summarize the code functionality?"
   - Example: "What does the contract say about payment terms?"

3. **View Sources**: The AI will provide citations showing which parts of your documents it referenced

## How It Works

This application uses OpenAI's **Assistants API** with **File Search** functionality:

1. **File Upload**: Your files are uploaded to OpenAI's servers
2. **Vector Store**: Files are automatically processed and indexed in a vector store
3. **AI Assistant**: A GPT-4o assistant is created with access to your files
4. **Smart Search**: When you ask questions, the AI searches through your documents
5. **Contextual Answers**: Responses are generated based on the relevant content found

## Technical Details

- **Frontend**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI Assistants API with File Search
- **Icons**: Lucide React

## File Support

OpenAI's File Search supports many file formats out of the box:

- **Documents**: PDF, DOCX, PPTX, XLSX
- **Text**: TXT, MD, RTF
- **Code**: JS, TS, PY, HTML, CSS, JSON, XML
- **And many more!**

No additional processing libraries are needed - OpenAI handles the file parsing automatically.

## Security & Privacy

- Files are uploaded to OpenAI's secure servers
- Vector stores expire after 7 days of inactivity
- Consider data sensitivity before uploading confidential documents
- For production use, implement proper authentication and data management

## Customization

You can customize the assistant by modifying:

- **Instructions**: Edit the assistant prompt in `/app/api/upload/route.ts`
- **Model**: Change from `gpt-4o` to other models
- **UI**: Modify the interface in `/app/chatbot/page.tsx`
- **File Types**: Adjust accepted file types in the upload component

## Troubleshooting

**"No files provided" error:**

- Make sure you select files before clicking upload

**Chat not working:**

- Verify your OpenAI API key is set correctly
- Check the browser console for error messages
- Ensure you have uploaded files first

**File upload fails:**

- Check file size limits (OpenAI has limits per file)
- Verify file format is supported
- Check your internet connection

## Learn More

- [OpenAI Assistants API](https://platform.openai.com/docs/assistants/overview)
- [File Search Documentation](https://platform.openai.com/docs/assistants/tools/file-search)
- [Next.js Documentation](https://nextjs.org/docs)

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
