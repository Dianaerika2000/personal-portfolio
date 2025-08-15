import { createContext, useContext } from "react";
import { useChatFlow } from "../features/chat/hooks/useChatFlow";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const chat = useChatFlow();
  return <ChatContext.Provider value={chat}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
