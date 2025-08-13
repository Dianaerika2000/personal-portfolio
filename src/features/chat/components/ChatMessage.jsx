import { useState, useEffect } from "react";

import ContactCard from "./ContactCard";
import CvCard from "./CvCard";
import ProfileCard from "./ProfileCard";
import ProjectCard from "./ProjectCard";
import ProjectDetailsCard from "./ProjectDetailsCard";
import StackGrid from "./StackGrid";

const TypingIndicator = () => (
  <div className="flex space-x-1">
    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></span>
    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-150"></span>
    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-300"></span>
  </div>
);

const ChatMessage = ({ text, from, data, typingDelay, onRendered, onViewMore }) => {
  const isUser = from === "user";
  const [showContent, setShowContent] = useState(isUser);

  useEffect(() => {
    if (!isUser) {
      const timer = setTimeout(() => setShowContent(true), typingDelay);
      return () => clearTimeout(timer);
    }
  }, [isUser, typingDelay]);

  useEffect(() => {
    if (showContent && typeof onRendered === "function") {
      const timer = setTimeout(() => onRendered(), 50);
      return () => clearTimeout(timer);
    }
  }, [showContent, onRendered]);

  const userStyles = "bg-purple-600 text-white rounded-t-lg rounded-l-lg rounded-br-none";
  const botStyles =
    "bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 rounded-t-lg rounded-r-lg rounded-bl-none";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] p-3 shadow-sm transition-colors ${isUser ? userStyles : botStyles
          }`}
      >
        {!showContent ? (
          <TypingIndicator />
        ) : (
          <>
            {text && <p className="whitespace-pre-line mb-2">{text}</p>}

            {!isUser && data && (
              <>
                {data.type === "profile" && <ProfileCard {...data} />}

                {data.type === "projectList" && data.items?.length > 0 && (
                  <div className="space-y-3">
                    {data.items.map((project) => (
                      <ProjectCard
                        key={project.id}
                        {...project}
                        onViewMore={(id, title) => onViewMore?.(id, title)}
                      />
                    ))}
                  </div>
                )}

                {/* 👇 nuevo: mostrar ficha de detalle */}
                {data.type === "projectDetail" && <ProjectDetailsCard details={data} />}

                {data.technologies && (
                  <StackGrid
                    technologies={data.technologies}
                    onRendered={onRendered}
                  />
                )}

                {data.channels && (
                  <ContactCard channels={data.channels} onRendered={onRendered} />
                )}

                {data.type === "cvCard" && (
                  <CvCard {...data} onRendered={onRendered} />
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
