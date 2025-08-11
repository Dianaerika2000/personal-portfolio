import { useState } from "react";
import chatData from "../model/chatData.json";

export function useChatFlow() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      type: chatData.intro.type,
      text: chatData.intro.text,
      data: chatData.intro,
    },
  ]);

  const [suggestions, setSuggestions] = useState(chatData.intro.suggestions || []);

  const handleUserMessage = (input) => {
    const trimmedInput = input.trim().toLowerCase();

    const foundKey = Object.keys(chatData).find((key) => {
      const userMessage = chatData[key]?.userMessage?.toLowerCase();
      return userMessage === trimmedInput;
    });

    let botData, newSuggestions;

    if (foundKey) {
      botData = chatData[foundKey];
      newSuggestions = botData.suggestions || [];
    } else {
      botData = chatData.fallback;
      newSuggestions = botData.suggestions || [];
    }

    const botMessages = Array.isArray(botData)
      ? botData
      : botData.responses || [botData];

    const newMessages = [
      { sender: "user", type: "text", text: input },
      ...botMessages.map((msg) => ({
        sender: "bot",
        type: msg.type || "text",
        text: msg.text || "",
        data: msg,
      })),
    ];

    setMessages((prev) => [...prev, ...newMessages]);
    setSuggestions(newSuggestions);
  };

  const simulateAction = (actionId) => {
    const actionTextMap = Object.entries(chatData).reduce((acc, [key, value]) => {
      if (value.userMessage) {
        acc[key] = value.userMessage;
      }
      return acc;
    }, {});

    const userText = actionTextMap[actionId] || actionId;
    handleUserMessage(userText);
  };

  return {
    messages,
    suggestions,
    sendMessage: handleUserMessage,
    simulateAction,
  };
}
