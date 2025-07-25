# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based AI chatbot widget designed to be embedded into websites. The project is currently in its initial setup phase.

## Development Setup

Since this is a new project, you'll need to initialize it first:

```bash
# Initialize React project with TypeScript
npx create-react-app . --template typescript

# Or if using Vite (recommended for widget development)
npm create vite@latest . -- --template react-ts
```

## Common Commands

Once the project is set up, these commands will be available:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Type checking
npm run type-check
```

## Architecture Considerations

For a chatbot widget, consider this typical structure:

- **Widget Component**: Main embeddable component that can be dropped into any website
- **Chat Interface**: Core chat UI with message history, input field, and send functionality
- **AI Integration**: Service layer for connecting to AI APIs (OpenAI, Anthropic, etc.)
- **State Management**: Context or Redux for managing chat state, user preferences
- **Theming System**: Customizable themes to match host website styling
- **Event System**: Communication between widget and parent website
- **Bundle Optimization**: Minimal bundle size for fast loading on host sites

## Widget-Specific Requirements

- Keep bundle size minimal for fast loading
- Provide easy integration via script tag or npm package
- Ensure CSS isolation to prevent conflicts with host site
- Support customizable themes and positioning
- Handle responsive design for mobile/desktop
- Implement proper error handling and fallbacks
- Consider accessibility (ARIA labels, keyboard navigation)

## Configuration

Widget should support configuration options like:
- API endpoints and keys
- Custom styling/themes
- Initial messages
- Position on page
- Trigger behaviors
- Rate limiting

## Testing Strategy

- Unit tests for core chat logic
- Integration tests for AI API connections
- Visual regression tests for UI components
- Cross-browser compatibility testing
- Performance testing for bundle size and load times