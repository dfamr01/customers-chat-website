import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginInScreen from "../../features/users/users-screens/LoginInScreen";
import NotFound from "../components/NotFound";
import ChatScreen from "../../features/chat/chat-screens/ChatScreen";
import { ScreensRoutes } from "./routes";
import CustomerServiceScreen from "../../features/customer-service/customer-service-screens/CustomerServiceScreen";
import HomeScreen from "../../features/home/home-components/home-screens/HomeScreen";

export const router = (isLoggedIn) =>
  createBrowserRouter([
    {
      path: ScreensRoutes.Home,
      element: <HomeScreen />,
      // element: <Navigate to={ScreensRoutes.Login} replace />,
    },
    {
      path: ScreensRoutes.Login,
      element: <LoginInScreen />,
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
