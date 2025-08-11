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
    <div className="flex h-screen">
      <Sidebar onAction={simulateAction} />
      <main className="flex-1 bg-gray-50 dark:bg-gray-800 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
