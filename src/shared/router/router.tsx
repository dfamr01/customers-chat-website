import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthScreen from "../../features/auth/auth-screens/AuthScreen";
import NotFound from "../components/NotFound";
import ChatScreen from "../../features/chat/chat-screens/ChatScreen";
import { ScreensRoutes } from "./routes";
import CustomerServiceScreen from "../../features/customer-service/customer-service-screens/CustomerServiceScreen";

export const router = (isLoggedIn) =>
  createBrowserRouter([
    {
      path: ScreensRoutes.Home,
      element: <Navigate to={ScreensRoutes.Login} replace />,
    },
    {
      path: ScreensRoutes.Login,
      element: <AuthScreen />,
    },
    {
      path: ScreensRoutes.Chat,
      element: !isLoggedIn ? (
        <Navigate to={ScreensRoutes.Login} />
      ) : (
        <ChatScreen />
      ),
    },
    {
      path: ScreensRoutes.CustomerService,
      element: <CustomerServiceScreen />,
    },
    {
      path: ScreensRoutes.NotFound,
      element: <NotFound />,
    },
  ]);
