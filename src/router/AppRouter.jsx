import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";
import MainLayout from "../components/layout/MainLayout";
import ChatPage from "../features/chat/pages/ChatPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ChatPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
