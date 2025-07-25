/**
 * Chat Context Provider component
 * 
 * This React context provider wraps the chat components and provides:
 * - Global chat configuration (API keys, endpoints, themes)
 * - Customer data injection (pricing, FAQ, etc.)
 * - Shared state between chat components
 * - Configuration for different chatbot instances
 * 
 * Allows easy customization without prop drilling
 */

// TODO: Create React context with ChatConfig, implement ChatProvider component