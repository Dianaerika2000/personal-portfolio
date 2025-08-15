import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ChatProvider, useChat } from "../../context/ChatContext";

const MainLayout = () => (
  <ChatProvider>
    <LayoutContent />
  </ChatProvider>
);

const LayoutContent = () => {
  const { simulateAction } = useChat();

  return (
    <div className="flex h-screen overflow-x-hidden">
      <Sidebar onAction={simulateAction} />
      <main className="
        flex-1 bg-gray-50 dark:bg-gray-800 
        px-2 sm:px-6 
        overflow-y-auto overflow-x-hidden"
      >
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
