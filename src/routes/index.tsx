import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { useAuth } from "contexts/Auth";

export const MyRoutes = () => {
  const { isAuth, isLoading } = useAuth();

  if (isLoading) return <></>;

  return (
    <BrowserRouter>{isAuth ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
};
