import { useState, useEffect, useRef } from "react";
import ChatInput from "../components/ChatInput";
import ChatMessage from "../components/ChatMessage";
import Suggestions from "../components/Suggestions";
import { useChat } from "../../../context/ChatContext";

const TYPING_DELAY = 1200;
const MIN_TYPING_TIME = 1200;
const MAX_TYPING_TIME = 3000;
const TYPING_TIME_PER_CHAR = 30;

const ChatPage = () => {
  const { messages, suggestions, sendMessage, simulateAction } = useChat();

  const [visibleMessages, setVisibleMessages] = useState([]);
  const indexRef = useRef(0);
  const processingRef = useRef(false);
  const cancelledRef = useRef(false);

  const containerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    cancelledRef.current = false;
    return () => {
      cancelledRef.current = true;
    };
  }, []);

  useEffect(() => {
    if (messages.length < indexRef.current) {
      setVisibleMessages(messages);
      indexRef.current = messages.length;
      return;
    }
    if (processingRef.current) return;
    if (messages.length <= indexRef.current) return;

    processingRef.current = true;
    let cancelled = false;

    const processQueue = async () => {
      for (let i = indexRef.current; i < messages.length; i++) {
        if (cancelled || cancelledRef.current) break;

        const msg = messages[i];

        setVisibleMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last && last === msg) return prev;
          return [...prev, msg];
        });

        indexRef.current++;

        await delay(40);

        if (msg.sender === "user") {
          await delay(150);
        } else {
          const textLen = (msg?.text || "").length;
          const typingTime = Math.max(
            MIN_TYPING_TIME,
            Math.min(MAX_TYPING_TIME, textLen * TYPING_TIME_PER_CHAR)
          );
          await delay(typingTime);
        }
      }
      processingRef.current = false;
    };

    processQueue();

    return () => {
      cancelled = true;
      processingRef.current = false;
    };
  }, [messages]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollToBottom = () => {
      container.scrollTop = container.scrollHeight;
    };

    scrollToBottom();

    const resizeObserver = new ResizeObserver(scrollToBottom);
    resizeObserver.observe(container);

    return () => resizeObserver.disconnect();
  }, [visibleMessages]);

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  return (
    <div className="flex flex-col h-full">
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto space-y-4 p-4 transition-colors scroll-smooth"
      >
        {visibleMessages.map((msg, index) => {
          const isLast = index === visibleMessages.length - 1;
          return (
            <div key={msg.id ?? index} ref={isLast ? lastMessageRef : null}>
              <ChatMessage
                text={msg.text || ""}
                from={msg.sender || "bot"}
                data={msg.data || null}
                typingDelay={TYPING_DELAY}
                onRendered={() => {
                  // Scroll al mensaje cuando se renderiza
                  if (containerRef.current) {
                    containerRef.current.scrollTop = containerRef.current.scrollHeight;
                  }
                }}
              />
            </div>
          );
        })}
      </div>

      {suggestions?.length > 0 && (
        <Suggestions suggestions={suggestions} onSelect={simulateAction} />
      )}

      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default ChatPage;
